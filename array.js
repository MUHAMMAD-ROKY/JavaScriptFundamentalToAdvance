//array is an object, collection of variable;
var names = ["kamal","jamal","raj","rakib","hassan","mazher","naime"];
names.push("rasel");
console.log(names);
names.pop();
console.log(names);  
console.log(names.length);
console.log(names[2]);






///concat system of two array
var country1 = ["Bangladesh","pakistan"];
var country2 =["United state Of America","Germany"];
var country = country1.concat(country2);
console.log(country);





//loop of array
var number1 =[10,30,50,60,80,90];
for(var i = 0; i<6; i++){
    console.log(number1[i]);
}




//loop of array
var number1 =[10,30,50,60,80,90,60];
var sum = 0;
for(var i = 0; i<7; i++){
    console.log(number1[i]);
    sum = sum+number1[i];
}
console.log("Total Sum is: "+sum);