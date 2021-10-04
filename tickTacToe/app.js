// DOM
const grid = document.querySelector(".grid")
const allCells = document.querySelectorAll(".cell")

const exitBtn = document.querySelector("#exit-btn")
const anotherRoundBtn = document.querySelectorAll("#anotherRound-btn")

const xScoreEl = document.querySelector("#xscore-el")
const oScoreEl = document.querySelector("#oscore-el")

// SORT ALL THE ROWS
const row0 = [allCells[0], allCells[1], allCells[2]]
const row1 = [allCells[3], allCells[4], allCells[5]]
const row2 = [allCells[6], allCells[7], allCells[8]]
const rows = [row0, row1, row2]

// SORT ALL THE COLUMNS
const col0 = [allCells[0], allCells[3], allCells[6]]
const col1 = [allCells[1], allCells[4], allCells[7]]
const col2 = [allCells[2], allCells[5], allCells[8]]
const columns = [col0, col1, col2]


// VARIABLES 
let gameIsLive = true
let xTurn = true

let xPoints = 0
let oPoints = 0

// UTILITY FUNCTIONS 

// HANDLE EVENTS

// ADD EVENTS
