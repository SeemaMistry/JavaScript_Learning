// make the rows and cells using .innerHTML inside of the grid class
const gameBoard = document.querySelector(".game-board")
let squares = ""

// i => row
// k => columns 
for (let i = 0; i < 7; i++) {
    for (let k = 0; k < 7; k++) {
        squares += `<div class="cell row-`
        if (i === 0) { // top row
            squares += `top col-${k}">`
            squares += `<p>Row top Col ${k}</p>`
        } else {
            squares += `${i-1} col-${k}`
            if (i === 1) { // top border
                squares += ` top-border`
            }
            else if (i === 6) { // bottom border
                squares += ` bottom-border`
            }
            squares += `"><p>Row ${i-1} Col ${k}</p>`

        }
        squares += `</div>`
    }
}
gameBoard.innerHTML += squares

// add left and right boarders  elements 
const leftBorder = document.getElementsByClassName("col-0")
const rightBorder = document.getElementsByClassName("col-6")

for (i = 1; i < leftBorder.length; i++) {
    leftBorder[i].classList.add("left-border")
    rightBorder[i].classList.add("right-border")
}

