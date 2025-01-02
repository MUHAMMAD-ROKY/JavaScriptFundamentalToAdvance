//arrow with map,filter
var students = [
    {
        id:11210320698,
        name:"Raj",
        gpa:3.506
    },
    {
        id:11210320685,
        name:"Sakib",
        gpa:3.800
    },
    {
        id:11210320656,
        name:"Hassan",
        gpa:3.689
    },
    {
        id:11210320798,
        name:"Raju",
        gpa:2.506
    },
    {
        id:11210320898,
        name:"kamal",
        gpa:2.066
    },
]


//tradional function
function studentNames1(){
   return students.filter(function(x){
       return x.gpa > 3
    }).map(function(y){
        return y.name;
    });
}

//arrow function
const studentNames2 = () =>{
    return students.filter((x)=> x.gpa>3).map((y)=>y.name);
}

console.log(studentNames1());
console.log(studentNames2());