//Synchronous programming
const taskOne = (callBack) =>{
    console.log("Task1");
    callBack();
}

const taskTwo = (callBack) =>{
   setTimeout(() =>{
    console.log("Task2 .Data loading");   //asynchronous system is not stop processing.It's always run and quickly multi program run.
    callBack();
    },3000);
}
const taskThree = (callBack) =>{
    console.log("Task3");
    callBack();
}
const taskFour = (callBack) =>{
    console.log("Task4");
    callBack();
}
const taskFive = () =>{
    console.log("Task5");
}


/*

taskOne(function f1(){
    taskTwo(function f2(){
        taskThree(function f3(){
            taskFour(function f4(){
                taskFive();
            });
        });
    });
});

*/
taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            });
        });
    });
});