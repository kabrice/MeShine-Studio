"""
    Generate an svg file, which will be used to extract the image out of html file associated with
"""
import os
import time
from bs4 import BeautifulSoup
from django.conf import settings
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class BmJsonGenerator:
    def __init__(self, jsonData):
        self.jsonData = jsonData

    def create_svg(self):
        json_data = self.jsonData
        with open(os.path.join(settings.MEDIA_ROOT + "/userCreations/userName/htmls/assets", "jsonData.json"), "w") as file:
           file.write(json_data)

        url = "http://localhost:8080/media/userCreations/userName/htmls/bodymovintemp.html"
        options = Options()
        options.add_argument("--headless")
        options.add_argument("--no-sandbox")
        options.add_argument("start-maximized")
        options.add_argument("disable-infobars")
        options.add_argument("--disable-extensions")
        options.add_argument('--disable-dev-shm-usage')
        browser = webdriver.Chrome(executable_path='/usr/local/bin/chromedriver', options=options, service_args=['--ignore-ssl-errors=true', '--ssl-protocol=any'])

        browser.get(url)
        time.sleep(1)
        WebDriverWait(browser, 5).until(EC.presence_of_element_located(("xpath", '//*[name()="svg"]')))

        soup = BeautifulSoup(browser.page_source, 'html.parser')
        if not soup.find('svg').has_attr('xmlns:xlink'):
            soup.find('svg')['xmlns:xlink'] = 'http://www.w3.org/1999/xlink'
        return soup.find().svg



