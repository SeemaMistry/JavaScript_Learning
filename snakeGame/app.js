//////////////// DOM ///////////////////
const grid = document.querySelector(".grid")


// Make rows and columns
let squares = ""
let cellCount = 1
let rowCount = 0
// row = i, columns = k
for (let i=0; i < 10; i++) {
    for (let k=0; k < 10; k++) {
        squares += `<div class="cell row-${i} col-${k} `

        // checkered board - light/dark grey
        squares += (rowCount % 2 === 0 && cellCount % 2 === 0) ? `dark ` : `` // even row, dark on even cell
        squares += (rowCount % 2 !== 0 && cellCount % 2 !== 0) ? `dark ` : ``// odd rows, dark on odd cells
        
        rowCount += (cellCount % 10 === 0) ? 1 : 0 // next row
        cellCount++

        // add walls 
        squares += (i === 0 && !(k === 1 || k === 2 || k === 7 || k === 8)) ? `wall-top ` : ``
        squares += (i === 9 && !(k === 1 || k === 2 || k === 7 || k === 8)) ? `wall-bottom ` : ``
        squares += (k === 0 && !(i === 1 || i === 2 || i === 7 || i === 8)) ? `wall-left ` : ``
        squares += (k=== 9 && !(i === 1 || i === 2 || i === 7 || i === 8)) ? `wall-right ` : ``

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
        
        squares += (i === 5 && k === 5) ? `snake ` : ``
        squares += (i === 5 && k === 6) ? `snake ` : ``
        squares += (i === 5 && k === 4) ? `snake ` : ``
        squares += (i === 5 && k === 7) ? `snake ` : ``

        squares += `"></div>` 

    }
}
grid.innerHTML += squares


// Sort rows and columns