//error handle----------- try,catch,finally
//throw statements ------ create custom errors
try{
    //code test
    alert("hi google");
    alert(x);
    alert("hi youtube");
}
catch(error){
    //error handle
    console.log("hi facebook");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    alert("hi youtube");
}