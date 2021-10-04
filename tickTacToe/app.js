//////////////// DOM ////////////////
const grid = document.querySelector(".grid")
const allCells = document.querySelectorAll(".cell")
 
const exitBtn = document.querySelector("#exit-btn")
const anotherRoundBtn = document.querySelectorAll("#anotherRound-btn")

const xScoreEl = document.querySelector("#xscore-el")
const oScoreEl = document.querySelector("#oscore-el")

//////////////// SORT ALL THE ROWS ////////////////
const row0 = [allCells[0], allCells[1], allCells[2]]
const row1 = [allCells[3], allCells[4], allCells[5]]
const row2 = [allCells[6], allCells[7], allCells[8]]
const rows = [row0, row1, row2]

//////////////// SORT ALL THE COLUMNS ////////////////
const col0 = [allCells[0], allCells[3], allCells[6]]
const col1 = [allCells[1], allCells[4], allCells[7]]
const col2 = [allCells[2], allCells[5], allCells[8]]
const columns = [col0, col1, col2]


//////////////// VARIABLES ////////////////
let gameIsLive = true
let xTurn = true

let xPoints = 0
let oPoints = 0

//////////////// UTILITY FUNCTIONS ////////////////

/* getCellClassList (cell) -> [...classList]
    Require: cell = cell Object
    Purpose: get an array containing the cell's classList
*/
const getCellClassList = (cell) => {
    const classList = cell.classList
    return [...classList]
}

/* getCellLocation (cell) -> [rowIndex, colIndex]
    Require: cell = cell Object
    Purpose: get an array containing the row and column of the cell
*/
const getCellLocation = (cell) => {
    const classList = getCellClassList(cell)
    const rowClass = classList.find(className => className.includes("row"))
    const colClass = classList.find(className => className.includes("col"))
    const rowIndex = rowClass[4]
    const colIndex = colClass[4]
    return [parseInt(rowIndex, 10), parseInt(colIndex, 10)]
    
}
/* addPlayerMarkToCellClassList(cell) -> null
    Require: cell = cell object
    Purpose: Add "X" or "O" to cell's classList based on whos turn it is
*/
const addPlayerMarkToCellClassList = (cell) => {
    cell.classList.add(xTurn ? "X" : "O")
}

//////////////// HANDLE EVENTS ////////////////

/* handleMouseOver(e)
    Require: e = event on a cell
    Purpose: When mouse hovers over a cell of the grid, show player's X or O on square
*/
const handleMouseOver = (e) => {
    // get cell location 
    const cell = e.target
    addPlayerMarkToCellClassList(cell)
    const [rowIndex, colIndex] = getCellLocation(cell)

    
}

//////////////// ADD EVENTS ////////////////
for (const row of rows) {
    for (const cell of row) {
        // hover on
        cell.addEventListener("mouseover", handleMouseOver)
        // hover off
        // click
    }
}
