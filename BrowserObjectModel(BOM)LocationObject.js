console.clear();
//console.log(window);
//console.log(location);
//console.log(window.location);
//console.log(location.href);
//console.log(location.protocol);
//console.log(location.hostname);
//console.log(location.port);
//console.log(location.pathname);

var locationDiv = document.querySelector(".location-div");
//console.log(locationDiv);
var p1 = locationDiv.children[0];
p1.textContent = location.protocol;
console.log(p1);
var p1 = locationDiv.children[1];
p1.textContent = location.hostname;
console.log(p1);
var p1 = locationDiv.children[2];
p1.textContent = location.port;
console.log(p1);
var p1 = locationDiv.children[3];
p1.textContent = location.pathname;
console.log(p1);

var p1 = locationDiv.children[4];
p1.textContent = location.href;
console.log(p1);


const visitButton = document.getElementById("visit-button");
visitButton.addEventListener("click",function(){
    location.assign("https://youtube.com");
});