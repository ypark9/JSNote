// All the code is wrapped in the IIFE
 (dothings = function () {
    var firstName = "Yoon";
    function init () {
        doStuff (firstName);
        // code to start the application
    }
    function doStuff () {
        // Do stuff here
        console.log("d0 stuff is here.");
        
    }
    function doMoreStuff () {
        // Do more stuff here
    }
    // Start the application
    init ();
}) ();

dothings();