function getComputerChoice() { //GETING THE COMPUTER CHOICE
    const arrayChoices = ["rock", "paper", "scissors"];
    let randomChoice = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
    return randomChoice.toLowerCase();
};
function getHumanChoice() { //GETING THE HUMAN CHOICE
    const humanChoice = prompt("Now, please enter your choice: Rock, Paper or Scissors?");
    return humanChoice.toLowerCase();
};
function playGame(humanChoice, computerChoice) { //PLAYING THE GAME
    const rounds = 5;
    let humanScore = 0;
    let computerScore = 0;
    console.log("".padStart(10, "-") + "Welcome to the game of Rock, Paper, Scissors!" + "".padEnd(10, "-") + "\n\n");
    for(let i = 1; i <= rounds; i++){
        const humanSection = humanChoice();
        const computerSection = computerChoice();
        console.log("You: " + humanSection);
        console.log("Computer: " + computerSection + "\n");
        if(humanSection === computerSection){
            console.log("It is a tie!\n\n");
        }
        else if(humanSection === "rock" && computerSection === "paper"){
            console.log("Computer won!\n\n");
            computerScore++;
        }
        else if(humanSection === "rock" && computerSection === "scissors"){
            console.log("You won!\n\n");
            humanScore++;
        }
        else if(humanSection === "paper" && computerSection === "rock"){
            console.log("You won!\n\n");
            humanScore++;
        }
        else if(humanSection === "paper" && computerSection === "scissors"){
            console.log("Computer won!\n\n");
            computerScore++;
        }
        else if(humanSection === "scissors" && computerSection === "rock"){
            console.log("Computer won!\n\n");
            computerScore++;
        }
        else if(humanSection === "scissors" && computerSection === "paper"){
            console.log("You won!\n\n");
            humanScore++;
        }
    }

    console.log("\n\n" + "" .padStart(10, "-") + "Final Score" + "".padEnd(10, "-"));
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
    if(humanScore > computerScore) {
        console.log("You are the winner!");
    }
    else if(humanScore < computerScore){
        console.log("Computer is the winner!");
    }
    else{
        console.log("It is a tie, no one won")
    };
};

playGame(getHumanChoice, getComputerChoice);