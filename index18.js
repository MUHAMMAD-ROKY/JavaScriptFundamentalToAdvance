/*

var number = [10,20,30,40,50,60];
var Sum = 0;
for(var i=0; i<6; i++){
    console.log(number[i]);
    Sum = Sum + number[i];
}
console.log("Total Number is:"+Sum);


*/


var num = new Array();
for(var i=0; i<5; i++){
    num[i] = parseInt(prompt("Enter your number:"));
}
var Sum = 0;
for(var i=0; i<5; i++){
    console.log(num[i]);
    Sum = Sum + num[i];
}
console.log("Total num is :---:--"+Sum);