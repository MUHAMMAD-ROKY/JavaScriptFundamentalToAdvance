console.clear();
const div = document.querySelector('div');
/*
div.addEventListener('click',function(){
    console.log('clicked');
})
*/
div.addEventListener('click',function(event){
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.innerHTML);
    console.log(event.target.textContent);
    console.log(event.target.innerText);
})


//find two or more button in querryselectorAll
const buttons = document.querySelectorAll(".btn");
console.log(buttons);
Array.from(buttons).map((button)=>{
    button.addEventListener("click",function(event){
        console.log(event.target.innerText);
    });
});




div.addEventListener('dblclick',function(){
    console.log('dblclick');
})

div.addEventListener('mousedown',function(){
    console.log('mousedown');
})
div.addEventListener('mouseup',function(){
    console.log('mouseup');
})

div.addEventListener('mouseenter',function(){
    console.log('mouseenter');
})
div.addEventListener('mouseleave',function(){
    console.log('mouseleave');
})

div.addEventListener('mousemove',function(){
    console.log('mousemove');
})
/*
div.addEventListener('mouseover',function(){
    console.log('mouseover');
})
*/
div.addEventListener('mouseover',function(event){
    console.log('clientX ='+event.clientX,'clientY ='+event.clientY);
})