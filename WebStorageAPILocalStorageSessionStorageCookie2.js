//-------------sessionStorage-----------
//localStorage vs sessionStorage
//10mb  vs  5mb
//permanent vs session(tab)



//sessionStorage.setItem("key","value");

//setItem("key","value");
sessionStorage.setItem("user","MD jamal");

//getItem("key");
const userName10 = sessionStorage.getItem("user");
console.log(userName10);

//removeItem("key");
sessionStorage.removeItem("user");

//clear();
sessionStorage.clear();




//sessionStorage will working in object example
//setItem("key",value);
const user1 = {id:"114",name:"HolyBook"};
sessionStorage.setItem("user",JSON.stringify(user1));

//getItem("key");
const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);

 




