urodz = {'Ola': '1.04.2002', 'Dawid': '5.03.2002', 'Karol': '28.08.2002'}

while True:
    name = input('Podaj imie : ')
    if name == '':
        break
    if name in urodz:
        print(urodz[name] + ' to dzien urodzin osoby: ' + name + '.')
    else:
        print('nie znaleziono daty tej osoby')
        bday = input('kiedy przypadają te urodziny ?: ')
        urodz[name] = bday
        print('Baza została uaktualniona. ')