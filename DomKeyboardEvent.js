const textarea = document.querySelector("textarea");
/*
textarea.addEventListener('keydown',function(){
    console.log('keydown');
})
textarea.addEventListener('keypress',function(){
    console.log('keypress');
})
*/
textarea.addEventListener('keyup',function(event){
    console.log(event.key);
    console.log("alphabet ascci value: "+event.keyCode);
    console.log(event.code);
    console.log(event.shiftKey);
    console.log(event.ctrlKey);
    console.log(event.repeat);
})

textarea.addEventListener('keydown',function(event){
    if(event.repeat){
        alert("DON'T REPEAT");
    }
})
