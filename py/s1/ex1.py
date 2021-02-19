import sys
print('Podaj Imie: ')
smallPP = input()
print(smallPP + ' To twoje imie :D')
print('Twoje imie ma ' + str(len(smallPP)) + ' cyfr!')

spam = 0
while spam < 5:
    print(str(spam) + '. ' + smallPP)
    spam = spam + 1


#twoja stara
def funct(x):
    print('Twoja stara'+ x)
w = 'to penis'
funct(w)
