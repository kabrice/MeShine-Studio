import os
import time

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

TARGET_FOLDER = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+'/testToBeDeleted/animated_you_wanted/{}.png'
WINDOW_SIZE = 1920, 1080
ANIM_DURATION = 2
FRAMES = 60
BASE_SCR = 'arguments[0].setAttribute("style", "display: block;animation-delay: {}s;animation-duration: {}s; animation-iteration-count: infinite;animation-play-state: paused;")'

options = Options()
options.add_argument("--headless")
options.add_argument("--no-sandbox")
options.add_argument("start-maximized")
options.add_argument("disable-infobars")
options.add_argument("--disable-extensions")

driver = webdriver.Chrome(executable_path='/usr/local/bin/chromedriver', options=options,
                          service_args=['--ignore-ssl-errors=true', '--ssl-protocol=any'])
# driver = webdriver.Chrome(executable_path=r'c:\_\chromedriver.exe')
driver.set_window_size(*WINDOW_SIZE)
driver.get('https://codepen.io/nathantaylor/pen/RomErr')

header = driver.find_element_by_xpath('//*[@class="site__header island"]')
content = driver.find_element_by_xpath('//*[@class="site__content island"]')

shots = []
for frame in range(FRAMES):
    for elem in (header, content):
        driver.execute_script(BASE_SCR.format((frame / FRAMES) * -ANIM_DURATION, ANIM_DURATION), elem)
    shots.append(driver.get_screenshot_as_png())

if not os.path.isdir(os.path.dirname(TARGET_FOLDER)):
    os.makedirs(os.path.dirname(TARGET_FOLDER))

# dumping all captured frames
for i in range(len(shots)):
    with open(TARGET_FOLDER.format(i), "wb") as f:
        f.write(shots[i])