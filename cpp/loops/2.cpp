#include <iostream>
using namespace std;
string imie;
int num;
int main()
{
    cout << "Podaj stoje imie: ";
    cin >> imie;
    cout << "Podaj liczbe: ";
    cin >> num;
    for(int i=1; i<=num; i++)
    {
        cout << i <<". "<< imie << endl;
    }
    return 0;
}
//i<0    i>0