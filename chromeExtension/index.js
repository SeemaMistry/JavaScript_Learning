let saveEl = document.getElementById("save-el")
let myLeads = ["www.one.com", "www.two.com", "www.three.com"]
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
/* This is one method of creating an event listener:
    function saveLead() {
        saveEl.textContent = "Button clicked!"
    }
Requires:
    - onclick="function()" in html attribute
    - function() made in js document

However, there is a faster and simiplier way of creating an event listener:
    [element].addEventListener(eventType, function(){
        executable code on event
    })
Requires:
    - NO html onclick="function()" needed
    - onclick and function written inside addEventListener parameters
    - NOTE: no function naming required
*/ 

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
})


// Automatically log out contents of myLeads to screen
for (link in myLeads) {
    // console.log(myLeads[link])
    ulEl.innerHTML += "<li>" + myLeads[link] + "</li>"
}
