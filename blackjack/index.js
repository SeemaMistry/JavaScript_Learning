/* initailize default attributes */
let sum = 10
let hasBlackJack = false
let isAlive = true
let message = ""


function startGame() {
    if (sum <= 20) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    console.log(message)

}