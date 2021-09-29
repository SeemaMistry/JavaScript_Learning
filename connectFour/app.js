// make a 7x6 grid in html grid class
const grid = document.querySelector(".grid")
let gridSquares = ""

for (let i = 1; i < 50; i++) {
    if (i < 43) {
        // make empty div
        gridSquares += `<div></div>`
    } else {
        // make div with class name taken
        gridSquares += `<div class="taken"></div>`
    }
}
grid.innerHTML += gridSquares 

// get attributes
const squares = document.querySelectorAll(".grid div")
const scoreEl = document.querySelector("#score-el")
const playerEl = document.getElementById("player-el")



