// make a 7x6 grid in html grid class
const grid = document.querySelector(".grid")
let gridSquares = ""

for (let i = 1; i < 50; i++) {
    if (i < 43) {
        // make empty div
        gridSquares += `<div><p>I am empty div ${i}</p></div>`
    } else {
        // make div with class name taken
        gridSquares += `<div class="taken"><p>I am taken div ${i}</p></div>`
    }
}
grid.innerHTML += gridSquares

