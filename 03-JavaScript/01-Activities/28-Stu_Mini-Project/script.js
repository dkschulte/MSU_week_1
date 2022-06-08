var wins = 0;
var losses = 0;
var ties = 0;


var choice = window.prompt( "choose R, P, or S")

var computerChoice = rps[Math.random(3)]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  
 if(choice ===  "R" && computerChoice === "S"){
    window.alert ('you win' + 'Computer choice was ' + computerChoice)
    wins += 1
 }
  else if( choice === "S" && computerChoice ==="S"){
    window.alert ("You tied -_- " + 'Computer choice was ' + computerChoice)
    ties += 1
 }
  else if( choice === "P" && computerChoice === 'R'){
    window.alert( "you loose :(" + 'Computer choice was ' + computerChoice)
    losses +=1
  }
 
 if(choice ===  "P" && computerChoice === "R"){
    window.alert ('you win' + 'Computer choice was ' + computerChoice)
    wins += 1
  }
 else if( choice === "P" && computerChoice ==="P"){
    window.alert ("You tied -_- " + 'Computer choice was ' + computerChoice)
    ties += 1
 }
 else if( choice === "S" && computerChoice === 'R'){
    window.alert( "you loose :(" + 'Computer choice was ' + computerChoice)
     losses +=1
 }

 if (choice ===  "S" && computerChoice === "P"){
    window.alert ('you win' + 'Computer choice was ' + computerChoice)
    wins += 1
 }
 else if( choice === "R" && computerChoice ==="R"){
    window.alert ("You tied -_- " + 'Computer choice was ' + computerChoice)
    ties += 1
 }
  else if( choice === "R" && computerChoice === 'P'){
    window.alert( "you loose :(" + 'Computer choice was ' + computerChoice)
    losses +=1
  }
};

