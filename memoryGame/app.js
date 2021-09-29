/* Errors to fix!!!!
~~~ double click same image and it reads as a match
~~~ alert is kind of annoying so change it to a <p> message at bottom of page
*/


// card options. Make 2 of each card


const cardArray = [
// burger
    {
        name: "burger",
        img: "images/burger.png"
    },
    {
        name: "burger",
        img: "images/burger.png"
    },
// chicken bucket
    {
        name: "chickenBucket",
        img: "images/chickenBucket.png"
    },
    {
        name: "chickenBucket",
        img: "images/chickenBucket.png"
    },
// chocolate bar
    {
        name: "chocolateBar",
        img: "images/chocolateBar.png"
    },
    {
        name: "chocolateBar",
        img: "images/chocolateBar.png"
    },
// fries
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
// hotdog
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },  
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },      
// pizzaSlice
    {
        name: "pizzaSlice",
        img: "images/pizzaSlice.png"
    },
    {
        name: "pizzaSlice",
        img: "images/pizzaSlice.png"
    }
]


// create the game board
const grid = document.querySelector(".grid")

// loop over cardArray and create image elements of each card
function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
        // for each card create an img element with the pattern as the back of the card
        // give each card id from 0-11
        // add imag element to .grid class in html file
        var card = document.createElement('img') 
        card.setAttribute("src", "images/pattern.png") 
        card.setAttribute("data-id", i) 
        card.addEventListener("click", flipCard)
        grid.appendChild(card) 

    }
}

// shuffle the deck around
function shuffle(arr) {
    let currentIndex = arr.length, randomIndex

    // loop through all cards in array
    while (currentIndex !=0) {
        // pick a random card from the deck
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // swap random card with the current card
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr
}

shuffle(cardArray)

// check for match
let score = 0
let scoreEl = document.querySelector("#result")
let messageEl = document.getElementById("message-el")

function checkForMatch() {
    // get the whole deck as non-live nodes
    let deck = document.querySelectorAll("img") // get all 12 images
    // get the 2 cards choosen ids and store it 
    const card0Id = choosenCardIds[0]
    const card1Id = choosenCardIds[1]

    // check if 2 cards in choosenCards array have same name
    if (choosenCard[0] === choosenCard[1]) {
        // increment score and change img-element into blank img
        messageEl.textContent = "It's a match!"
        score += 1
        scoreEl.textContent = score
        deck[card0Id].setAttribute("src", "images/white.png")
        deck[card1Id].setAttribute("src", "images/white.png")
        // // remove event listener
        // deck[card0Id].removeEventListener("click", flipCard)
        // deck[card1Id].removeEventListener("click", flipCard)
    } else {
        // reflip cards back 
        messageEl.textContent = "No match, try again"
        deck[card0Id].setAttribute("src", "images/pattern.png")
        deck[card1Id].setAttribute("src", "images/pattern.png")
        deck[card0Id].addEventListener("click", flipCard)
        deck[card1Id].addEventListener("click", flipCard)
    }
    // clear the 2 arrays 
    choosenCard = []
    choosenCardIds = []
    // congradulations message for winning whole game
    if (score === cardArray.length/2) {
        messageEl.textContent = "Congradulations! You won the game"
    }
}

// create empty array of the cards choosen
let choosenCard = []
// create empty array of choosenCardIds
let choosenCardIds = []

// flip card
function flipCard() {
    // get card id (i.e. its location) and push it into the choosenCard array based on its name
    // push choosen card id into array
    let cardId = this.getAttribute("data-id")
    let deck = document.querySelectorAll("img")
    choosenCard.push(cardArray[cardId].name)
    choosenCardIds.push(cardId)
    deck[cardId].removeEventListener("click",flipCard)
    // render card image to screen via changing img element src to cardArray[id].img
    this.setAttribute("src", cardArray[cardId].img) 
    // once 2 cards are selected, call function checkForMatch, set a timer
    if (choosenCard.length === 2) {
        setTimeout(checkForMatch, 500)
    }

}

createBoard()




