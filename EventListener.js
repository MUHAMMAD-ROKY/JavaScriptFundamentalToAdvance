document.querySelector("button").addEventListener("click", function(){
    alert("Hello world");
});


var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", function(){
    myVar.classList.add("my-Style");
});

var myVar = document.querySelector("h1");
myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("my-Style");
});