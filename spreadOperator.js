/*
function addNumbers(x,y,z){
    return x+y+z;
}
let numbers =[1,2,3]
console.log(addNumbers(...numbers));
let numbers1 = [5,6,...numbers]
console.log(numbers1);


/*
let numbers3 =[5,6,7]
let numbers4 =[8,9,10]
numbers5 = numbers3.concat(numbers4);
console.log(numbers5);

let numbers3 =[5,6,7]
let numbers4 =[8,9,10]
numbers5 = [...numbers3,...numbers4];
console.log(numbers5);

*/


//object 
let p1={
    name:"Md Raj",
    age: 30,
}
let p2={
    nationality:'bangladesh',
    occapation:'teacher',
}
let p = {...p1,...p2}
console.log(p);