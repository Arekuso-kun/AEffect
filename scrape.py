import requests
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from bs4 import BeautifulSoup 
import requests

import time

url = "https://myanimelist.net/character.php"

with open('scrape.html', 'r', encoding="utf8") as file:
    content = file.read()
    # print(content)

    prices_list = []
    chances_list = []

    soup = BeautifulSoup(content, 'lxml')

    i = 200

    for item in soup.find_all('img'):
        print(item['src'])
        
        i = i + 1

        img_data = requests.get(item['src']).content
        with open(f'data/MAL/image_name_{i}.jpg', 'wb') as handler:
            handler.write(img_data)
    


