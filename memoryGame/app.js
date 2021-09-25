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
        // card.addEventListener("click", flipCard)
        grid.appendChild(card) // all the cards are img elements with ids, appendchild adds them to the .grid class in the html file

    }
}

createBoard()




