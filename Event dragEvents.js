const Div = document.querySelector("div");
const P = document.querySelector("p");
P.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("Text",e.target.id);
});

Div.addEventListener("dragover",function(e){
    e.preventDefault();
});

Div.addEventListener("drop",function(e){
    let id = e.dataTransfer.getData("Text");
    //console.log(id);
    Div.appendChild(document.getElementById(id));
    e.preventDefault();
});