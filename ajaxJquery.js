//add jquery library cdn
//ajax - asynchronous javascript and xml

console.clear();
//console.log(window);

const makeRequest = async(url,method,data) =>{
   try{
    const result = await $.ajax({
        url: url,
        method: method,
        data:data,
    })
    return result;
   }catch(err){
        console.log(err);
   }
}

const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","GET")
    .then((res)=>console.log(res))
    .then((err)=>console.log(err));
}
getData();


const createData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/","POST",{
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
    .then((res)=>console.log(res))
    .then((err)=>console.log(err));
}
createData();


const updateData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","PUT",{
        id:1,
        title: 'Web development',
        body: 'ajax jquery',
        userId: 1,
    })
    .then((res)=>console.log(res))
    .then((err)=>console.log(err));
}
updateData();




const deleteData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","DELETE")
    .then((res)=>console.log(res))
    .then((err)=>console.log(err));
}
deleteData();



