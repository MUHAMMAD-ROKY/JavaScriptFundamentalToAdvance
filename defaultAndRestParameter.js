//default parameter 

"use strict"
function message(text="default messages"){
    console.log(`${text}`);
}
message();
message("Hello js es6");


"use strict"
function sum(x,y,...z){
    console.log(`x= ${x}, y=${y}, z=${z}`);
}
sum(10,20,30,40,50,60);