var num = 5;
var mul = num * num;
document.write("result:"+mul +"<br>");

//create a function
/*
function name(){             name is like valid variable you can use any name swap same variable name

}
*/

//trational function using
function square(){
    var num = 5;
    var mul = num * num;
    document.write("result:"+mul +"<br>")
}
//function calling
square();




//trational function using
function square(num){
    var mul = num * num;
    document.write("result:"+mul +"<br>")
}
//function calling
square(6);



//trational function using
function square(num){
    var mul = num * num;
    document.write("result:"+mul +"<br>")
}
//function calling
square(6);
square(7);
square(8);




//trational function using
function square(num1,num2){
    var mul = num1 * num2;
    document.write("result:"+mul +"<br>")
}
//function calling
square(7,8);






//trational function using
function square(num1,num2){
    var mul = num1 * num2;
    return mul;
}
//function calling
var x = square(10,8);
document.write("result is:"+x +"<br>");




