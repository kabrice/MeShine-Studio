# -*- coding: utf-8 -*-
__title__ = 'WebMetaDataGenerator'
__author__ = 'Edgar KAMDEM'
__version___ = '0.1'
__copyright__ = 'Copyright 2018, Edgar KAMDEM'


import nltk
import fr_core_news_sm
import en_core_web_sm
import re
import string
import logging

from nltk.collocations import *
from collections import Counter
from langdetect import detect
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from html import unescape
from difflib import SequenceMatcher


log = logging.getLogger(__name__)
TABSSPACE = re.compile(r'[\s\t]+')

class WebMetaDataGenerator:
    """WebMetaDataGenerator object to extract meta data (tags, images, video, colors, styles etc) from a webpage
        in english and french only
    """
    def __init__(self, url):

        self.url = url

        options = Options()
        options.add_argument("--headless")
        options.add_argument("--no-sandbox")
        options.add_argument("start-maximized")
        options.add_argument("disable-infobars")
        options.add_argument("--disable-extensions")
        self.browser = webdriver.Chrome(executable_path='/usr/local/bin/chromedriver', options=options, service_args=['--ignore-ssl-errors=true', '--ssl-protocol=any'])

        max_wait = 30
        self.browser.set_page_load_timeout(max_wait)
        self.browser.set_script_timeout(max_wait)

        self.browser.get(self.url)

        # Used in french tags extraction to extract tags with french connectors
        self.fr_connectors = ['avec', 'd\'', 'de', 'dans', 'du', 'pour']

    def similar(self, a, b):
        return SequenceMatcher(None, a, b).ratio()

    def innerTrim(self, value):
        if isinstance(value, str):
            # remove tab and white space
            value = re.sub(TABSSPACE, ' ', value)
            value = ''.join(value.splitlines())
            return value.strip()
        return ''

    def text_from_html(self, soup):
        """Get text of a p tag from a BeautifulSoup instance"""
        txts = []
        for p in soup.find_all("p"):
            try:
                txt = p.getText()
            except ValueError as err:  # lxml error
                log.info('%s ignoring lxml node error: %s', __title__, err)
                txt = None
            if txt:
                txt = unescape(txt)
                txt_lis = self.innerTrim(txt).split(r'\n')
                txt_lis = [n.strip(' ') for n in txt_lis]
                txts.extend(txt_lis)
        return '\n\n'.join(txts[:30])

    def tokenizer(self, nlp, doc, stopwords, tags, is_title, lemmatize=True, lang='en'):
        """build token from a text (webpage, title, etc)"""
        doc = doc.lower() # downcase
        doc = nlp(doc)
        tokens = []
        if lang == 'fr':
            stopwords = [x for x in stopwords if x not in self.fr_connectors]
        # Tokens from text of text_from_html
        if not is_title and lemmatize:
            tokens = [str(word.lemma_).strip() for word in doc if str(word).strip() not in stopwords]
        # bigrams_tokens and trigrams_tokens
        if not is_title and not lemmatize:
            tokens = [str(word).strip() for word in doc if str(word).strip() not in stopwords]
        tokens = [t for t in tokens if str(t).strip() not in stopwords]
        tokens = [t for t in tokens if str(t).strip() not in tags]
        tokens = [t for t in tokens if len(str(t).strip()) > 2] # remove short words, they're probably not useful
        tokens = [t for t in tokens if not any(c.isdigit() for c in t)] # remove any digits, i.e. "3rd edition"
        # Tokens from titles
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
        [s.extract() for s in soup('aside')]
        [s.extract() for s in soup('img')]
        [s.extract() for s in soup('pre')]
        [s.extract() for s in soup('figcaption')]
        [s.extract() for s in soup.findAll('div', {'class': regex})]
        [s.extract() for s in soup.findAll('div', {'class': regex1})]
        [s.extract() for s in soup.findAll('div', {'class': regex2})]
        [s.extract() for s in soup.find_all(style=re.compile("display.*?none"))]
        [s.extract() for s in soup.findAll(style="display:none")]
        return soup

    def remove_footer(self, soup):
        [s.extract() for s in soup('footer')]
        return soup

    def find_tags(self, soup):
        regex = re.compile('.*(?<!par)tag(?!ram)|topic.*', re.IGNORECASE)
        regex1 = re.compile('a|span')
        tags_list = []
        my_soup = soup.find_all("div", {"class" : regex})
        for EachPart in my_soup:
            if len(EachPart.select("p")) == 0:
                tuple = enumerate(EachPart.find_all(regex1))
                for i, j in tuple:
                    text = j.get_text('|', strip=True)
                    if "|" not in text:
                        if len(text) > 0 and text not in tags_list:
                            tags_list = tags_list+[text]
                    else:
                        next(tuple, None)
        return tags_list

    def title_node(self, soup, html_node):
        url = soup.find(html_node).contents[0]
        res = BeautifulSoup(str(url), "html5lib").find(text=True)
        if res == None:
            raise AttributeError("No title is returned")
        return res

    def find_title(self, soup):
        try:
            return self.title_node(soup, "h1")
        except:
            pass
        try:
            return self.title_node(soup, "h2")
        except :
            pass
        try:
            return self.title_node(soup, "h3")
        except:
            return ''

    def generate_tags(self):
        
        # Get the html page into BeautifulSoup
        soup = BeautifulSoup(self.browser.page_source, 'html.parser')
        
        self.browser.implicitly_wait(2)
        
        # Clean the webpage
        soup = self.remove_useless_tags(soup)
        tags = self.find_tags(soup)
        soup = self.remove_footer(soup)
        
        self.browser.close()
        self.browser.quit()
        
        text_content = self.text_from_html(soup)
        
        #list of punctuation specially for french
        excluded_punct = str.maketrans('!"#$%&\()*+,./:;<=>?@[\\]^_`{|}~', 31*" ")
        s = text_content.translate(excluded_punct)
 
        lang, nlp, stopwords_file = '', '', ''
        
        try:
            if(detect(s) ==  'en'):
                nlp = en_core_web_sm.load()
                stopwords_file = 'stopwords-en.txt'
            elif(detect(s) ==  'fr'):
                nlp = fr_core_news_sm .load()
                stopwords_file = 'stopwords-fr.txt'
        except:
            nlp = en_core_web_sm.load()
            stopwords_file = 'stopwords-en.txt'
            pass

        # Get the appropriate stopwords
        stopwords = set(w.rstrip() for w in open(stopwords_file))

        if len(tags)<10:
            tokens = self.tokenizer(nlp, s, stopwords, tags, is_title=False)

            title = ''
            try:
                title = self.find_title(soup)
            except:
                pass
            title_tokens = self.tokenizer(nlp, title, [], [], is_title=True, lemmatize=False, lang='fr')

            onegrams = Counter(tokens).most_common(5)
            onegrams = [onegram[0] for onegram in onegrams if onegram not in tags]

            for i, j in enumerate(onegrams):
                for p in title_tokens:
                    sim = self.similar(j, p)
                    if sim < 1 and sim > 0.85:
                        onegrams[i] = p

            bigrams_tokens = self.tokenizer(nlp, s, stopwords, tags, is_title=False, lemmatize=False)
            bigram_measures = nltk.collocations.BigramAssocMeasures()
            finder = BigramCollocationFinder.from_words(bigrams_tokens)
            # only bigrams that appear 3+ times
            finder.apply_freq_filter(3)
            # return the 10 n-grams with the highest PMI
            bigrams =finder.nbest(bigram_measures.pmi, 5)

            trigrams_contatenated = []
            tokens_from_title = []
            if lang == 'fr':
                trigrams_tokens = self.tokenizer(nlp, s, stopwords, tags, is_title=False, lemmatize=False, lang='fr')
                trigrams_measures = nltk.collocations.TrigramAssocMeasures()
                finder = TrigramCollocationFinder.from_words(trigrams_tokens)
                finder.apply_freq_filter(2)
                trigrams =finder.nbest(trigrams_measures.pmi, 5)
                new_tokens = self.tokenizer(nlp, title, [], [], is_title=True, lang='fr')
                print(trigrams)
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

            title_tokens = self.tokenizer(nlp, title, [], [], is_title=True, lemmatize=False)
            new_tokens = self.tokenizer(nlp, title, [], [], is_title=True)
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
            final_tags = tags+tokens_from_title+onegrams+bigrams_contatenated+trigrams_contatenated
            final_tags = [string.capwords(x, ' ') for x in final_tags if x.strip() and len(x.strip())<=50]
            print(final_tags)
        else:
            final_tags = [t for t in tags if str(t).strip() not in stopwords and len(str(t).strip())<51]
            for i,j in enumerate(final_tags):
                if not j.isupper() and j.strip():
                    final_tags[i] = string.capwords(j, ' ')
            print(final_tags[:15])