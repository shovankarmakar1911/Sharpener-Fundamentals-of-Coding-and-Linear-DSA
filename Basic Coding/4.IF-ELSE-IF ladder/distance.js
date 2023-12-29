/* 
Given a variable D (distance).
Write a program to print the cost.
Distance                               Cost
-------------------------------------------
0 through 100                          5.00
More than 100 but not more than 500    8.00
More than 500 but less than 1,000      10.00
1,000 or more                          12.00

Input:-

D = 700

Output:-

10

*/

let distance = 700;


if(distance>1000){
    console.log(12);
}
else if(distance>500 && distance<=1000){
    console.log(10);
}
else if(distance>100 && distance<=500){
    console.log(8);
}
else{
    console.log(5);
}