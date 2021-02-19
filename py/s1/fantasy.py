
def show_inventory():
    print('inventory:')
    item_total = 0
    for v,k in inventory.items():
        print(str(k) + ' '+v)
        item_total += (k)
    print('Wszystkie rzeczy: ' + str(item_total))
def addToInventory(inventory, addItems):
    for i in addItems:
        if i in inventory.keys():
            inventory[i] += 1
        else:
            inventory.setdefault(i,1)
    print('--------dodano nowe przedmioty--------')



inventory = {'pochodnia': 1, 'złote monety': 42, 'sztylet': 1, 'strzała': 12}
loot = ['złote monety', 'sztylet', 'złote monety', 'złote monety', 'ruby']

show_inventory()
addToInventory(inventory,loot)

show_inventory()
