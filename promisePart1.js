console.log("Welcome");
/*how to create promise ---> pending, resolve, reject

const promise1 = new Promise((resolve,reject)=>{
    
}) 

*/


const promise1 = new Promise((resolve,reject)=>{
    let completedPromise = true;
    if(completedPromise){
        resolve("completed promise1");
    }
    else{
        //reject("Not completed promise1");
        reject(new Error("Not completed promise1"));
    }
}) 

//console.log(promise1);

promise1.then((res)=>{
    console.log(res);
})
.catch((err) =>{
    console.log(err.message);
});
console.log("End");






const promise2 = new Promise((resolve,reject)=>{
    resolve("completed promise2.2");
});
promise2.then((res)=>console.log(res));





//destructuring system in promise

const promise4 = new Promise((resolve,reject)=>{
    let completedPromise = true;
    if(completedPromise){
        resolve("completed promise 4");
    }
    else{
        //reject("Not completed promise1");
        reject(new Error("Not completed promise 4"));
    }
}) 

const promise5 = new Promise((resolve,reject)=>{
    resolve("completed promise 5");
});

Promise.all([promise4,promise5]).then(([res4,res5])=>console.log(res4,res5));







const promise7 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("completed promise 7");
    },2000)
});

const promise8 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("completed promise 8");
    },1000)
});

Promise.race([promise7,promise8]).then((res)=>console.log(res));






