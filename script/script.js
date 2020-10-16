document.querySelectorAll(`[id^= "terminal_"]`).forEach(function(terminalElem){
    console.log(terminalElem.id, terminalElem);



    //create popup ID based on terminal ID 
    const popupId = ("popup_" + terminalElem.id.split("_")[1]); 

    //set up hover events
    const popupElem =  document.getElementById(popupId);
    console.log(popupId);

    // set up hover and unhover event for terminal
    terminalElem.addEventListener("mouseover", function (event) {
        popupElem.classList.add("popup-open");
    })

    terminalElem.addEventListener("mouseout", function (event) {
        popupElem.classList.remove("popup-open");
    }) 

});