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
const allCellsCols = allCells
const allCellsRows = allCells
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

const rowtop = []
const row0 = []
const row1 = []
const row2 = [] 
const row3 = []
const row4 = []
const row5 = []
const rows = [row0,row1,row2,row3,row4,row5,rowtop]
let temp = [1,2,3]
const fruits = ["1", "2", "3", "4","5", "6", "7", "8"]

function sortCellsIntoCols (arrDataToSort, arrEmpty, maxColumns) {
    let max = maxColumns
    // loop through allCells starting with last index and add one item to each empty array.
    // Once all empty arrays have an item, go back to first array and add second item, filling all arrays with another item
    for (let i=(arrDataToSort.length-1); i > -1; i--) {
        // use maxColumns to determin which array to store into
        arrEmpty[maxColumns].push(arrDataToSort[i]) 
        maxColumns--
        if (maxColumns === -1) { 
            maxColumns = max // after 6 items added, move to next column
        }        
    }
}

function sortCellsIntoRows (arrDataToSort, arrEmpty, maxRows) {
    // loop through allCells starting with last index
    let index = 0
    let count = 0
    if (arrDataToSort.length === 7) {
        // adding to a specific rows[index], rowtop which is the last array in rows[] that uses a seperate arrDataToSort value
        index = maxRows
    }
    // add first 6 items to an empty array, then move to next empty array
    for (let i=0; i < arrDataToSort.length; i++) {
        // use arrNum to determin which array to store into
        arrEmpty[index].push(arrDataToSort[i]) 
        count++
        if (count == maxRows+1) { 
            index++
            count = 0
        }
    }
    
}


sortCellsIntoCols(allCellsCols,columns,6)
// console.log(allCellsCols)
sortCellsIntoRows(topCells,rows,6)
sortCellsIntoRows(allCellsRows,rows,6)


console.log(columns)
console.log(rows)

