//callBack and Higher Order Function

function square(x){
    console.log(`square is ${x}: ${x*x}`);
}
//square(5);


/* shortcut-system

const y = square;
y(10);

*/

function higherOrderFunction(num,callBack){
    callBack(num);
}
higherOrderFunction(8,square);