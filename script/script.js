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

document.querySelectorAll(`[id^= "stop_"]`).forEach(function(stopElem){
    console.log(stopElem.id, stopElem);

    //create stop ID based on Line ID
    const lineID = "line_" + stopElem.id.split("_")[1];
    

    // targeting line by ID
    const lineElem = document.getElementById(lineID);

    // set up hover and unhover event for stop
    stopElem.addEventListener("mouseover", function (event) {
        lineElem.classList.add("lineNumber");
    })

    stopElem.addEventListener("mouseout", function (event) {
        lineElem.classList.remove("lineNumber");
    }) 
    
});

document.querySelectorAll(`[id^= "line_"]`).forEach(function(lineElem){
    console.log(lineElem.id, lineElem);

    //create line ID based on stop ID
    const stopID = "stop_" + lineElem.id.split("_")[1];
    

    // targeting stop by ID
    const stopElem = document.getElementById(stopID);

    // set up hover and unhover event for line
    lineElem.addEventListener("mouseover", function (event) {
        stopElem.classList.add("numberLine");
    })

    lineElem.addEventListener("mouseout", function (event) {
        stopElem.classList.remove("numberLine");
    }) 
    
});


document.querySelectorAll(`[id^= "line_"]`).forEach(function(line) {
    line.addEventListener("mouseover", function (event) {
        // move this line to the front
        event.currentTarget.parentElement.append(event.currentTarget);
    });
});

document.querySelectorAll(`[id^= "stop_"]`).forEach(function(stop) {
    stop.addEventListener("mouseover", function (event) {
        // move this stop to the front
        event.currentTarget.parentElement.append(event.currentTarget);
    });
});
