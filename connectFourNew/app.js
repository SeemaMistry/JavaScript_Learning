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
            // squares += `<p>Row top Col ${k}</p>`
        } else {
            squares += `${i-1} col-${k}`
            if (i === 1) { // top border
                squares += ` top-border`
            }
            else if (i === 6) { // bottom border
                squares += ` bottom-border`
            }
            // squares += `"><p>Row ${i-1} Col ${k}</p>`
            squares += `">`
        }
        squares += `</div>`
    }
}
gameBoard.innerHTML += squares

// add left and right boarders  elements
const leftBorder = document.getElementsByClassName("col-0")
const rightBorder = document.getElementsByClassName("col-6")

for (i = 1; i < 7; i++) {
    leftBorder[i].classList.add("left-border")
    rightBorder[i].classList.add("right-border")
}

// store the cells and rows in arrays
const allCells = document.querySelectorAll(".cell:not(.row-top") // grab all cells except top row
const topCells = document.querySelectorAll(".cell.row-top") // grab all top row

// columns 0 starts at bottom-right 
const column0 = []
const column1 = []
const column2 = []
const column3 = []
const column4 = []
const column5 = []
const column6 = [] 
const columns = [column0,column1,column2,column3,column4,column5,column6]
let temp = [1,2,3]
const fruits = ["Banana", "Orange", "Apple", "Mango"]

function sortCells (arrData, arrSet, arrNum) {
    // gets number of arrays and each array length
    // loop through allCells starting with last index
    for (let i=(arrData.length-1); i > -1; i--) {
        // use arrNum to determin which array to store into
        arrSet[arrNum].push(arrData[i]) 
        arrNum--
        if (arrNum === 0) { arrNum = 3}        
    }
}

sortCells(fruits, columns,3)
console.log(columns)

