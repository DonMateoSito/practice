kot = []

for i in range(50):
    print ('Lista:' + str(kot))
    ques = str(input('Podaj nowy przymiotnik dla kota: '))
    kot.insert(i, ques)
    if ques == "":
        break

while True:
    print('oto lista : ' + str(kot))
    ques = input('Który przymuotnok chcesz usunąć ?: ')
    kot.remove(ques)
    if ques == "":
        break
print(kot)
while True:
    ques = input('Posortować listę ? (t/n)? : ')
    if ques == 't' or ques == 'T':
        kot.sort()
        print(kot)
        break
    elif ques == 'n' or ques == 'N':
        print(kot)
        break
    else:
        print('Zła wartość w odpowiedzi')
        continue


