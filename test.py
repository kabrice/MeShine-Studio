from bs4 import BeautifulSoup
from bs4.element import Comment
import requests
import nltk
import fr_core_news_sm
import en_core_web_sm
import unicodedata
from nltk.collocations import *
from nltk.stem import WordNetLemmatizer
from collections import Counter
from langdetect import detect
import re

from src.meshine_project.WebMetaDataGenerator1.WebMetaDataGenerator import WebMetaDataGenerator
webMetaDataGenerator = WebMetaDataGenerator('https://stackoverflow.com/questions/5681271/or-statement-handling-two-clauses-python')
webMetaDataGenerator.generate_tags()

def tag_visible(element):
    if element.parent.name in ['style', 'script', 'head', 'title', 'meta', 'a', 'header', '[document]']:
        return False
    if isinstance(element, Comment):
        return False
    return True


def text_from_html(body):
    soup = BeautifulSoup(body.content, 'html.parser')
    [s.extract() for s in soup('footer')]
    texts = soup.findAll(text=True)
    visible_texts = filter(tag_visible, texts)
    return u" ".join(t.strip() for t in visible_texts)


# def my_tokenizer(s):
#     s = s.lower() # downcase
#     tokens = nltk.tokenize.word_tokenize(s) # split string into words (tokens)
#     tokens = [t for t in tokens if len(t) > 2] # remove short words, they're probably not useful
#     tokens = [wordnet_lemmatizer.lemmatize(t) for t in tokens] # put words into base form
#     tokens = [t for t in tokens if t not in stopwords] # remove stopwords
#     tokens = [t for t in tokens if not any(c.isdigit() for c in t)] # remove any digits, i.e. "3rd edition"
#     return tokens

def my_tokenizer(doc):
    doc = doc.lower() # downcase
    doc = nlp(doc)
    tokens = [str(word.lemma_).strip() for word in doc if str(word).strip() not in stopwords]  # split string into words (tokens)
    tokens = [t for t in tokens if str(t).strip() not in stopwords]
    tokens = [t for t in tokens if len(str(t).strip()) > 2] # remove short words, they're probably not useful
    tokens = [t for t in tokens if not any(c.isdigit() for c in t)] # remove any digits, i.e. "3rd edition"
    return tokens

#html = requests.get('http://blog.samaltman.com/')
html = requests.get('https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333?dsdkdkls')
text_content = text_from_html(html)
excluded_punct = str.maketrans('!"#$%&\()*+,./:;<=>?@[\\]^_`{|}~', 31*" ")
s= text_content.translate(excluded_punct)
s = unicodedata.normalize("NFKD", s)
#wordnet_lemmatizer = WordNetLemmatizer()
#stopwords = set(w.rstrip() for w in open('stopwords-en.txt'))

if(detect(s) ==  'en'):
    nlp = en_core_web_sm.load()
    stopwords_file = 'stopwords-en.txt'
    print('en')
elif(detect(s) ==  'fr'):
    nlp = fr_core_news_sm .load()
    stopwords_file = 'stopwords-fr.txt'
    print('fr')


stopwords = set(w.rstrip() for w in open(stopwords_file))

#s = s.encode('ascii', 'ignore')  # this will throw exception if bad characters
tokens = my_tokenizer(s)
tokens_frequency = Counter(tokens).most_common(5)
tokens_frequency = [token[0] for token in tokens_frequency if token not in ['de']]

bigram_measures = nltk.collocations.BigramAssocMeasures()

# change this to read in your data
finder = BigramCollocationFinder.from_words(tokens)

# only bigrams that appear 3+ times
finder.apply_freq_filter(3)

# return the 10 n-grams with the highest PMI
bigrams =finder.nbest(bigram_measures.pmi, 5)

print("tokens_frequency", tokens_frequency)
#print("bigrams", [(x, finder.score_ngram(bigram_measures.pmi, x[0], x[1])) for x in bigrams])
print("bigrams", [x[0]+" "+x[1] for x in bigrams])

# Get the article title
#html = requests.get('http://www.mamanlouve.com/2017/10/13/les-faire-dormir-ensemble-bonne-ou-mauvaise-idee/')
soup = BeautifulSoup(html.content, 'html.parser')
url = soup.find('h1').contents[0]
url_text = BeautifulSoup(str(url), "html5lib").find(text=True)
print(url_text)
title_tokens = nltk.word_tokenize(url_text)
doc = url_text.lower() # downcase
doc = nlp(doc)
tokens = [str(word.lemma_).strip() for word in doc]  # split string into words (tokens)
rtokens = []
for x in bigrams:
    if x[0] in tokens and x[1] in tokens:
        t0 = tokens.index(x[0])-1
        t1 = tokens.index(x[1])-1
        t0_to_t1 = title_tokens[t0:t1]
        if(len(t0_to_t1)<4):
            token = " ".join(t0_to_t1)
        if len(token)>0:
            rtokens.append(token)

# Get the article tag
html = requests.get('https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333?dsdkdkls')
soup = BeautifulSoup(html.content, 'html.parser')
regex = re.compile('.*tag(?!ram)|topic.*', re.IGNORECASE)
tags_list = []
for EachPart in soup.find_all("div", {"class" : regex}):
    text = EachPart.get_text('|', strip=True)
    if len(text) > 0:
        tags_list.append(text)
tags = ('|'.join(tags_list)).split('|')
print(tags)







