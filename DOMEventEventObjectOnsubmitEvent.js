//finding all Elements of form
const form = document.querySelector("form");
const name = form.querySelector(" div #name");
const email = form.querySelector(" div #email");
const password = form.querySelector(" div #password");


form.addEventListener("submit", formHandler);

function formHandler(Event){
    Event.preventDefault();
    const userInfo ={
        name: name.value,
        email: email.value,
        password: password.value
    };
    console.log(userInfo);
    name.value ="";
    email.value="";
    password.value="";
}