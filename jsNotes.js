/* Followings Beginners Tutorial: https://www.youtube.com/watch?v=PkZNo7MFNFg
Current Stop Time Stamp: 24:58
How to run code in terminal: 
1) Go into correct folder -> cd JavaScript_Learning
2) Run code using node.j -> node myfile.js
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

/* Strings: Declare, escape literal quotes, quoting strings
There are different ways to by-pass the literal quotes inside a string

what you are tryig to print to the screen:
I am a "double quoted" string inside "double quotes."
*/ 
// Method 1: the backslash prior to quote
var myStr = "I am a \"double quoted\" string inside \"double quotes.\""
console.log(myStr)

// Method 1: single quotes to encase full string
var myStr = 'I am a "double quoted" string inside "double quotes."'
console.log(myStr)

// Method 1: back ticks (on ~ button) to encse full string (allows use of both single and double quotes to be printed)
var myStr = `'I am a "double quoted" string inside "double quotes."'`
console.log(myStr)


