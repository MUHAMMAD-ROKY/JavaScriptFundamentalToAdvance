//4 way to call api : XMLHttpRequest , fetch , Axios , jQuery

//fetch()  has replaced XMLHttpRequest
//fetch   ---> global method for making http request 
//2 ways to call  --->  then,   async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise 
// - returned  promise can only handle network error
// - does not support all the older browser

/*

console.clear();
//console.log(window);
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })'
})
.then((res)=> {
    if(!res.ok){
        const message = `Error is: ${res.status}`
        throw new Error(message);
    }
    return res.json();
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

*/





const makeRequest = async(url,config) => {
   const res = await fetch(url,config);
   if(!res.ok){
        const message = `Error:${res.status}`;
        throw new Error(message);
   }
   const data = await res.json();
   return data;
};

const getData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((res) =>console.log(res))
    .catch((err)=>console.log(err))
};


const sendData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
    .then((res) =>console.log(res))
    .catch((err)=>console.log(err))
};


const updateData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts',{
            method: 'PUT',
            body: JSON.stringify({
              title: 'food vegetable',
              body: 'barbaaa ',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
    .then((res) =>console.log(res))
    .catch((err)=>console.log(err))
};

const deleteData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts',{
            method: 'DELETE',
        })
    .then((res) =>console.log(res))
    .catch((err)=>console.log(err))
};


//getData();
//sendData();
//updateData();
//deleteData();