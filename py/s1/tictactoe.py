import os
theboard = {
    'top-l': ' ', 'top-m': ' ', 'top-r': ' ',
    'mid-l': ' ', 'mid-m': ' ', 'mid-r': ' ',
    'bot-l': ' ', 'bot-m': ' ', 'bot-r': ' '
}
def printBoard(board):
    print(board['top-l'] + '|' + board['top-m'] + '|' + board['top-r'])
    print('-+-+-')
    print(board['mid-l'] + '|' + board['mid-m'] + '|' + board['mid-r'])
    print('-+-+-')
    print(board['bot-l'] + '|' + board['bot-m'] + '|' + board['bot-r'])

turn = 'X'
for i in range(9):
    
    printBoard(theboard)
    print('Ruch gracza ' + turn + '. Gdzie stawiasz znak? :')
    move = input()
    theboard[move] = turn
    if turn == 'X':
        turn = '0'
    else:
        turn == 'X'
    
    
os.system('cmd /k "cls"')
print(theboard)

