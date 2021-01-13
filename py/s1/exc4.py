pets = ['dog','cat','cow','pig']
ques = input('Podaj imie zwierzaka: ')
if ques not in pets:
    print('Nie ma takiego zwierzaka. ')
else:
    print(ques +' ma się dobrze!')