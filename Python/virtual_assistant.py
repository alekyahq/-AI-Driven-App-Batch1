
# Step - 1 ( Read Json file)
import json

f = open("C:\\Users\\perso\\Desktop\\AI-Driven-App\\Python\\chat.json")

data = json.load(f)

print(data)

# Step - 2 ( Reply function )

def reply(user_inp):
    if user_inp in data:
        print(data[user_inp])
    else:
        print("Sorry i coudn't understand you!")

    user_input()




# Step - 3 ( Input function )

def user_input():
    user_inp = input("Enter your message? ")
    reply(user_inp)

user_input()