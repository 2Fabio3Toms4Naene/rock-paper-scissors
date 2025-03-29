function getComputerCoice() { //GETING THE COMPUTER CHOICE
    const arrayChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
    return console.log(randomChoice);
};
function getHumanChoice() { //GETING THE HUMAN CHOICE
    const humanChoice = prompt("Now, please enter your choice: Rock, Paper or Scissors?");
    return console.log(humanChoice);
}

getComputerCoice();
getComputerCoice();