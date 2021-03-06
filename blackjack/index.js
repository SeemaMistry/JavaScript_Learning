/* initailize default attributes */
let hand = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
// create player object with attributes name and chips
let player = {
    name: "Per",
    chips: 100
}

let msgEL = document.getElementById("msg-el")
// let sumEL = document.getElementById("sum-el")
let sumEL = document.querySelector("#sum-el")
let cardEL = document.getElementById("card-el")
let playerEL = document.getElementById("player-el")

playerEL.textContent = player.name + ": $" +player.chips

function getRandomCard() {
    /*How this line of code works:
    Math.random() outputs = 0.000 to 0.999
    Math.random() * 10 outputs = 0.000 to 9.99
    Math.floor(Math.random() * 10) outputs = 0 1 2 3 4 5 6 7 8 9

    However, 0-9 outputs for a card game need to be from 1-10.
    Simpliest way is to shift the outputs up by 1:
    Math.floor(Math.random() *10) + 1 outputs = 1 2 3 4 5 6 7 8 9 10
    */
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function startGame() {
    // initialize the player's starting hand
    isAlive = true
    if (hand.length > 0) {
        hand = []
        sum = 0
    }
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    hand.push(firstCard)
    hand.push(secondCard)
    sum += firstCard
    sum += secondCard
    hasBlackJack = false
    renderGame()

}

function renderGame() {
    cardEL.textContent = "Cards: "
    for (c in hand) {
        cardEL.textContent += hand[c] + " "
    }
    sumEL.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    console.log(message)
    msgEL.textContent = message

} 

function newCard() {
    /* Requirements to get a new card:
    isAlive === true (for both cases below)
    hand.length > 2
    sum < 21 (if its 21 or over, they won or went bust and should not get anymore cards)
    */
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        hand.push(card)
        sum += card
        renderGame()
    } else {
        if (hand.length < 1) {
            msgEL.textContent = "\nPress Start Game to begin a playing!"
        } else {
            msgEL.textContent = "\nYou cannot recieve anymore cards.\nPress Start Game to begin a new round!"
        }
    }
 
    
}