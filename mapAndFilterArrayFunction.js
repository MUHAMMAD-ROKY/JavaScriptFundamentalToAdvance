//forEach,map,filter

/*
//forEach
var numbers = [10,20,30,40,50,60];
var squareNumbers =[];
numbers.forEach(function(x){
    squareNumbers.push(x*x);
})
console.log(squareNumbers);

*/
//map
var numbers = [10,20,30,40,50,60];
var squareNumbers = numbers.map(function(x){
    return x*x;
})
console.log(squareNumbers);



//filter
var numbers1 =[20,60,80,5,2,3,7,5,15,20,4,9];
var newNumbers = numbers1.filter(function(x){
    return x>10;
})
console.log(newNumbers);