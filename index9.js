//realtional operator   >  >=  <  <=  ==  ===  !=  !==
//logical operator   &&  ||  !


//conditonal statement
var num = 5;
if(num%2 == 0)
    console.log("Even")
if(num%2 != 0)
    console.log("Odd")




var number1 = prompt("enter any number: ");
if(number1>0)
    console.log("Positive")
else if(number1<0)
    console.log("negative")
else
    console.log("zero")



var marks = prompt("Enter the result number:")
if(marks>=80)
    console.log("A+")
else if(marks>=70)
    console.log("A")
else if(marks>=60)
    console.log("A-")
else if(marks>=50)
    console.log("B")
else if(marks>=40)
    console.log("c")
else if(marks>=33)
    console.log("D")
else
    console.log("F")



//Logical operator
var marks = prompt("Number of result:")
if(marks>100 || marks<0)
    console.log("Invalid marks")
if(marks>=80 && marks<=100)
    console.log("A+")
else if(marks>=70 && marks<=79)
    console.log("A")
else if(marks>=60 && marks<=69)
    console.log("A-")
else if(marks>=50 && marks<=59)
    console.log("B")
else if(marks>=40 && marks<=49)
    console.log("c")
else if(marks>=33 && marks<=39)
    console.log("D")
else
    console.log("F")





var number1 = prompt("number1:")
var number2 = prompt("number2:")
var number3 = prompt("number3:")
if(number1>number2 && number1>number3)
    console.log("large number:"+number1)
if(number2>number1 && number2>number3)
    console.log("large number:"+number2)
else
    console.log("large number:"+number3)



