let choices = ["rock","paper","scissors"]
function getComputerChoice(){
	let choiceIndex = Math.floor(Math.random() * (3) );
 	return (choices[choiceIndex]);
}

function getPlayerChoice(){
	let playerChoice = prompt("Enter your choice").toLowerCase();
	while(!choices.includes(playerChoice)){
		playerChoice = prompt("Sorry, that doesn't work. Please enter your choice").toLowerCase();
	}
	return playerChoice;
}

function decide(input1,input2){
	let wincounter = 0;
	let compWinCounter = 0;
	if(input1 == "rock"&&input2 == "paper"){
		console.log("computer wins");
		compWinCounter++;
	}else if(input1=="rock"&&input2=="scissors"){
		console.log("player wins");
		wincounter++;
	}else if(input1==input2){
		console.log("tie!");
	}else if(input1=="scissors"&&input2=="rock"){
		console.log("computer wins!")
		compWinCounter++;
	}else if(input1=="scissors"&&input2=="paper"){
		console.log("player wins!")
		wincounter++;
	}else if(input1=="paper"&&input2=="rock"){
		console.log("player wins!")
		wincounter++;
	}else if(input1=="paper"&&input2=="scissors"){
		console.log("computer wins!")
		compWinCounter++;
	}
}
for(let x = 0; x<5;x++){
	decide(getPlayerChoice(),getComputerChoice());
}
