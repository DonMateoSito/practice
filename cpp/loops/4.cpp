#include <iostream>
using namespace std;
int main()
{
    int n;
    int ctrl=0;
    cout << "Input a number to check prime or not: " ;
    cin >> n;

    for(int i=12;i<=n;i++)
        {
            if(n % i == 0)
            {
                ctrl++;
            }

        }
        if(ctrl==2)
        {
            cout<<"The entered number is a prime number.";
        }
        else
        {
            cout<<"The entered number is not a prime number.";
        }
        
    return 0;
}

/*
Input a number to check prime or not: 13
The entered number is a prime number.
*/
