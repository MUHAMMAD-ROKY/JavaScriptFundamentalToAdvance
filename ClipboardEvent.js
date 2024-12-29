const input = document.querySelector("input");
const P = document.querySelector("p");
input.addEventListener("copy",function(){
    //console.log("copy");
    P.innerText ="you have copied";
});
input.addEventListener("cut",function(){
   // console.log("cut");
   P.innerText ="you have cut";
});
input.addEventListener("paste",function(){
   // console.log("paste");
   P.innerText ="you have pasted";
});