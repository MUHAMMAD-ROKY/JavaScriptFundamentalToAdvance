//array method:   push()  pop()  concat()  
//shift() unshift() splice()   
//sort()  reverse()

var names = ["kamal","jamal","Hassan","Raju","rakib","Raj"];
console.log(names);

console.log(names.push("Rasel"));
console.log(names.pop());
console.log(names.shift());
console.log(names.unshift());
console.log(names.splice(1,0,"masud","naime","jamil"));
console.log(names.slice());
console.log(names.sort());
console.log(names.reverse());









var numbers1=[30,80,50,90];
numbers1.sort(function(a,b){
    return a-b;
})
console.log(numbers1);


var numbers2=[30,80,50,90];
numbers2.sort(function(a,b){
    return b-a;
})
console.log(numbers2);