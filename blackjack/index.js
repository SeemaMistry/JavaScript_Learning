/* initailize default attributes */
let firstCard = 10
let secondCard = 4
let hand = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let msgEL = document.getElementById("msg-el")
// let sumEL = document.getElementById("sum-el")
let sumEL = document.querySelector("#sum-el")
let cardEL = document.getElementById("card-el")

function startGame() {
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
    let card = 3
    hand.push(card)
    sum += card
    renderGame()
}