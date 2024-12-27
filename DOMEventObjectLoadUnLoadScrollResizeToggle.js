/*
// load,unload
//scroll
//resize
//toggle ---are always work in ||  details ||
*/

window.addEventListener("load",function(){
    console.log("load");
})

window.addEventListener("unload",function(){
    console.log("unload");
})

window.addEventListener("scroll",function(){
    console.log("scroll");
})


/*
window.addEventListener("resize",function(){
    console.log("resize");
})
*/
window.addEventListener("resize",function(){
    var width = window.outerWidth;
    var height = window.outerHeight;
    console.log(`width:${width},height:${height}`);
})



const details = document.querySelector("details");
details.addEventListener("toggle",function(){
    console.log("toggle");
})