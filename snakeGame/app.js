//////////////// DOM ///////////////////
const grid = document.querySelector(".grid")


// Make rows and columns
let squares = ""
let cellCount = 1
let rowCount = 0
// row = i, columns = k
for (let i=0; i < 12; i++) {
    for (let k=0; k < 12; k++) {

        squares += `<div class="cell row-${i} col-${k} `

        // checkered board - light/dark grey
        squares += (rowCount % 2 === 0 && cellCount % 2 === 0) ? `dark ` : `` // even row, dark on even cell
        squares += (rowCount % 2 !== 0 && cellCount % 2 !== 0) ? `dark ` : ``// odd rows, dark on odd cells
        
        rowCount += (cellCount % 12 === 0) ? 1 : 0 // next row
        cellCount++

        // add walls 
        squares += (i ===1 && !(k ===2 || k ===3 || k ===8 || k ===9)) ? `wall-top ` : ``
        squares += (i ===10 && !(k ===2 || k ===3 ||  k ===8 || k ===9)) ? `wall-bottom ` : ``
        squares += (k ===1 && !(i ===2 || i ===3 || i ===8 || i ===9)) ? `wall-left ` : ``
        squares += (k===10 && !(i ===2 || i ===3 || i ===8 || i ===9)) ? `wall-right ` : ``

        // add tunnels x8
        squares += (i ===1 && (k ===2 || k ===3) ) ? `tunnel-top ` : ``
        squares += (i ===1 && (k ===8 || k ===9) ) ? `tunnel-top ` : ``
        squares += (i ===10 && (k ===2 || k ===3) ) ? `tunnel-bottom ` : ``
        squares += (i ===10 && (k ===8 || k ===9) ) ? `tunnel-bottom ` : ``

        squares += (k ===1 && (i  ===2 || i ===3) ) ? `tunnel-left ` : ``
        squares += (k ===1 && (i  ===8 || i ===9) ) ? `tunnel-left ` : ``
        squares += (k ===10 && (i  ===2 || i ===3) ) ? `tunnel-right ` : ``
        squares += (k ===10 && (i  ===8 || i ===9) ) ? `tunnel-right ` : ``

        // pair tunnel sets {1,2,3,4}
        squares += ((i ===1 || i ===10) && (k ===2 || k ===3)) ? `tunnel-set1 ` : ``
        squares += ((i ===1 || i ===10) && (k ===8 || k ===9)) ? `tunnel-set2 ` : ``

        squares += ((i ===2 || i ===3) && (k ===1 || k ===10)) ? `tunnel-set3 ` : ``
        squares += ((i ===8 || i ===9) && (k ===1 || k ===10)) ? `tunnel-set4 ` : ``
        
        squares += (i === 4 && k === 9) ? `snake ` : ``
        squares += (i === 5 && k === 6) ? `snake ` : ``
        squares += (i === 5 && k === 4) ? `snake ` : ``
        squares += (i === 5 && k === 7) ? `snake ` : ``

        squares += `"></div>` 

    }
}
grid.innerHTML += squares


// Sort rows and columns