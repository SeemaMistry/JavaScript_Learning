//////////////// DOM ////////////////
const grid = document.querySelector(".grid")
const allCells = document.querySelectorAll(".cell")
 
const exitBtn = document.querySelector("#exit-btn")
const anotherRoundBtn = document.querySelector("#anotherRound-btn")

const xPointsEl = document.querySelector("#xPoints-el")
const oPointsEl = document.querySelector("#oPoints-el")

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

xPointsEl.textContent = xPoints
oPointsEl.textContent = oPoints

//////////////// UTILITY FUNCTIONS ////////////////

/* clearGridCells() -> null
    Purpose: Remove all X, O and taken classes from each cell
*/
const clearGridCells = () => {
    for (const row of rows) {
        for (const cell of row) {
            cell.classList.remove("X")
            cell.classList.remove("O")
            cell.classList.remove("taken")
        }
    } 
}

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

/* removePlayerMarkToCellClassList(cell) -> null
    Require: cell = cell object
    Purpose: Add "X" or "O" to cell's classList based on whos turn it is
*/
const removePlayerMarkToCellClassList = (cell) => {
    cell.classList.remove(xTurn ? "X" : "O")
}

/* isCellTaken(cell) -> Boolean
    Require: cell = cell object
    Purpose: Return true if cell is already taken up by an X or O. Else return false
*/
const isCellTaken = (cell) => {
    const classList = getCellClassList(cell)
    const isTaken = classList.includes("taken")
    return isTaken
}

//////////////// HANDLE EVENTS ////////////////

/* handleCellMouseOver(e)
    Require: e = event on a cell
    Purpose: When mouse hovers over a cell of the grid, show player's X or O on square
*/
const handleCellMouseOver = (e) => {
    // get cell location 
    const cell = e.target
    if (isCellTaken(cell)) return // dont re-write mark if cell is "taken"
    addPlayerMarkToCellClassList(cell)
    // const [rowIndex, colIndex] = getCellLocation(cell)
}

/* handleCellMouseOut(e)
    Require: e = event on a cell
    Purpose: When mouse moves away from a cell of the grid, remove player's X or O on square
*/
const handleCellMouseOut = (e) => {
    const cell = e.target
    if(isCellTaken(cell)) return // dont remove mark if cell is "taken"
    removePlayerMarkToCellClassList(cell)
}

/* handleCellClick(e)
    Require: e = event on a cell
    Purpose: If cell is not taken, add X or O mark depending on which player's turn it is
*/
const handleCellClick = (e) => {}

//////////////// ADD EVENTS ////////////////
for (const row of rows) {
    for (const cell of row) {
        // hover on
        cell.addEventListener("mouseover", handleCellMouseOver)
        // hover off
        cell.addEventListener("mouseout", handleCellMouseOut)
        // click
        cell.addEventListener("click", handleCellClick)
    }
}

anotherRoundBtn.addEventListener("click", function () {
    clearGridCells()
    gameIsLive = true
})

exitBtn.addEventListener("dblclick", function() {
    clearGridCells()

    gameIsLive = true
    xTurn = true

    xPoints = 0
    oPoints = 0
    xPointsEl.textContent = xPoints
    oPointsEl.textContent = oPoints
})
