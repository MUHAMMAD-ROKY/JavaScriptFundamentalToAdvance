//find(callback,value) return the value of the first element that pass certain condition
let numbers = [5,3,6,15,9,7];
let firstEventNumbers = numbers.find(x => x%2===0);
console.log(firstEventNumbers);



//find(callback,value) return the value of the first element that pass certain condition
let numbers1 = [5,3,6,15,9,7];
const evenNumber2 = (value,index,array)=>{
    if(value%2 ===0)
        return value;
}
let firstEventNumbers1 = numbers.find(evenNumber2);
console.log(firstEventNumbers1);


//finIndex(callback,value) return the index of the first element  that pass certain condition
let numbers3 = [5,3,6,15,9,7];
const evenNumber3 = (value,index,array)=>{
    if(value%2 ===0)
        return value;
}
let firstEventNumbersIndex3 = numbers.findIndex(evenNumber3);
console.log(firstEventNumbersIndex3);




//arrray object create

const students = [
    {
        id:11254896,
        name:"kamal",
        age:29,
        gpa:2.00,
    },
    {
        id:11254856,
        name:"jamal",
        age:18,
        gpa:3.450,
    },
    {
        id:11254693,
        name:"rahim",
        age:26,
        gpa:4.540,
    },
    {
        id:11254894,
        name:"mazherul islam",
        age:29,
        gpa:4.00,
    },
    {
        id:11254897,
        name:"Hamid",
        age:27,
        gpa:5.00,
    }
]
console.log(students.find(x =>x.gpa>4));
console.log(students.find(x =>x.age>20));
