//1- Write a program that allow to user enter number then print it

// var number = window.prompt("enter ur num")
// window.alert(number);

//-------------------------------------------------------------------//

//2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// var number = Number(window.prompt("enter ur num")) 
// if(number % 3 == 0 && number % 4 == 0){
// window.alert("Yes")
// }
// else{
// window.alert("No")
// }


//-------------------------------------------------------------------//

//3- Write a program that allows the user to insert 2 integers then print the max

/*
var num1 = Number( window.prompt("enter ur num1"))
var num2 = Number( window.prompt("enter ur num2"))
if (num1>num2){
window.alert(num1)
}else{
window.alert(num2)
}
*/

//-------------------------------------------------------------------//

//4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

/*
var num = Number(window.prompt("enter Num"));
if(num<0){
window.alert("negative")
}else{
window.alert("positive")
}
*/

//-------------------------------------------------------------------//

//5- Write a program that take 3 integers from user then print the max element and the min element.

/*
var num1 = Number(window.prompt("Enter Num1"));
var num2 = Number(window.prompt("Enter Num2"));
var num3 = Number(window.prompt("Enter Num3"));

if(num1>num2&&num1>num3){
window.alert("Max Number is :: "+num1)
}else if
(num2>num1&&num2>num3){
window.alert("Max Number is :: "+num2)
}else if
(num3>num1&&num3>num2){
window.alert("Max Number is :: "+num3)
}

if(num1<num2&&num1<num3){
window.alert("Min Number is :: "+num1)
}else if
(num2<num1&&num2<num3){
window.alert("Min Number is :: "+num2)
}else if
(num3<num1&&num3<num2){
window.alert("Min Number is :: "+num3)
}
*/

//-------------------------------------------------------------------//

//6- Write a program that allows the user to insert integer number then check If a number is oven or odd

/*
var Num = Number(window.prompt("Enter Number"));

if(Num%2==0){
window.alert("Num "+Num+" is Even")
}else{
window.alert("Num "+Num+" is Odd")
}
*/

//-------------------------------------------------------------------//

//8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

/*
var character = window.prompt("Enter your character");
switch (character) {
case "a":
case "e":
case "i":
case "o":
case "u":
window.alert("vowel");
break;
default:
window.alert("consonant");
break;
}
*/
//-------------------------------------------------------------------//

//9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number.
/*
var num = Number(window.prompt("Enter num :"));
for(var i = 1;i<=num;i++){
window.alert(i);
}
*/

//-------------------------------------------------------------------//

//10 - Write a program that allows user to insert integer then print a multiplication table up to 12

/*
var num = Number(window.prompt("Enter num :"));
for(var i=1;i<=12;i++){
window.alert(i*num);
}
*/

//-------------------------------------------------------------------//

//11- Write a program that allows to user to insert number then print all even numbers between 1 to this number.

/*
var num = Number(window.prompt("Enter num :"));
for (var i = 2; i <= num; i += 2) {
window.alert(i);
}
*/
//-------------------------------------------------------------------//
//12 -Write a program that take two integers then print the power.

/*
var num = Number(window.prompt("Enter num :"));
var power = Number(window.prompt("Enter power :"));
var result = 1;
for (var i = 0; i < power; i++) {
    result*=num;
}
window.alert(result);
*/

//-------------------------------------------------------------------//

//13 -Write a program to enter marks of five subjects and calculate total, average and percentage.
/*
var total =0;
for(var i =0 ;i<5;i++){
    total+=Number( window.prompt("Enter mark subject"+(i+1)));
}

window.alert("Total marks = "+total);
window.alert("Avg = "+total/5);
window.alert("percentage = "+total/500*100);
*/

//-------------------------------------------------------------------//

// 14- Write a program to input month number and print number of days in that month.
/*
var monthNumber = window.prompt("Enter month number");

if(monthNumber ==1||monthNumber==3 ||monthNumber==5 ||monthNumber==7||monthNumber==8||monthNumber==10||monthNumber==12){
    window.alert("31")
}else if(monthNumber ==2){
    window.alert("28 days in a common year and 29 days in leap years")
}else if(monthNumber==4||monthNumber==6||monthNumber==9||monthNumber==11){
    window.alert("30");
}
*/

//-------------------------------------------------------------------//

//14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

/*
var physicsMark =Number( window.prompt("Enter ur mark of physics subject"));
var chemistryMark = Number(window.prompt("Enter ur mark of Chemistry subject"));
var biologyMark = Number(window.prompt("Enter ur  mark of Biology subject"));
var mathematicsMark = Number(window.prompt("Enter ur  mark of Mathematics subject"));
var computerMark = Number(window.prompt("Enter ur  mark of Computer subject"));

var percentage = (physicsMark+chemistryMark+biologyMark+mathematicsMark+computerMark)/500*100;

if(percentage>=90){
    window.alert("Grade A")
}else if(percentage>=80){
    window.alert("Grade B")
}else if(percentage>=70){
    window.alert("Grade C")
}else if(percentage>=60){
    window.alert("Grade D")
}else if(percentage>=40){
    window.alert("Grade E")
}else if(percentage<40){
    window.alert("Grade F")
}
*/

//-------------------------------------------------------------------//

//15- Write a program to print total number of days in month

/*
var monthNumber = window.prompt("Enter month number");
switch (monthNumber) {
case "1":
case "3":
case "5":
case "7":
case "8":
case "10":
case "12":
window.alert("31");

break;

case "2":
window.alert("28 days, It comes every four years 29 days");

break;

case "4":
case "6":
case "9":
case "11":
window.alert("30");

break;
}

*/
//-------------------------------------------------------------------//

//16- Write a program to check whether an alphabet is vowel or consonant

/*
var char = window.prompt("Enter ur char");
switch (char) {
case "a":
case "A":

case "e":
case "E":

case "o":
case "O":

case "i":
case "I":

case "u":
case "U":
console.log("vowel");
break;
default:
console.log("consonant");
}
*/
//-------------------------------------------------------------------//

//17- Write a program to find maximum between two numbers

/*
var number1 = window.prompt("enter ur number 1")
var number2 = window.prompt("enter ur number 2")

switch (number1 > number2) {
    case true:
    window.alert(number1);
        break;
    case false:
        window.alert(number2);
        break;
}


// another
// switch (number1 > number2) {
//     case true:
//     console.log(number1);
//         break;
//     case false:
//     console.log(number2);
// }

*/
//-------------------------------------------------------------------//

//18- Write a program to check whether a number is even or odd
/*
var number = window.prompt("Enter ur number");
switch (number % 2 == 0) {
case true:
    window.alert("Even");
    break;
case false:
    window.alert("odd");
    break;
}
*/
//-------------------------------------------------------------------//

//19- Write a program to check whether a number is positive or negative or zero
/*
var number = Number(window.prompt("Enter number"));
switch (number > 0) {
case true:
window.alert("Number is positive");
break;

case false:
switch (number == 0) {
case true:
window.alert("Zero");
break;

case false:
window.alert("negative");
break;

}
break;
}
*/
//-------------------------------------------------------------------//

//20- Write a program to create Simple Calculator

var number1 = Number(window.prompt("Enter first number"));
var arithmeticSign = window.prompt("Enter your Arithmetic sign");
var number2 = Number(window.prompt("Enter second number"));

switch (arithmeticSign) {
    case "+":
        window.alert(number1 + number2);
        break;
    case "-":
        window.alert(number1 - number2);
        break;
    case "*":
        window.alert(number1 * number2);
        break;
    case "/":
        window.alert(number1 / number2);
        break;
}