
function appendText() {
    var txt1 = "<p><input type=text/></p>";              // Create text with HTML
    var txt2 = $("<p></p>").text("");  // Create text with jQuery
    var txt3 = document.createElement("p");
               // Create text with DOM
    $("body").append(txt1, txt2);     // Append new elements
}

