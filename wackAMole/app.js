document.addEventListener("DOMContentLoaded", () => {

// get the grid class div and add in 9 html divs, ids 1-9 and class=square
const grid = document.querySelector(".grid")

// store all the div elements as a string
let divContainers = ""
// loop and make 9 div, class=square, id=i
for (let i = 1; i < 10; i++) {
    // html div class
    divContainers += `
    <div class="square" id="${i}">
    </div>
    `
}
// render out DOM to grid class
grid.innerHTML += divContainers

// // add additional class name to div element in Javascript
// const divEl = document.getElementById("6")
// divEl.classList.add("mole")

// select all html attributes 
const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
const timerEl = document.querySelector("#timer-el")
let scoreEl = document.querySelector("#score-el")


let result = 0
let currentTime = timerEl.textContent

// randomly select a square from the grid

function randomSquare() {
    // remove the mole class from any existing square
    square.forEach(className => {
        className.classList.remove("mole")
    })

    // get a square from the grid using random number
    let randomPosition =  square[(Math.floor(Math.random() * 9))]
    // add the mole class to the randomly selected square
    randomPosition.classList.add("mole")

    // assign the id of the randomPosition to the hitPosition
    hitPosition = randomPosition.id
}

// add a point if you get the mole
square.forEach(id => {
    id.addEventListener("mouseup", () => {
        if(id.id === hitPosition) {
            result += 1
            scoreEl.textContent = result
        }
    })
})

// move the mole automatically for the game
function moveMole() {
    let timerEl = null
    // call randomSquare() every 1 second
    timerEl = setInterval(randomSquare, 1000)
}

moveMole()

// countdown function
function countDown() {
    // decremement timer ny 1 second 
    currentTime--
    timerEl.textContent = currentTime

    // end of game 
    if (currentTime === 0) {
        clearInterval(timerEl)
        alert("GAME OVER! Your final score is " + result)
        // alert("Would you like to play another round?")
        if (confirm("Would you like to play another round?")) {
            render()
            console.log("You selected to play another game")
        } else {
            exit()
            console.log("You dont want to play another game")
        }
    }
}

// // call the countDown function every one second
timerEl = setInterval(countDown, 1000)

// reset the game attributes to start a new game
function render() {
    // reset the score, timer
    timerEl.textContent = 61
    currentTime = timerEl.textContent
    scoreEl.textContent = 0
    result = 0
}

function exit() {
    timerEl = clearTimeout(countDown)
}


})

