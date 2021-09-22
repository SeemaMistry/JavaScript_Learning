let saveEL = document.getElementById("save-el")
/* This is one method of creating an event listener:
    function saveLead() {
        saveEL.textContent = "Button clicked!"
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

let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function () {
    saveEL.textContent = "Button clicked!"
})