//for 
var numbers = [10,20,30,40,50]
for(var x=0; x<numbers.length; x++){
    console.log(numbers[x]);
}



//forEach
var numbers = [10,20,30,40,50]
numbers.forEach(myFunction)
function myFunction(x){
    console.log(x);
}



//forEach
var numbers = [10,20,30,40,50]
numbers.forEach(function(x){
    console.log(x);
})



//forEach
var numbers = [10,20,30,40,50];
var squareNumbers =[];
numbers.forEach(function(x){
    squareNumbers.push(x*x);
});
console.log(squareNumbers);



//forEach
var newNumbers = [10,20,30,40,50];
newNumbers.forEach(function(x,index,arr){
    arr[index]=x+5;
});
console.log(newNumbers);


