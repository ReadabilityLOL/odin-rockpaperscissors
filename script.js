let choices = ["rock","paper","scissors"]
let wincounter = 0;
let compWinCounter = 0;

function getComputerChoice(){
	let choiceIndex = Math.floor(Math.random() * (3) );
 	return (choices[choiceIndex]);
}

function getPlayerChoice(){
	
}

const rock = document.querySelector(".rock");
rock.addEventListener('click',()=>{
	playerChoice = "rock";
	if(compWinCounter>3||wincounter>3){
		return;	
	}
	decide("rock",getComputerChoice());
})

const container = document.querySelector(".result-container");
const paper = document.querySelector(".paper");
paper.addEventListener('click',()=>{
	playerChoice = "paper";
	if(compWinCounter>3||wincounter>3){
		return;	
	}
	decide("paper",getComputerChoice());
})
const scissors = document.querySelector(".scissors");
	scissors.addEventListener('click',()=>{
		playerChoice = "scissors";
		if(compWinCounter>3||wincounter>3){
			return;	
		}
		decide("scissors",getComputerChoice());
	})
function decide(input1,input2){
	if(compWinCounter>=3||wincounter>=3){
		wincounter++;
		compWinCounter++;
		let div = document.createElement("div")
		if(wincounter>compWinCounter){
			div.textContent = "You win!"	
			div.classList.add("result");
			div.classList.add("win");

		}else{
			div.textContent = "You lose :("	
			div.classList.add("result");
			div.classList.add("loss");
		}
		container.appendChild(div);
	} else if(input1 == "rock"&&input2 == "paper"){
		let div =document.createElement("div")

			div.textContent = "Computer wins"	
			div.classList.add("result");
		document.createElement("div")
		container.appendChild(div);
		compWinCounter++;
	}else if(input1=="rock"&&input2=="scissors"){
		let div =document.createElement("div")

			div.textContent = "Player wins"	
			div.classList.add("result");
		container.appendChild(div);
		wincounter++;
	}else if(input1==input2){
		let div =document.createElement("div")

			div.textContent = "Tie"	
			div.classList.add("result");
		container.appendChild(div);
	}else if(input1=="scissors"&&input2=="rock"){
		let div =document.createElement("div")

			div.textContent = "Computer wins"	
			div.classList.add("result");
		container.appendChild(div);
		compWinCounter++;
	}else if(input1=="scissors"&&input2=="paper"){
		let div =document.createElement("div")

			div.textContent = "Player wins"	
			div.classList.add("result");
		container.appendChild(div);
		wincounter++;
	}else if(input1=="paper"&&input2=="rock"){
		let div =document.createElement("div")

			div.textContent = "Player wins"	
			div.classList.add("result");
		container.appendChild(div);
		wincounter++;
	}else if(input1=="paper"&&input2=="scissors"){
		let div = document.createElement("div")
 
			div.textContent = "Computer wins"	
			div.classList.add("result");
		container.appendChild(div);
		compWinCounter++;
	}
}

