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

        // add tunnels x8
        squares += (i === 0 && (k === 1 || k === 2) ) ? `tunnel-top ` : ``
        squares += (i === 0 && (k === 7 || k === 8) ) ? `tunnel-top ` : ``
        squares += (i === 9 && (k === 1 || k === 2) ) ? `tunnel-bottom ` : ``
        squares += (i === 9 && (k === 7 || k === 8) ) ? `tunnel-bottom ` : ``

        squares += (k === 0 && (i  === 1 || i === 2) ) ? `tunnel-left ` : ``
        squares += (k === 0 && (i  === 7 || i === 8) ) ? `tunnel-left ` : ``
        squares += (k === 9 && (i  === 1 || i === 2) ) ? `tunnel-right ` : ``
        squares += (k === 9 && (i  === 7 || i === 8) ) ? `tunnel-right ` : ``

        // pair tunnel sets {1,2,3,4}
        squares += ((i === 0 || i === 9) && (k === 1 || k === 2)) ? `tunnel-set1` : ``
        squares += ((i === 0 || i === 9) && (k === 7 || k === 8)) ? `tunnel-set2` : ``

        squares += ((i === 1 || i === 2) && (k === 0 || k === 9)) ? `tunnel-set3` : ``
        squares += ((i === 7 || i === 8) && (k === 0 || k === 9)) ? `tunnel-set4` : ``
        

        squares += `"></div>` 

    }
}
grid.innerHTML += squares


// Sort rows and columns