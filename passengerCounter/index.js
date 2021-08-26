// document.getElementById("count-el").innerText = 5;

// initialize count to 0
let count = 0;
let countEL = document.getElementById("count-el");
// listen for clicks and increment count
function increment() {
    count += 1;
    // change count-et in html to reflect new count
    countEL.innerText = count;
}

// Create a function called save() which logs out the count when it is called
function save() {
    return count;
}

let sentence = document.getElementById("entries")
// Create enteries that print out each saved entry
function entries() {
    sentence.textContent += (save() + " - ");
}

