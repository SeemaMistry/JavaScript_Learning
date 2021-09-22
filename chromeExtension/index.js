let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    renderLeads()
})

function renderLeads() {
    let listItems = "" // create varible to store all the list items

    for (link in myLeads) {
        // add each myLead element with its html tags to listItems
        listItems += "<li>" + myLeads[link] + "</li>"
    }
    ulEl.innerHTML = listItems // Call DOM manipulation on listItems
}


// Below are just some notes on the code:

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

/* Alternative way to create html elements in above for loop:
    Method 1: Call .innerHTML
        // innerHTML will parse string elements that are html code as html code
        ulEl.innerHTML += "<li>" + myLeads[link] + "</li>"

    Method 2: Create li element
        // create element
        let li = document.createElement("li")
        // set text content
        li.textContent = myLeads[link]
        // append to ul
        ulEl.append(li)
*/

/* Why not just do DOM manipulation inside for loop? 
    Remember this key phrase:
        "DOM manipulation comes at a cost!"
        So the less times you call on DOM manipulation, the more efficient your code.
    
    Calling DOM manipulation each time in for loop has a higher cost than calling DOM manipulation once at the end 
*/

