let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const saveBtn = document.getElementById("save-btn")


// get the leads from localStorage, store it in a variable and log out the variable
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // returns value (parsed into JS code) stored in key="myLeads"
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage // set myLeads array to equal localStorage key myLeads
    renderLeads(myLeads) // render out local storage and presist through refreshing page
}

// on clicks of saveBtn, log out something
const tabs = [
    {url: "https://www.youtube.com/watch?v=-xEb6Py3aKM&list=OLAK5uy_kcK1g6Y0a98HGVtmxVLK4uSF-jJId2wE8&index=24"}
]
saveBtn.addEventListener("click", function () {
    myLeads.push(tabs[0].url) // save link to myLeads
    inputEl.value = "" // clear input bar
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)

})


// on double click, clear localStorage, myLeads array and DOM
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value) // .value allows js to read html input-elements
    inputEl.value = "" // clear the input-el bar when you click save button
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
})

function renderLeads(leads) {
    let listItems = "" // create varible to store all the list items
    for (link in leads) {
        // add each myLead element with its html tags to listItems
        //listItems += '<li><a href="' + myLeads[link] + '" target="_blank">' + myLeads[link] + '</a> </li>'
        listItems += `
            <li>
                <a href="${leads[link]}" target="_blank">${leads[link]}
                </a> 
            </li>
            `
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

