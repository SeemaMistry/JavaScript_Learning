// document.getElementById("count-el").innerText = 5;

// initialize count to 0
let count = 0;
// listen for clicks and increment count
function increment() {
    count += 1;
    // change count-et in html to reflect new count
    document.getElementById("count-el").innerText = count;
}
