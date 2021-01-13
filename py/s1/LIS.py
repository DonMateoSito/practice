def LIS(lista):
    y = ''
    for i in lista:
        if i == lista[-2]:
            y += i + ' i ' + lista[-1] 
            break
        else:
            y += i + ', '
    print(y)


lista = [
    'jabłka',
    'banany',
    'tofu',
    'koty',
    'japs',
    'twoja',
    'stara',
    'kalafior',
    'penis'
]
LIS(lista)
