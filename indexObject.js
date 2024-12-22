//variable declearation system
var name = "Mazher";
var age = 27;
var cgpa = 3.45;
var language = ["bangla","english","arabic"];

console.log(language);



//create an object 
//how to print an object value
//adding constructor
function Student(name,age,cgpa,language){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;

    //call system both
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.language);
    }
}
var student1 = new Student("kamal",25,3.586,["bangla","english","arabic"]);
var student2 = new Student("jamal",35,2.586,["Russain","bangla","english","arabic"]);
var student3 = new Student("Raj",45,2.586,["english","arabic"]);


student1.display();
student2.display();
student3.display();





// single single Object declearation system

var student1 = {
    name : "Mazher Islam",
    age : 47,
    cgpa : 3.905,
    language : ["bangla","english","arabic"]
}
var student2 = {
    name : "Raj Islam",
    age : 27,
    cgpa : 3.005,
    language : ["bangla","english","arabic"]
}
var student3 = {
    name : "Naime Islam",
    age : 37,
    cgpa : 3.205,
    language : ["bangla","english","arabic"]
}
console.log(student2.name);












//math object 
var num1 = parseInt(prompt("Enter your first Number :"));
var num2 = parseInt(prompt("Enter your second Number :"));

var maximum = Math.max(num1,num2);
console.log(maximum);