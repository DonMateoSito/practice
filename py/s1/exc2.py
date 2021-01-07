#gra w zgadnij liczbę
import sys
print('Witaj w zgadnij liczbę !')
def gra():
    import random
    print('Mam na myśli pewną liczbę z zakresu od 1 do 20, spróboj zgadnąć')
    num = random.randint(1,20)
    for i in range(1,7):
        guess = int(input('spróbuj odgadnąć:'))
        if guess < num:
            print('Liczba jest za mała :( ')
        elif guess > num:
            print('Liczba jest za duża :( ')
        else:
            break
    if num == guess:
        print('Gratulacje ! Moja liczba to ' + str(num) + '. Zgadłeś w przeciągu ' + str(i) + ' prób.')
    else:
        print('Pech ! Moja liczba to ' + str(num) + '. Nie udało ci się tym razem.')

gra()
while True:
    print('Chcesz zagrać jeszcze raz ? [t/n]')
    anwser = input()
    if anwser == 't':
        gra()
    elif anwser == 'n':
        break
    else:
        continue
print('nacisnij enter aby wyjść')
a = input()





