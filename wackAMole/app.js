document.addEventListener("DOMContentLoaded", () => {

// get the grid class div and add in 9 html divs, ids 1-9 and class=square
const grid = document.querySelector(".grid")

// store all the div elements as a string
let divContainers = ""
// loop and make 9 div, class=square, id=i
for (let i = 1; i < 10; i++) {
    // html div class
    divContainers += `
    <div class=square id=${i}>
    </div>
    `
}
grid.innerHTML += divContainers
})
