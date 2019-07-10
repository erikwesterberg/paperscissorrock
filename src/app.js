const options = document.querySelectorAll(".choice");

// Play game

function play(e) {
    const user = e.target.id;   
    console.log(user)
   
}

// Get computers choice

function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return "rock";
    } else if(rand <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}


options.forEach(option =>option.addEventListener("click", play));