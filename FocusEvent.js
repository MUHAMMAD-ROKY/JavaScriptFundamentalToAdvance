const input = document.querySelector('input');
input.addEventListener('blur',function(e){
    //console.log("blur");
    //input.style.backgroundColor="transparent";
    //input.style.padding="0rem";
    //console.log(e.target.value);
    input.value = e.target.value.toUpperCase();
})
input.addEventListener('focus',function(){
    //console.log("focus");
    input.style.backgroundColor="green";
    input.style.padding="2rem";
})

/*
input.addEventListener('focusin',function(){
    console.log("focusin");
})
input.addEventListener('focusout',function(){
    console.log("focusout");
})
*/