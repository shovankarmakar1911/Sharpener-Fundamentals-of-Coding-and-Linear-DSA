/* Write a program to print the largest of the three numbers.



Input:-

a=3, b=5, c=1

Output:-

5 */

let a = 3;
let b = 5;
let c = 1;
if(a >= b && a >= c){
    console.log(a);
}
else if(b >= c && b >= a){
    console.log(b);
}
else{
    console.log(c);
}