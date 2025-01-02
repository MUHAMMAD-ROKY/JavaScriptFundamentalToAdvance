//traditional function
function display1(){
    console.log("I love Bangladesh");
}
display1();


//arrowFunction
const display2 = () =>{
    console.log("I love Bangladesh 2")
}
display2();


//traditional function
function message1(){
    return "Hi I am little FrontEnd developer1";
}
console.log(message1());


//arrowFunction
const  message2 = () =>{
    return "Hi I am little FrontEnd developer2";
}
console.log(message2());


//arrowFunction simplifiy korlay jodi 1ta line thakay taholay return keyword lagbay na r {} brackets oh lagbay nah.
const  message3 = () =>
    "Hi I am little FrontEnd developer3";

console.log(message3());


//traditional function
function add1(num1,num2){
    return num1+num2;
}
console.log(add1(10,20));


//arrowFunction
const add2 = (num1,num2) =>{
    return num1+num2;
}
console.log(add2(50,60));