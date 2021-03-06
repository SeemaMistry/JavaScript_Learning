//////////////// DOM ////////////////
const grid = document.querySelector(".grid")
const allCells = document.querySelectorAll(".cell")

const gameMsgEl = document.querySelector("#game-msg-el")
const gameRoundsEl = document.querySelector("#rounds-el")
 
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

let rounds = 1
gameRoundsEl.textContent = rounds

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
            cell.classList.remove("win")
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

/* addPointToPlayer() -> null
    Require: nothing
    Purpose: Add a point to winning player (based on who's turn it is using xTurn)
*/
const addPointToPlayer = () => {
    // use XTurn to determine who to add a point to 
    xTurn ? xPoints += 1 : oPoints += 1
    xTurn ? xPointsEl.textContent = xPoints : oPointsEl.textContent = oPoints
}
/* winnerArrayCheck( [winnerArray] ) -> Boolean
    Require: [winnerArray] = array of possible winner cells
    Purpose: Checks if winnerArray has enough cells to become a winner, >= 3. 
            Return value will set gameIsLive variable
                -> Not a winner return true
                -> Winner return false
*/
const winnerArrayCheck = (winnerArray) => {
    // TO DO: make this more efficient or look better. It looks clunky
    if (winnerArray[0].length !==3 && winnerArray[1].length !== 3 &&
        winnerArray[2].length !== 3 && winnerArray[3].length !== 3) { 
        console.log("Not 3 in a row")
        return true
    }
   
    // for winner, add "win" class to each cell to highlight later, gameIsLive = false
    for (const direction of winnerArray) {
        if (direction.length !== 3) {continue}
        for (const cell of direction) {
            cell.classList.add("win")
        }
    }
    addPointToPlayer() // give player point
    gameMsgEl.textContent = `Player ${xTurn ? "X" : "O"} is the winner!` 
    return false
}

/* checkStatusOfGame(lastTakenCell) -> Boolean
    Require: lastTakenCell = cell object
    Purpose: Check if the player has won horizontally, vertically, or diagonally. 
            Boolean value return will be used to set gameIsLive value.
                If they won: 
                    - highlight winning set
                    - add point to player
                    - display winner msg
                        -> return false
                If they tie:
                    - display tie message
                        -> return false
                If no winner yet:
                    - display who's turn it is
                        -> return true
*/
const checkStatusOfGame = (lastTakenCell) => {
    // get row, column of cell, make winner[]
    const [rowIndex, colIndex] = getCellLocation(lastTakenCell)
    const rowLength = rows[rowIndex].length
    const columnLength = columns[colIndex].length
    let horizontal = [lastTakenCell]
    let vertical = [lastTakenCell]
    let diagonalTopLeftDown = [lastTakenCell]
    let diagonalBottomLeftUp = [lastTakenCell]
    let winner = [horizontal, vertical, diagonalTopLeftDown, diagonalBottomLeftUp]

    // CHECK HORIZONTALLY --- left side
    let col = colIndex - 1 // get cell left
    // loop until out of bound
    while(col >= 0) {
        const cellToCheck = rows[rowIndex][col]
        if (xTurn ? cellToCheck.classList.contains("X") : cellToCheck.classList.contains("O")) {
            horizontal.push(cellToCheck)
            col--
        } else {break}
    }
   
    // CHECK HORIZONTALLY --- right side
     col = colIndex + 1 // get cell right
    // loop until out of bound
    while(col < rowLength) {
        const cellToCheck = rows[rowIndex][col]
        if (xTurn ? cellToCheck.classList.contains("X") : cellToCheck.classList.contains("O")) {
            horizontal.push(cellToCheck)
            col++
        } else {break}
    }

    // CHECK VERTICALLY --- down 
    let row = rowIndex + 1 // get cell below
    // loop until out of bound
    while(row < columnLength) {
        const cellToCheck = rows[row][colIndex]
        if (xTurn ? cellToCheck.classList.contains("X") : cellToCheck.classList.contains("O")) {
            vertical.push(cellToCheck)
            row++
        } else {break}
    }

    // CHECK VERTICALLY --- up 
    row = rowIndex - 1 // get cell above
    // loop until out of bound
    while(row >= 0) {
        const cellToCheck = rows[row][colIndex]
        if (xTurn ? cellToCheck.classList.contains("X") : cellToCheck.classList.contains("O")) {
            vertical.push(cellToCheck)
            row--
        } else {break}
    }

    // CHECK DIAGONALLY \ TOP LEFT TO BOTTOM RIGHT \ --- upwards [row - 1, col -1]
    row = rowIndex - 1 // get cell diagonally above-left
    col = colIndex - 1
    // loop until out of bound
    while(row >= 0 && col >= 0) {
        const cellToCheck = rows[row][col]
        if (xTurn ? cellToCheck.classList.contains("X") : cellToCheck.classList.contains("O")) {
            diagonalTopLeftDown.push(cellToCheck)
            row--
            col--
        } else {break}
    }

    // CHECK DIAGONALLY \ TOP LEFT TO BOTTOM RIGHT \ downwards [row + 1, col + 1]
    row = rowIndex + 1 // get cell diagonally below-right
    col = colIndex + 1
    // loop until out of bound
    while(row < columnLength && col < rowLength) {
        const cellToCheck = rows[row][col]
        if (xTurn ? cellToCheck.classList.contains("X") : cellToCheck.classList.contains("O")) {
            diagonalTopLeftDown.push(cellToCheck)
            row++
            col++
        } else {break}
    }

    // CHECK DIAGONALLY / Bottom LEFT TO BOTTOM RIGHT / --- upwards [row - 1, col + 1]
    row = rowIndex - 1 // get cell diagonally above-right
    col = colIndex + 1
    // loop until out of bound
    while(row >= 0 && col < columnLength) {
        const cellToCheck = rows[row][col]
        if (xTurn ? cellToCheck.classList.contains("X") : cellToCheck.classList.contains("O")) {
            diagonalBottomLeftUp.push(cellToCheck)
            row--
            col++
        } else {break}
    }

    // CHECK DIAGONALLY / Bottom LEFT TO BOTTOM RIGHT / downwards [row + 1, col - 1]
    row = rowIndex + 1 // get cell diagonally below-left
    col = colIndex - 1
    // loop until out of bound
    while(row < columnLength && col >= 0) {
        const cellToCheck = rows[row][col]
        if (xTurn ? cellToCheck.classList.contains("X") : cellToCheck.classList.contains("O")) {
            diagonalBottomLeftUp.push(cellToCheck)
            row++
            col--
        } else {break}
    }


    // at the end check if you have any winning arrays inside winner [ [], [], [], [] ]
    gameIsLive = winnerArrayCheck(winner) // call winnerArrayCheck
    if (!gameIsLive) return // exit if winner found 

    // CHECKING A TIE
    for (const eachRow of rows) {
        for (const cell of eachRow) {
            if (!cell.classList.contains("X") && !cell.classList.contains("O")) {
                return // there exists empty cells, game is still live
            }
        }
    }
    gameIsLive = false
    gameMsgEl.textContent = "It's a tie! Play another round, or exit game"

}

//////////////// HANDLE EVENTS ////////////////

/* handleCellMouseOver(e)
    Require: e = event on a cell
    Purpose: When mouse hovers over a cell of the grid, show player's X or O on square
*/
const handleCellMouseOver = (e) => {
    if (!gameIsLive) return
    // get cell location 
    const cell = e.target
    if (isCellTaken(cell)) return // exit if cell is "taken"
    addPlayerMarkToCellClassList(cell) // add mark to cell
}

/* handleCellMouseOut(e)
    Require: e = event on a cell
    Purpose: When mouse moves away from a cell of the grid, remove player's X or O on square
*/
const handleCellMouseOut = (e) => {
    const cell = e.target
    if(isCellTaken(cell)) return // exit if cell is "taken"
    removePlayerMarkToCellClassList(cell) // remove mark from cell
}

/* handleCellClick(e)
    Require: e = event on a cell
    Purpose: If cell is not taken, add X or O mark depending on which player's turn it is
*/
const handleCellClick = (e) => {
    if (!gameIsLive) return
    const cell = e.target // get cell

    const isTaken = isCellTaken(cell) // check if its taken
    if(isTaken) {
        alert ("This cell is already taken. Select another cell.")
        return
    }
    
    addPlayerMarkToCellClassList(cell) // add X or O and taken to classList
    cell.classList.add("taken") 

    // check game status: true or false 
    checkStatusOfGame(cell)

    // exit if someone won
    if (!gameIsLive) return

    // switch player
    xTurn = !xTurn
}

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
    gameMsgEl.textContent = "Let's Play!"
    rounds += 1
    gameRoundsEl.textContent = rounds
})

exitBtn.addEventListener("dblclick", function() {
    clearGridCells()

    gameIsLive = true
    xTurn = true

    xPoints = 0
    oPoints = 0
    xPointsEl.textContent = xPoints
    oPointsEl.textContent = oPoints
    gameMsgEl.textContent = "Let's Play!"
    rounds = 1
    gameRoundsEl.textContent = rounds

})
