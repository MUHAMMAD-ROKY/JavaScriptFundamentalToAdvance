var numOfWon = 0;
var numOfLost = 0;
for(var i=1; i<=5; i++){
    var guessNumber = prompt("Enter your number 1 to 5: ");
    var randomNumber = Math.floor(Math.random()*5)+1;
        if(guessNumber == randomNumber){
            console.log("You Have Won");
            numOfWon ++;
        }
        else{
            console.log("You Have Lost. Random number was" + randomNumber);
            numOfLost ++;
        }
}
document.write("Number of Won ="+numOfWon + "<br>");
document.write("Number of Lost ="+numOfLost + "<br>");