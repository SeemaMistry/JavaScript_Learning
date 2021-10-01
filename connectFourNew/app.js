// make the rows and cells using .innerHTML inside of the grid class
const gameBoard = document.querySelector(".game-board")
const resetBtn = document.querySelector("#reset-btn")
const statusEl = document.querySelector("#status-el")

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

const rowtop = []
const row0 = []
const row1 = []
const row2 = [] 
const row3 = []
const row4 = []
const row5 = []
const rows = [row0,row1,row2,row3,row4,row5,rowtop]


function sortCellsIntoCols (arrDataToSort, arrEmpty, maxColumns) {
    let max = maxColumns
    // loop through arrDataToSort starting with last index and add one item to each empty array in columns.
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
    let index = 0
    let count = 0
    if (arrDataToSort.length === 7) {
        // adding to a specific rows[index], rowtop which is the last array in rows[] that uses a seperate arrDataToSort value
        index = maxRows
    }
    // add first 6 items to an empty array, then move to next empty array and add next 6 items
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

sortCellsIntoCols(allCells,columns,6) // sort allCells into columns[]
sortCellsIntoCols(topCells,columns,6) // sort topCells into columns[]
sortCellsIntoRows(topCells,rows,6) // sort topCells into rows[6] = toprow[]
sortCellsIntoRows(allCells,rows,6) // sort allCells into rows[]

// VARIABLES
let gameIsLive = true
let yellowIsNext = true

// UTILITY FUNCTIONS
const getClassListArray = (cell) => {
    // return array of class list
    const classList = cell.classList
    return [...classList]
}

const getCellLocation = (cell) => {
    const classList = getClassListArray(cell) // get cell classList
    const rowClass = classList.find(className => className.includes("row")) // row-Num
    const colClass = classList.find(className => className.includes("col")) // col-Num
    const rowIndex = rowClass[4] // row-4 -> 4
    const colIndex = colClass[4] // col-6 -> 6
    // return cell coordinates (as integers) in an array [row, col]
    return [parseInt(rowIndex, 10), parseInt(colIndex, 10)]
}

const removeTopCellColour = (cell) => {
    // find cell's top-most chip and remove its colour
    const [rowIndex, colIndex] = getCellLocation(cell) // get cell coordinates
    const topCell = columns[colIndex][6]
    // remove yellow/red class from the cell
    topCell.classList.remove(yellowIsNext ? "yellow" : "red") // colour yellow/red topmost cell
}

const getFirstOpenCellForColumn = (colIndex) => {
    let count = 0
    // find first empty cell in that column and add coloured chip to classList
    for (const col of columns[colIndex]) {
        count++
        if (col.classList.contains("yellow") ||  col.classList.contains("red")) {
            if (count === columns[colIndex].length-1) {alert("Column is full")}
            continue // do nothing, go to next cell
        } else {
            // add yellow/red and change yellowIsNext to opposite
            col.classList.add(yellowIsNext? "yellow" : "red")
            removeTopCellColour(col)
            yellowIsNext = !yellowIsNext
            break // break out of for loop
        }
        
    }
}

// HANDLING EVENT CALLS
const handleCellMouseOver = (e) => {
    const cell = e.target // get div attributes of cell
    const [rowIndex, colIndex] = getCellLocation(cell) // get cell coordinates
    // use col to get col-top
    const topCell = columns[colIndex][6]
    topCell.classList.add(yellowIsNext ? "yellow" : "red") // colour yellow/red topmost cell
}

const handleCellMouseOut = (e) => {
    const cell = e.target // get div attributes of cell
    removeTopCellColour(cell)
}

const handleCellClick = (e) => {
    // get div info and extract column index
    const cell = e.target 
    const [rowIndex, colIndex] = getCellLocation(cell)
    getFirstOpenCellForColumn(colIndex)
   
}

// CALLING EVENT LISTENERS

// get access to each cell using rows
for (const row of rows) {
    for (const cell of row) {
        // add coloured chip to top-most row of appropriate coloumn when cell is hovered over by adding yellow/red to class list
        cell.addEventListener("mouseover", handleCellMouseOver)
        // remove yellow/red class from top-most row when cell is not hovered over
        cell.addEventListener("mouseout", handleCellMouseOut)
        // onclick, add yellow/red chip into slot
        cell.addEventListener("click", handleCellClick)

    }
}

