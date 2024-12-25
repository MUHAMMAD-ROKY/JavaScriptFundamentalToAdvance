/*
document.querySelectorAll(".myButton1")[0].addEventListener("click",function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML= text + "is clicked";
});


document.querySelectorAll(".myButton2")[0].addEventListener("click",function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML= text + "is clicked";
});


*/

/*

for(var i=0; i<3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML= text + "is clicked";
    });
}

*/

var len = document.querySelectorAll(".myButton").length;
for(var i=0; i<len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML= text + "is clicked";
    });
}