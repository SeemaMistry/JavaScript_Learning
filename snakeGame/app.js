//////////////// DOM ///////////////////
const grid = document.querySelector(".grid")
const pointsEl = document.querySelector("#points-el")
const startBtn = document.querySelector("#start-btn")


// Make rows and columns
let squares = ""
let cellCount = 1
let rowCount = 0
// row = i, columns = k
for (let i=0; i < 12; i++) {
    for (let k=0; k < 12; k++) {

        squares += `<div class="cell row-${i} col-${k} `

        // checkered board - light/dark grey
        squares += (rowCount % 2 === 0 && cellCount % 2 === 0) ? `dark ` : `` // even row, dark on even cell
        squares += (rowCount % 2 !== 0 && cellCount % 2 !== 0) ? `dark ` : ``// odd rows, dark on odd cells
        
        rowCount += (cellCount % 12 === 0) ? 1 : 0 // next row
        cellCount++

        // add walls 
        squares += (i ===0 && !(k ===2 || k ===3 || k ===8 || k ===9)) ? `wall-top ` : ``
        squares += (i ===11 && !(k ===2 || k ===3 ||  k ===8 || k ===9)) ? `wall-bottom ` : ``
        squares += (k ===0 && !(i ===2 || i ===3 || i ===8 || i ===9)) ? `wall-left ` : ``
        squares += (k===11 && !(i ===2 || i ===3 || i ===8 || i ===9)) ? `wall-right ` : ``

        // add tunnels x8
        squares += (i ===0 && (k ===2 || k ===3) ) ? `tunnel-top ` : ``
        squares += (i ===0 && (k ===8 || k ===9) ) ? `tunnel-top ` : ``
        squares += (i ===11 && (k ===2 || k ===3) ) ? `tunnel-bottom ` : ``
        squares += (i ===11 && (k ===8 || k ===9) ) ? `tunnel-bottom ` : ``

        squares += (k ===0 && (i ===2 || i ===3) ) ? `tunnel-left ` : ``
        squares += (k ===0 && (i ===8 || i ===9) ) ? `tunnel-left ` : ``
        squares += (k ===11 && (i ===2 || i ===3) ) ? `tunnel-right ` : ``
        squares += (k ===11 && (i ===8 || i ===9) ) ? `tunnel-right ` : ``

        // pair tunnel sets {1,2,3,4}
        squares += ((i ===0 || i ===11) && (k ===2 || k ===3)) ? `tunnel-set1 ` : ``
        squares += ((i ===0 || i ===11) && (k ===8 || k ===9)) ? `tunnel-set2 ` : ``

        squares += ((i ===2 || i ===3) && (k ===0 || k ===11)) ? `tunnel-set3 ` : ``
        squares += ((i ===8 || i ===9) && (k ===0 || k ===11)) ? `tunnel-set4 ` : ``

        squares += `"></div>` 

    }
}
grid.innerHTML += squares

const allCells = document.querySelectorAll(".cell")

// Sort rows and columns

let rowTopWall = []
let row1 = []
let row2 = []
let row3 = []
let row4 = []
let row5 = []
let row6 = []
let row7 = []
let row8 = []
let row9 = []
let row10 = []
let rowBottomWall = []
const rows = [rowTopWall,row1,row2,row3,row4,row5,row6,row7,row8,row9,row10,rowBottomWall]

let colLeftWall = []
let col1 = []
let col2 = []
let col3 = []
let col4 = []
let col5 = []
let col6 = []
let col7 = []
let col8 = []
let col9 = []
let col10 = []
let colRightWall = []
const columns = [colLeftWall,col1,col2,col3,col4,col5,col6,col7,col8,col9,col10,colRightWall]

let r = 0
for (let i=1; i < allCells.length; i++) {
    rows[r].push(allCells[i-1])
    console.log(r)
    if (i % 12 === 0) {r++} 
}

for (let i = 0; i < allCells.length; i++) {
    columns[i%12].push(allCells[i])
}

//////////////// VARIABLES ///////////////////
let gameIsLive = true
let snake = [] // it will appear randomly on the grid
let points = 0

//////////////// UTILITY FUNCTIONS ///////////////////

// getcelllocation -> [int, int]
// getclasslistarray -> [...classList]
// issnakebody -> true/false
// istunnel -> true/false, true then find celllocation and tunnelset, based on tunnelset determine next coordinate of snake on opposite side
// iswall -> true/false, true then gameover
// isfood -> true/false, true when snake head over a food
// addtosnakebody -> adds to snake body tail end
    // randomnumbergenerator -> [int, int] picks location on grid to drop food randomly on set interval
// addSnakeClass -> null adds snake class to cell classlist
// removesnakeclass -> null removes snake class from cell classlist
// addfood -> null add food to cell classlist
// removefood -> null remove food from cell classlist
// checkStatusOfGame -> null



//////////////// HANDLE EVENTS ///////////////////



//////////////// ADD EVENTS ///////////////////

// event listeners. keypresses https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript




