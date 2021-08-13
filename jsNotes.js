/* Followings Beginners Tutorial: https://www.youtube.com/watch?v=PkZNo7MFNFg
Current Stop Time Stamp: 24:58
*/


/* Data Types and Variables:
var - used throughout your WHOLE program
let - only used in the SCOPE of where you DECLARED let
const - variable that should never change
*/
var myName = "Seema"; 
myName = 8; // you can set it to other datatypes later (like python)

// other ways to name variables:
let ourName = "FCC";
const pi = 3.14;

/* Storing Values with Assignment Operator
There is a difference between storing variables and assigning variables
*/
var a; // declaring var a
console.log(a)
var b = 2; // assigning and declaring variable b
a = 8; // now assigning var a to a value
b = a; // assign content of b to a's values
console.log(a)

/* Increment a number
*/
var num = 10;
num++;
console.log(num) 