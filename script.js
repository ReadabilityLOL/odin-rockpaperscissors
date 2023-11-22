let choices = ["rock","paper","scissors"]
function getComputerChoice(){
	let choiceIndex = Math.floor(Math.random() * (3) );
	console.log(choices[choiceIndex]);
}

function getPlayerChoice(){
	let playerChoice = prompt("Enter your choice").toLowerCase();
	while(!choices.includes(playerChoice)){
		playerChoice = prompt("Sorry, that doesn't work. Please enter your choice").toLowerCase();
	}
	console.log(playerChoice);
}

getPlayerChoice();
