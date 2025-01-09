//-----------localStorage----------

//web storage API --- allows us to store & read data in browser
//web storage API --- LocalStorage, sessionStorage
//localStorage --- store,read,update and remove data
//no expire data --- data never gets lost even if you close the browser 

//localStorage store data as key value pair----String 


 console.clear();
//console.log(window);


/*
//setItem(key,value);
localStorage.setItem("userName","Muhammad kamal");
localStorage.setItem("password","123456");
*/


//getItem(key);
const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
console.log(userName,userPassword);


//update 
const userName1 = localStorage.getItem("userName");
const userPassword1 = localStorage.getItem("password");
console.log(userName1,userPassword1);
localStorage.setItem("userName","jamal");
localStorage.setItem("password","123");


//removeItem(key);
localStorage.removeItem("userName","jamal");
localStorage.removeItem("password","123");




//example setItem(key, value)
const countries = ["Bangladesh","united kingdom","australia","japan"];
localStorage.setItem("countries",JSON.stringify(countries));

//getItem(key)
const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);

localStorage.clear();










