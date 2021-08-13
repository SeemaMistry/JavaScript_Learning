/* Followings Beginners Tutorial: https://www.youtube.com/watch?v=PkZNo7MFNFg
Current Stop Time Stamp: 36:29 -> Moved to madlibs.js
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
console.log(num); 

/* Strings: Declare, escape literal quotes, quoting strings
There are different ways to by-pass the literal quotes inside a string

what you are tryig to print to the screen:
I am a "double quoted" string inside "double quotes."
*/ 
// Method 1: the backslash prior to quote
var myStr = "I am a \"double quoted\" string inside \"double quotes.\"";
console.log(myStr);

// Method 1: single quotes to encase full string
var myStr = 'I am a "double quoted" string inside "double quotes."';
console.log(myStr);

// Method 1: back ticks (on ~ button) to encse full string (allows use of both single and double quotes to be printed)
var myStr = `'I am a "double quoted" string inside "double quotes."'`;
console.log(myStr);

/* Escaping Sequences in Strings
A list of other commonly used tools in strings to escape characters in string:
\'  single quote 
\"  double quote
\\  backslash

A list of commonly used string formating sequences:
\n  newline  
\t  carriage return
\r  tab
\b  backspace
\f  form feed
*/

var formatedStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(formatedStr);

/* More string things
1) Concatenate strings 
2) Concatenate with variables
3) Get length
4) Bracket notation
5) immutability
*/
// Concatenate methods:
var sentence = "First sentence. " + "Second sentence.";
var first = "The first sentence. ";
var second = "The second sentence.";
first += second;
console.log(sentence);
console.log(first);

// Add variables:
var adj = "fun!";
var ourStr = "Learning to code is " + adj;
console.log(ourStr);

// Length
var firstN = "Seema";
var firstNLength = firstN.length;
console.log(firstNLength);

// Bracket Notion for indexing
var letter0 = "";
var letter1 = "";
var letter2 = "";
var letter3 = "";
var letter4 = "";

letter0 = firstN[0];
letter1 = firstN[1];
letter2 = firstN[2];
letter3 = firstN[3];
letter4 = firstN[firstN.length - 1]; // or letter4 = firstN[4];
console.log(letter0);
console.log(letter1);
console.log(letter2);
console.log(letter3);
console.log(letter4);

/* Strings are immutable - meaning they cannot be altered once created
Does not mean they cannot be changed, just the individual character literals cannot be changed
So this is not possible:
    var myStr = "Jello World";
    mystr[0] = "H"; 
This will produce an error because you cannot change INDIVIDUAL characters in a string.

You can, however, change the full string
*/
var myStr = "Jello World";
mystr = "Hello World";



