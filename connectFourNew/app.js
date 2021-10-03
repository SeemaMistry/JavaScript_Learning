// make the rows and cells using .innerHTML inside of the grid class
const gameBoard = document.querySelector(".game-board")
const resetBtn = document.querySelector("#reset-btn")
const statusEl = document.querySelector("#status-el")

let squares = ""

// Make 49 divs inside the game-board div to make game board. Add appropriate classList as needed
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

// add left and right border elements to all of column 0 and column 6
const leftBorder = document.getElementsByClassName("col-0")
const rightBorder = document.getElementsByClassName("col-6")

for (i = 1; i < 7; i++) {
    leftBorder[i].classList.add("left-border")
    rightBorder[i].classList.add("right-border")
}

// store the cells and rows in arrays
const allCells = document.querySelectorAll(".cell:not(.row-top") // grab all cells except top row
const topCells = document.querySelectorAll(".cell.row-top") // grab all top row

// store columns and rows into arrays
const column0 = [] // starts at bottom left corner as index 0, counting up
const column1 = []
const column2 = []
const column3 = []
const column4 = []
const column5 = []
const column6 = [] 
const columns = [column0,column1,column2,column3,column4,column5,column6]

const rowtop = []
const row0 = [] // starts at top left counting to the right
const row1 = []
const row2 = [] 
const row3 = []
const row4 = []
const row5 = []
const rows = [row0,row1,row2,row3,row4,row5,rowtop]

/* sortCellsIntoCols([] arrDataToSort, [[]] arrEmpty, int maxItems) -> null 
    Require: [] arrDataToSort = array of data that will be sorted, [[]] arrEmpty = empty array of array data will be sorted into, 
            int maxItems = how many empty arrays you are sorting into
                maxItems => arrEmpty.length - 1
    Purpose: Sort data from arrayDataToSort into the empty arrays, adding a max of maxItems items to each empty array.
                Sort data from back to front. Add one item to each empty array before adding next item to first array
                Example: data = [1,2,3,4,5,6,7,8], empty = [ [], [], [] ], maxItems = 2
                ----> empty = [ [6,3], [7,4,1], [8,5,2] ]
*/
function sortCellsIntoCols (arrDataToSort, arrEmpty, maxItems) {
    let max = maxItems
    // loop through arrDataToSort starting with last index and add one item to each empty array in columns.
    // Once all empty arrays have an item, go back to first array and add second item, filling all arrays with another item
    for (let i=(arrDataToSort.length-1); i > -1; i--) {
        // use maxItems to determin which array to store into
        arrEmpty[maxItems].push(arrDataToSort[i]) 
        maxItems--
        if (maxItems === -1) { 
            maxItems = max // after 6 items added, move to next column
        }        
    }
}

/* sortCellsIntoRows([] arrDataToSort, [[]] arrEmpty, int maxItems) -> null 
    Require: [] arrDataToSort = array of data that will be sorted, [[]] arrEmpty = empty array of array data will be sorted into, 
            int maxRows = how many empty arrays you are sorting into
                maxRows => arrEmpty.length - 1
    Purpose: Sort data from arrayDataToSort into the empty arrays, adding a max of maxRows+1 items to each empty array.
                Sort data from front to back. Add maxRows items into first empty array before moving onto next empty array.
                Example: data = [1,2,3,4,5,6,7,8], empty = [ [], [], [] ], maxItems = 3
                ----> empty = [ [1,2,3], [4,5,6], [7,8] ]
*/
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
/* getClassListArray(object) -> []
    Require: object = cell object
    Purpose: Take a cell and extract its classList into an array
*/
const getClassListArray = (cell) => {
    // return array of class list
    const classList = cell.classList
    return [...classList]
}

/* getCellLocation(object) -> [int, int] 
    Require: object = cell object
    Purpose: Take a cell and extract it's coordinates into an array of ints, [rowInt, colInt]
*/
const getCellLocation = (cell) => {
    const classList = getClassListArray(cell) // get cell classList
    const rowClass = classList.find(className => className.includes("row")) // row-Num
    const colClass = classList.find(className => className.includes("col")) // col-Num
    const rowIndex = rowClass[4] // row-4 -> 4
    const colIndex = colClass[4] // col-6 -> 6
    // return cell coordinates (as integers) in an array [row, col]
    return [parseInt(rowIndex, 10), parseInt(colIndex, 10)]
}

/* removeTopCellColour(int) -> null
    Require: int = column index
    Purpose: remove colour (yellow or red) from top-most cell
*/
const removeTopCellColour = (colIndex) => {
    // find cell's top-most chip and remove its colour
    const topCell = topCells[colIndex]
    // remove yellow/red class from the cell
    topCell.classList.remove(yellowIsNext ? "yellow" : "red") // colour yellow/red topmost cell
}

/* addFirstOpenCellForColumn(int) -> cell Object
    Require: int = column index
    Purpose: find first empty slot in column and do the following:
                - add colour to cell classList
                - remove colour from topCell
                -> return cell
            If the column if full
                - give alert pop up
                -> return null
*/
const addFirstOpenCellForColumn = (colIndex) => { 
    let count = 0
    // find first empty cell in that column and add coloured chip to classList
    for (const col of columns[colIndex]) {
        count++
        if (col.classList.contains("yellow") || col.classList.contains("red")) {
            if (count === columns[colIndex].length-1) {
                alert("Column is full")
                return null
            }
            continue // do nothing, go to next cell
        } else {
            // add yellow/red and change yellowIsNext to opposite
            col.classList.add(yellowIsNext? "yellow" : "red")
            removeTopCellColour(colIndex)
            return col
        }
        
    }
}

/* getCellColour(object) -> string
    Require: object = cell
    Purpose: Take a cell object and determine what colour class it has in its class list. Return colour class name
*/
const getCellColour = (cell) => {
    if (cell.classList.contains("yellow"))  return "yellow"
    else if (cell.classList.contains("red")) return "red"
    else return null
}

/* addWinClass(array) -> Boolean 
    Require: array = [array of winning cells]
    Purpose: Check if array has 4 or more cells, then add "win" to each cell's classList. 
                -> return true when player won
                -> return false when player hasnt won

*/
const addWinClass = (winnerArray) => {
    console.log("In addWinClass() and length is:" + winnerArray.length)
    if (winnerArray.length < 4) return true // do nothing if array is too small
    // give each cell in winnerArray class of "win"
    for (const cell in winnerArray) {
        winnerArray[cell].classList.add("win")
    } 
    printWinnerStatus(getCellColour(winnerArray[0]))


    return false
}

const printWinnerStatus = (colour) => {
    statusEl.textContent = "The winner is: " + colour
}


/* checkForWinner(object) -> Boolean 
    Require: object = cell object 
    Purpose: Using the lastTaken cell, determine if that player has won.
                -> return true when player won
                -> return false when player hasnt won

*/
const checkStatusofGame = (lastTakenCell) => {
    const colour = getCellColour(lastTakenCell) // get colour of cell
    if (!colour) return // handle null colour by doing nothing
    
    // get attributes: row, column, winnerArray
    let winner = [lastTakenCell]
    const [rowIndex, colIndex] = getCellLocation(lastTakenCell)
    let row = rows[rowIndex]
    let column = columns[colIndex].slice(0, columns[colIndex].length - 1)

    // check horizontally, left side <---*
    let colIndexLeft = colIndex - 1 // cell left of lastTakenCell
    while (colIndexLeft >= 0) {
        // if cell-left colour = same, add to winner[], else break out of loop
        if (getCellColour(row[colIndexLeft]) === colour)  {
            winner.push(row[colIndexLeft])
            colIndexLeft--
        } else {
            break
        }
    }
     // check horizontally, right side *--->
     let colIndexRight = colIndex + 1 // cell right of lastTakenCell
     while (colIndexRight < row.length) {
         // if cell-left colour = same, add to winner[], else break out of loop
         if (getCellColour(row[colIndexRight]) === colour)  {
             winner.push(row[colIndexRight])
             colIndexRight++
         } else {
             break
         }
     }

    gameIsLive = addWinClass(winner) // set variable to true/false depending on if player won or not
    if (!gameIsLive) return // stop game is someone has won

    // check vertically, down column  *--->
    winner = [lastTakenCell]
    let rowIndexDown = rowIndex + 1 // cell left of lastTakenCell
    while (rowIndexDown < column.length) {
        const cellToCheck = rows[rowIndexDown][colIndex] // get the cell below
        // if cell-left colour = same, add to winner[], else break out of loop
        if (getCellColour(cellToCheck) === colour)  {
            winner.push(cellToCheck)
            rowIndexDown++
        } else {
            break
        }
    }
// TO DO: possibly remove vertically up column
    // check vertically, up column  <---*
    let rowIndexUp = rowIndex - 1 // cell left of lastTakenCell
    while (rowIndexUp >= 0) {
        const cellToCheck = rows[rowIndexUp][colIndex] // get the cell below
        // if cell-left colour = same, add to winner[], else break out of loop
        if (getCellColour(cellToCheck) === colour)  {
            winner.push(cellToCheck)
            rowIndexUp--
        } else {
            break
        }
    }
    gameIsLive = addWinClass(winner) // set variable to true/false depending on if player won or not
    if (!gameIsLive) return // stop game is someone has won
  

    // check diagonally, top left to bottom right \
    // top portion coordinates [rowIndex - 1, colIndex -1]
    winner = [lastTakenCell]
    rowIndexUp = rowIndex - 1 // cell above and
    colIndexLeft = colIndex - 1 // cell left
    while (colIndexLeft >= 0) {
        const cellToCheck = rows[rowIndexUp][colIndexLeft] // get the cell below
        // if cell-left colour = same, add to winner[], else break out of loop
        if (getCellColour(cellToCheck) === colour)  {
            winner.push(cellToCheck)
            rowIndexUp--
            colIndexLeft--
        } else {
            break
        }
    }

    // bottom portion coordinates [rowIndex + 1, colIndex + 1]
    
    gameIsLive = addWinClass(winner) // set variable to true/false depending on if player won or not
    if (!gameIsLive) return // stop game is someone has won
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
    const [rowIndex, colIndex] = getCellLocation(cell) // get cell coordinates
    removeTopCellColour(colIndex)
}

const handleCellClick = (e) => {
    // if someone has won, do not allow more click events
    if (!gameIsLive) return
    // get div info and extract column index
    const cell = e.target 
    const [rowIndex, colIndex] = getCellLocation(cell)

    // get first open cell and add colour to that cell
    const takenCell = addFirstOpenCellForColumn(colIndex)
    if (!takenCell) {return} // if return null, then column is full, do nothing 

    // check for winner
    checkStatusofGame(takenCell)
    // TO DO: update game status to win

    // change colour of topCell and switch players
    yellowIsNext = !yellowIsNext
    topCells[colIndex].classList.add(yellowIsNext ? "yellow" : "red")

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

resetBtn.addEventListener("click", function() {
    // reset all attributes to default and remove all class values of yellow, red and win
    gameIsLive = true
    yellowIsNext = true
    statusEl.textContent = ""

    for (const row of rows) {
        for (const cell of row) { 
            cell.classList.remove("yellow")
            cell.classList.remove("red")
            cell.classList.remove("win")
        }
    }

})
