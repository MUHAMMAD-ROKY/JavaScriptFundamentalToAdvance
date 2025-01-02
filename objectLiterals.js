/*
//object literals
function studentInfo1(name,age){
    return{
        name:name,
        age:age
    }
}
console.log(studentInfo1("kamal",30));
*/



//object literals
function studentInfo1(name,age){
    return{
        name,
        age
    }
}
console.log(studentInfo1("kamal",30));







let message ={
    body: function(){
        return`Hi i am object function`;
    }
}
console.log(message.body());



let message1 ={
    body(){
        return`Hi i am object function2`;
    }
}
console.log(message1.body());



//consize method
let message2 ={
    'body name'(){
        return`Hi i am object function3`;
    }
}
console.log(message2['body name']());