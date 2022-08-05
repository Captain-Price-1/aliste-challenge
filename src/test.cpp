#include<bits/stdc++.h>
using namespace std;

string rev (string &a,i,j){
    if(i==j)
    return a;
    else
    {
        char temp;
        a[i]=temp;
        a[i]=a[j];
        a[j] = temp;
        i++;
        j--;
        rev(a,i,j);
    }
}

int sum (int a ,int b){
    return a+b;
}

int sum (int a){
    return a;
}


int main(){
    int x= sum(4,5);
    int y = sum(7);
    cout<<x<<" "<<endl;
    cout<<y<<" "<<endl;
}