// let errorMSG = document.getElementById("error-msg")
let purchaseMSG = document.getElementById("purchased-msg")

let inventory = 5;

function purchase() {
    if (inventory > 0) {
        inventory -= 1
        purchaseMSG.textContent = "Thank you for your purchase"
    }
    else {
        purchaseMSG.textContent = "Something went wrong, please try again"    
        // errorMSG.textContent = "Something went wrong, please try again"    

    }
}
