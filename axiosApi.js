//axios is a js library
//it helps to make request from browser (plain js/Vue/React/Angular),node.js

// + very easy to use
// + it supports all modern browser including IE
// + it return promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent


//axios(config)
//axios(url,[,config])
//axios.get(url,[,config])
//axios.post(url,[,config])
//axios.put(url,[,config])
//axios.patch(url,[,config])
//axios.delete(url,[,config])

//axios return response  object --- data,status,statusText,headers,config 




console.clear();
//console.log(window);


/*
axios
.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));

*/



const makeRequest = async (config) =>{
    return await axios(config);
}

const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) =>console.log(res))
    .catch((err)=>console.log(err));
}


const createData = () =>{
    makeRequest({
        url:'https://jsonplaceholder.typicode.com/posts',
        method:'POST',
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    })
    .then((res) =>console.log(res))
    .catch((err)=>console.log(err))
};


const updateData = () =>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts/1",
        method:'PUT',
        data: JSON.stringify({
            title: 'food adda',
            body: 'bar car',
            userId: 1,
        }),
    })
    .then((res) =>console.log(res.data))
    .catch((err)=>console.log(err))
};



const deleteData = () =>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts/1",
        method:'DELETE',
    })
    .then((res) =>console.log(res.data))
    .catch((err)=>console.log(err))
};

//getData();
//createData();
//updateData();
//deleteData();

