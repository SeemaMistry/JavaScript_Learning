// try to make loop to read through all image files and create image object

// store card objects in the deck


/* How to fix the require problem: 
    https://sebhastian.com/javascript-require-is-not-defined/
    - have to encase app.js code into requirejs(["lodash"], function (lodash) { 
        all your .js code goes here
    }
    - have to download require 
*/

const deck = []

// import file system module 
// import { readdirSync } from "fs"
const fs = require("fs")

// get the the file names from the directory
imageFolder = fs.readdirSync("images")

imageFolder.forEach(file => {
    if (file != ("white.png" || "pattern.png" )){
        // let imageName = JSON.stringify(file)
        const card = {
            name:file.replace(".png", ""),
            img: `images/${file}`
        }
        deck.push(card)
        deck.push(card)
    }
})

// const cardArray = [
//     // burger
//         {
//             name: "burger",
//             img: "images/burger.png"
//         },
//         {
//             name: "burger",
//             img: "images/burger.png"
//         },
//     // chicken bucket
//         {
//             name: "chickenBucket",
//             img: "images/chickenBucket.png"
//         },
//         {
//             name: "chickenBucket",
//             img: "images/chickenBucket.png"
//         }
// ]

for (card in deck) {
    console.log(deck[card])
}
console.log(deck.length)

// // create the game board
// const grid = document.querySelector(".grid")

// // loop over cardArray and create image elements of each card
// function createBoard(arr) {
//     for (let i=0; i < arr.length; i++) {
//         // for each card create an img element with the pattern as the back of the card
//         // give each card id from 0-11
//         // add imag element to .grid class in html file
//         var card = document.createElement('img') 
//         card.setAttribute("src", "images/pattern.png") 
//         card.setAttribute("data-id", i) 
//         // card.addEventListener("click", flipCard)
//         grid.appendChild(card) 

//     }
// }

// createBoard(cardArray)

