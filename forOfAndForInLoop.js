//for.....of    array neya kaj kora jai
const names =["s1","s2","s3"]
for(let name of names){
    console.log(name);
}


//for....in  object neya kaj kora jai
let students ={
    name:'kamal islam',
    id:11210356415,
    cgpa:3.506
}
for(let x in students){
    //console.log(x);
    //console.log(students[x]);
    console.log(`${x}:${students[x]}`);
}