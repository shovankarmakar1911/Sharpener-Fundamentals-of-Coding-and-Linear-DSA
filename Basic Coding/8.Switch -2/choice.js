/* 
What will be the output of the following algorithm .



switch (x)

{

case 1:

print( "Choice is 1");

break;



case 2:

print( "Choice is 2");



case 3:

print("Choice is 3");



case 4:

print("Choice is 4");

break;



default:

print("Choice other than 1, 2, 3 and 4")

break;

}



Which of the following Option is correct if (x=2) :-

A) Choice is 1



B) Choice is 1

Choice is 2



C) Choice is 2 (Correct Answer)

Choice is 3

Choice is 4



D) Choice is 2

Choice is 3 

*/

let x = 2;

switch (x) {
  case 1:
    console.log("Choice is 1");

    break;

  case 2:
    console.log("Choice is 2");

  case 3:
    console.log("Choice is 3");

  case 4:
    console.log("Choice is 4");

    break;

  default:
    console.log("Choice other than 1, 2, 3 and 4");

    break;
}
