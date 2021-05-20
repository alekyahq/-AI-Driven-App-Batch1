import module1


# build-in modules

import datetime

print(module1.version)

print(module1.sayHello())

print(datetime.datetime.now())


# OS module

import os 

path = "C:\\Users\\perso\\Desktop\\AI-Driven-App\\Python"

print(os.listdir(path))

# JOSN
import json

f = open("C:\\Users\\perso\\Desktop\\AI-Driven-App\\Python\\chat.json")

data = json.load(f)

print(data)