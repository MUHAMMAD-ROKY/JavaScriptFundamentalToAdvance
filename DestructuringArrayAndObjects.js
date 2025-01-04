//array destructure
let numbers = [10,20,30,40,50];
let[num1,num2,num3,num4,num5]=numbers;
console.log(numbers);



//array destructure
let numbersD = [10,20,30,40,50];
let[number1,number2,...z]=numbersD;
console.log(z);



//array destructure
let numbers1 = [10,20,30,40,50];
console.log(numbers1[0]);
console.log(numbers1[1]);
console.log(numbers1[2]);
console.log(numbers1[3]);
console.log(numbers1[4]);



//array destructure
let numbers2 = [10,20,30,40,50];
let[nums1,nums2,nums3,nums4,nums5]=numbers;
console.log(nums1);
console.log(nums2);
console.log(nums3);
console.log(nums4);
console.log(nums5);








//swap variables
let a = 10, b= 20;
[a,b] = [b,a];
console.log(a);
console.log(b);



//object destructure general system
const studentInfo ={
    id:11210320657,
    name:"md kamal",
    gpa:3.506
}
console.log(studentInfo.id);
console.log(studentInfo.name);
console.log(studentInfo.gpa);





//object destructure ES6 system
const studentInfo1 ={
    id1:11210320657,
    name1:"md kamal",
    gpa1:3.506
}
const{id1,name1,gpa1}=studentInfo1;
console.log(id1);
console.log(name1);
console.log(gpa1);





//nested object destructure ES6 system
const studentInfo2 ={
    id:11210320657,
    name:"md kamal",
    gpa:3.506,
    language:{
        native:"bangla",
        begineer:"English"
    }
}
const{id,name,gpa,language}=studentInfo2;
console.log(id);
console.log(name);
console.log(gpa);
console.log(language);
console.log(language.native);


//general function
function studentInformation1 (){

}
studentInformation1();

//destructuring function parameters  ES6 apply
const sInf2 = (allData) =>{
    console.log(`${allData.id},${allData.name},${allData.age}`);
}
const allData={
    id:1123584,
    name:"jamal",
    age:25
}
sInf2(allData);




//destructuring function parameters  ES6 apply----- {}bracket using destructuring in object function
const sInf3 = ({id,name,age}) =>{
    console.log(`${id},${name},${age}`);
}
const allData3={
    id:1123584,
    name:"jamal",
    age:25
}
sInf3(allData3);
