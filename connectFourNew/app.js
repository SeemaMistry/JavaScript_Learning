// make the rows and cells using .innerHTML inside of the grid class
const gameBoard = document.querySelector(".game-board")
let squares = ""

// i => row
// k => columns 
for (let i = 0; i < 7; i++) {
    for (let k = 0; k < 7; k++) {
        squares += `<div class="cell row-`
        if (i === 0) {
            squares += `top col-${k}">`
            squares += `<p>Row top Col ${k}</p>`
        } else {
            squares += `${i-1} col-${k}">`
            squares += `<p>Row ${i-1} Col ${k}</p>`
        }
        squares += `</div>`
    }
}
gameBoard.innerHTML += squares
