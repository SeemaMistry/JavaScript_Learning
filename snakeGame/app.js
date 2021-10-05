//////////////// DOM ///////////////////
const grid = document.querySelector(".grid")


// Make rows and columns
let squares = ""
// row = i, columns = k
for (let i=0; i < 10; i++) {
    for (let k=0; k < 10; k++) {
        squares += `<div class="cell row-${i} col-${k} `

        // add walls 
        squares += (i === 0) ? `wall-top ` : ``
        squares += (i === 9) ? `wall-bottom ` : ``
        squares += (k === 0) ? `wall-left ` : ``
        squares += (k === 9) ? `wall-right ` : ``

        // add tunnels
        // squares += ((i === 0) && (k === (1 || 2 || 7 || 8))) ? `tunnel ` : ``

        squares += `"></div>` 

    }
}
grid.innerHTML += squares


// Sort rows and columns