#include <iostream>
using namespace std;
int funk(int &zmienna){
     zmienna += 3;
     cout<<"Zmienna wartosc: "<< zmienna << endl;
}
int main(){
     int i = 3;
     cout<<"I ma wartosc: "<<i<<endl;
     funk(i);
     cout<<"I ma teraz wartosc "<<i<<endl;
     return 0;
}

// int zmien(int &a) 
// {
// 	a=a +  3;
// 	cout<<"Zmienna wewnatrz funkcji ma wartosc:" << a << endl;
// }

// void zmien1 (int &a)
// {
// 	a=a +  3;
// 	cout<<"Zmienna wewnatrz funkcji ma wartosc:" << a << endl;
// }

// int main()
// {
// 	int aa = 3;
// 	cout<<"przed wywolaniem funkcji zmienna ma wartosc:"<< aa << endl;
// 	zmien (aa);
	
// 	cout <<"Po wyjsciu z funkcji zmienna ma wartosc:"<< aa << endl;
// 	cout << endl;
	
	
// 	cout << endl;
	
	
// 	cout<<"przed wywolaniem funkcji zmienna ma wartosc:"<< aa << endl;
// 	zmien1 (aa);
	
// 	cout <<"Po wyjsciu z funkcji zmienna ma wartosc:"<< aa << endl;
// 	cout << endl;
	
// 	return 0;
// }