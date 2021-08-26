// document.getElementById("count-el").innerText = 5;

// initialize count to 0
let count = 0;
let countEL = document.getElementById("count-el");
// listen for clicks and increment count
function increment() {
    count += 1;
    // change count-et in html to reflect new count
    countEL.textContent = count;
}

// Create a function called save() which logs out the count when it is called
let sentence = document.getElementById("entries")
function save() {
    sentence.textContent += (count + " - ");
    count = 0;
    countEL.textContent = count;
}


