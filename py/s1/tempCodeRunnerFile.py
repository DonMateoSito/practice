#dodaj wszystkie liczby w zakresie od 0 do 100
def div():
    x = int(input('Podaj pierwszy nr: '))
    y = int(input('Podaj drugi nr: '))
    global total
    total = x / y
    return total

div()
print(total)
