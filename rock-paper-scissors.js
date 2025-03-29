function getComputerCoice() { //GETING THE COMPUTER CHOICE
    const arrayChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
    return console.log(randomChoice);
};
getComputerCoice();