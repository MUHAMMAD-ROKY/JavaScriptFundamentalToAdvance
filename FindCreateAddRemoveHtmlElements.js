//creating html elements
var heading3 = document.createElement("h1");
var text = document.createTextNode("Well");
heading3.appendChild(text);

var myDiv = document.getElementById("myDiv");
myDiv.appendChild(heading3);

var heading2Remove = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2Remove);




var heading4 = document.createElement("h1");
var text4 = document.createTextNode("javascript adding system");
heading4.appendChild(text4);
var headingUp = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading4,headingUp);