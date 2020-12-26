#include <iostream>
using namespace std;


int main()
{
    int bakterie =1;
    int godziny=0;

    while(bakterie <= 1000000000)
    {

        godziny++;
        bakterie=bakterie*2;

        cout << godziny << " h. Ilosc bakterii: "<<bakterie<<endl;
        

    }   
    return 0;
}