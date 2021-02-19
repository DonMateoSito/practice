#include <iostream>
using namespace std;

int sample, i;
int main()
{
    cout << "Podaj wartosc max gwiazdek: " ;
    cin >> sample;
    for (i=0; i<sample;i++)
    {
        //cout << "gwiazdka " << endl;
        cout << "*"  ;
    }
    return 0;
}



