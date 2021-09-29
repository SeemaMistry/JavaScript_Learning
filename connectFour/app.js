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
const displayCurrentPlayerEl = document.getElementById("player-el")
let currentPlayer = 1

// listen for when a square is cliked
for (let i = 0; len = squares.length; i ++) (function(index) {
    // onclick to each square
    squares[i].onclick = function() {
        // when current div is available: current div != taken, AND directly below div (current div + 7) != taken
        // if div below (7+ more) is taken, you can take spot ontop of it
        if (squares[index + 7].classList.contains("taken") &&! squares[i].classList.contains("taken")) {
            if (currentPlayer === 1) {
                // claim available div as taken and to player-one
                squares[index].classList.add("taken")
                squares[index].classList.add("player-one")
                // change to the next player
                currentPlayer = 2
                displayCurrentPlayerEl.innerHTML(currentPlayer) // this will be displayed in <span> on screen
            } else if (currentPlayer === 2) {
                 // claim available div as taken and to player-two
                 squares[index].classList.add("taken")
                 squares[index].classList.add("player-two")
                 // change to the next player
                 currentPlayer = 1
                 displayCurrentPlayerEl.innerHTML(currentPlayer) // this will be displayed in <span> on screen
            }
            else
                // if selecting invalid square, show alert to user
                alert("Can't go here")
            
        }

    }
}) (i // for loop i-index call here)


