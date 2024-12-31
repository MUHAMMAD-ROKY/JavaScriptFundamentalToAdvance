/*
setTimeout(()=>{
    console.log("hi");
},2000);

*/


/*
setTimeout(display,2000);
function display(){
    console.log("display function");
}
*/


/*

const saveButton = document.querySelector('.save-btn');
const Message = document.querySelector('.message');
saveButton.addEventListener('click',saveUser);

function saveUser(){
    Message.textContent = "User registration sucessful";

    setTimeout(()=>{
        Message.textContent ="";
    },2000)
}

*/



const saveButton = document.querySelector('.save-btn');
const Message = document.querySelector('.message');

saveButton.addEventListener('click',displayCount);
function displayCount(){
    let count = 1;
    Message.textContent = count;

    setInterval(() => {
        count++;
        Message.textContent = count;
    },1000);
}