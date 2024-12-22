function highestRunScorer(){
   highestScorer = PlayersInfo[0][0];
   highestScore = PlayersInfo[0][1];

   for(var x=1;x<PlayersInfo.length;x++){
        if(highestScore < PlayersInfo[x][1]){
            highestScore = PlayersInfo[x][1]
            highestScorer = PlayersInfo[x][0];
        }
   }

   return highestScorer;

}
var PlayersInfo = [
    ["Mazher",25],
    ["Naime",30],
    ["Raj",35],
    ["Rakib",45],
];
 
var name = highestRunScorer(PlayersInfo);
console.log(name);
