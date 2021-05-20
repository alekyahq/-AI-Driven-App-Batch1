#1 if

val = 20

if val == 12:
    print("The value of val is", val)
    if val > 5:
        print("In side second if")
    print("In side first if")

print("Out side of if block")

#2 else

if val == 15:
    print("If executed")
else:
    print("Else Executed")


#3 elif

if val == 15:
    print("If Executed")
elif val == 20:
    print("Elif Executed") 
else:
    print("Else Executed")