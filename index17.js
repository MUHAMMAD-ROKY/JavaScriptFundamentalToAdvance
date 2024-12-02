function display(){
    console.log("Hello World");
}
display();


///IIFES :  immediately Invocable  Function Expression

(function display(){
    console.log("Hello World1");
})();


//message pass :   IIFES 
(function display(message){
    console.log(message);
})("wow");



//message pass :   IIFES 
(function display(message1,message2){
    console.log(message1,message2);
})("wow","google");




//(general)Function 
function displayMessage(){
    console.log("Hi,I am messaging");
}
displayMessage();



//Function Expression
const display2 = function displayMessage(){  //it's only one variable in push all function is called function expression.
    console.log("Hi,I am messaging 2");
}
display2();



//Function Expression
const display3 = function displayMessage(msg){  //it's only one variable in push all function is called function expression.
    console.log(msg);
}
display3("Hi,I am messaging 3");






