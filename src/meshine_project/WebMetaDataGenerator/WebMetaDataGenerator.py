from bs4 import BeautifulSoup
from selenium import webdriver
from bs4.element import Comment
import requests
import nltk
import fr_core_news_sm
import en_core_web_sm
import unicodedata
from nltk.collocations import *
from collections import Counter
from langdetect import detect
import re
import string
from difflib import SequenceMatcher
from newspaper import Article

class WebMetaDataGenerator:

    def __init__(self, url):
        self.url = url
        self.browser = webdriver.PhantomJS(service_args=['--ignore-ssl-errors=true', '--ssl-protocol=any'])
        self.browser.get(self.url)
        #self.html = requests.get(self.url)
        self.fr_connectors = ['avec', 'd\'', 'de', 'dans', 'du', 'pour']

    def similar(self, a, b):
        return SequenceMatcher(None, a, b).ratio()

    def tag_visible(self, element):
        if element.parent.name in ['style', 'script', 'head', 'title', 'meta', 'a', 'header', 'nav', '[document]']:
            return False
        if isinstance(element, Comment):
            return False
        elif re.match('<!--.*-->', str(element.encode('utf-8'))):
            return False
        return True

    def text_from_html(self, soup):
        texts = soup.findAll(text=True)
        visible_texts = filter(self.tag_visible, texts)
        return u" ".join(t.strip() for t in visible_texts)

    def my_tokenizer(self, nlp, doc, stopwords, tags, is_title, lemmatize=True, lang='en'):
        doc = doc.lower() # downcase
        doc = nlp(doc)
        tokens = []
        if lang == 'fr':
            stopwords = [x for x in stopwords if x not in self.fr_connectors]
        if not is_title and lemmatize:
            tokens = [str(word.lemma_).strip() for word in doc if str(word).strip() not in stopwords]
        # bigrams_tokens and trigrams_tokens
        if not is_title and not lemmatize:
            tokens = [str(word).strip() for word in doc if str(word).strip() not in stopwords]
        tokens = [t for t in tokens if str(t).strip() not in stopwords]
        tokens = [t for t in tokens if str(t).strip() not in tags]
        tokens = [t for t in tokens if len(str(t).strip()) > 2] # remove short words, they're probably not useful
        tokens = [t for t in tokens if not any(c.isdigit() for c in t)] # remove any digits, i.e. "3rd edition"
        if is_title and lemmatize:
            tokens = [str(word.lemma_).strip() for word in doc]
        if is_title and not lemmatize:
            tokens = [str(word).strip() for word in doc]
        entities = [str(ent).strip() for ent in doc.ents if len(str(ent).strip()) > 2 and not any(c.isdigit() for c in str(ent))]
        return tokens + entities

    def remove_useless_tags(self, soup):
        regex = re.compile('.*comment.*', re.IGNORECASE)
        regex1 = re.compile('.*menu.*', re.IGNORECASE)
        regex2 = re.compile('.*footer.*', re.IGNORECASE)
        #regex3 = re.compile('display.*?none', re.IGNORECASE)
        [s.extract() for s in soup('footer')]
        [s.extract() for s in soup('aside')]
        [s.extract() for s in soup('aside')]
        [s.extract() for s in soup('pre')]
        [s.extract() for s in soup.findAll('div', {'class': regex})]
        [s.extract() for s in soup.findAll('div', {'class': regex1})]
        [s.extract() for s in soup.findAll('div', {'class': regex2})]
        [s.extract() for s in soup.find_all(style=re.compile("display.*?none"))]
        [s.extract() for s in soup.findAll(style="display:none")]

        return soup

    def find_tags(self, soup):
        regex = re.compile('.*(?<!par)tag(?!ram)|topic.*', re.IGNORECASE)
        tags_list = []
        for EachPart in soup.find_all("div", {"class" : regex}):
            text = EachPart.get_text('|', strip=True)
            if len(text) > 0 and text not in tags_list:
                tags_list.append(text)
        return list(set(('|'.join(tags_list)).split('|')))

    def find_title(self, soup):
        try:
            url = soup.find('h1').contents[0]
        except:
            try:
                url = soup.find('h2').contents[0]
            except:
                url = soup.find('h3').contents[0]
        return BeautifulSoup(str(url), "html5lib").find(text=True)

    def generate_tags(self):
        soup = BeautifulSoup(self.browser.page_source, 'html.parser')
        #soup = BeautifulSoup(self.html.content, 'html5lib')
        self.browser.implicitly_wait(2)
        self.browser.close()
        soup = self.remove_useless_tags(soup)
        tags = self.find_tags(soup)
        text_content = self.text_from_html(soup)

        # Debug: HTML text in file
        text_file = open("Output.html", "w")
        text_file.write(str(soup))
        text_file.close()

        #Write text content on this file for debug purpose
        text_file = open("text_content.html", "w")
        text_file.write(str(text_content))
        text_file.close()
        excluded_punct = str.maketrans('!"#$%&\()*+,./:;<=>?@[\\]^_`{|}~', 31*" ")
        s = text_content.translate(excluded_punct)
        s = unicodedata.normalize("NFKD", s)
        lang, nlp, stopwords_file = '', '', ''
        try:
            if(detect(s) ==  'en'):
                nlp = en_core_web_sm.load()
                stopwords_file = 'stopwords-en.txt'
                print('en')
            elif(detect(s) ==  'fr'):
                nlp = fr_core_news_sm .load()
                stopwords_file = 'stopwords-fr.txt'
                print('fr')
        except:
            nlp = en_core_web_sm.load()
            stopwords_file = 'stopwords-en.txt'
            pass

        stopwords = set(w.rstrip() for w in open(stopwords_file))

        if len(tags)<10:
            tokens = self.my_tokenizer(nlp, s, stopwords, tags, is_title=False)

            onegrams = Counter(tokens).most_common(5)
            onegrams = [onegram[0] for onegram in onegrams if onegram not in tags]

            bigrams_tokens = self.my_tokenizer(nlp, s, stopwords, tags, is_title=False, lemmatize=False)
            bigram_measures = nltk.collocations.BigramAssocMeasures()
            finder = BigramCollocationFinder.from_words(bigrams_tokens)
            # only bigrams that appear 3+ times
            finder.apply_freq_filter(3)
            # return the 10 n-grams with the highest PMI
            bigrams =finder.nbest(bigram_measures.pmi, 5)

            title = ''
            try:
                title = self.find_title(soup)
            except:
                pass
            trigrams_contatenated = []
            tokens_from_title = []
            if lang == 'fr':
                trigrams_tokens = self.my_tokenizer(nlp, s, stopwords, tags, is_title=False, lemmatize=False, lang='fr')
                trigrams_measures = nltk.collocations.TrigramAssocMeasures()
                finder = TrigramCollocationFinder.from_words(trigrams_tokens)
                finder.apply_freq_filter(3)
                trigrams =finder.nbest(trigrams_measures.pmi, 5)
                title_tokens = self.my_tokenizer(nlp, title, [], [], is_title=True, lemmatize=False, lang='fr')
                new_tokens = self.my_tokenizer(nlp, title, [], [], is_title=True, lang='fr')
                for x in trigrams:
                    if x[0] in new_tokens and x[1] in new_tokens and x[2] in new_tokens:
                        token = ''
                        t0 = new_tokens.index(x[0])
                        t3 = new_tokens.index(x[2])+1
                        t0_to_t3 = title_tokens[t0:t3]
                        if(len(t0_to_t3)<5):
                            token = " ".join(t0_to_t3)
                        if len(token)>0:
                            tokens_from_title.append(token)
                            trigrams.remove(x)
                    if (x[0] not in self.fr_connectors) or (x[1] not in self.fr_connectors) or (x[2] not in self.fr_connectors) :
                        if x in trigrams:
                            trigrams.remove(x)
                    else:
                        trigrams_contatenated = [x[0]+" "+x[1]+" "+x[2] for x in trigrams if x[0] != x[1]]

            title_tokens = self.my_tokenizer(nlp, title, [], [], is_title=True, lemmatize=False)
            new_tokens = self.my_tokenizer(nlp, title, [], [], is_title=True)
            for x in bigrams:
                if x[0] in new_tokens and x[1] in new_tokens:
                    token = ''
                    t0 = new_tokens.index(x[0])
                    t1 = new_tokens.index(x[1])+1
                    t0_to_t1 = title_tokens[t0:t1]
                    if(len(t0_to_t1)<4):
                        token = " ".join(t0_to_t1)
                    if len(token)>0:
                        tokens_from_title.append(token)
                        bigrams.remove(x)
            bigrams_contatenated = [x[0]+" "+x[1] for x in bigrams if x[0] != x[1]]

            for i in bigrams_contatenated:
                for j in bigrams_contatenated:
                    sim = self.similar(i, j)
                    if sim < 1 and sim > 0.85:
                        bigrams_contatenated.remove(sorted([i, j])[0])

            print("tags", tags)
            print("tokens_from_title", tokens_from_title)
            print("onegrams", onegrams)
            print("bigrams_contatenated", bigrams_contatenated)
            print("trigrams_contatenated", trigrams_contatenated)
            final_tags = tags+tokens_from_title+onegrams+bigrams_contatenated
            final_tags = [string.capwords(x, ' ') for x in final_tags if x.strip()]
            print(final_tags)
        else:
            final_tags = [t for t in tags if str(t).strip() not in stopwords]
            for i,j in enumerate(final_tags):
                if not j.isupper() and j.strip():
                    final_tags[i] = string.capwords(j, ' ')
            #final_tags = [string.capwords(x, ' ') for x in final_tags if x.strip() and not x.isupper()]
            print(final_tags[0:15])

    def tags_from_newspaper(self):
        article = Article(self.url)
        article.download()
        article.parse()

        text_file = open("text_content.html", "w")
        text_file.write(str(article.text))
        text_file.close()

        print("article.authors", article.authors)
        print("article.publish_date", article.publish_date)

        article.nlp()
        print("article.keywords", article.keywords)
        print("article.summary", article.summary)
        print("article.top_image", article.top_image)






