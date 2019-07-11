const options = document.querySelectorAll(".choice");

// Play game

const play = (e) => {
    const user = e.target.id;   
    console.log(user)
   
}

// Get computers choice

const ComputerChoice = () => {
    const rand = Math.random();
    if(rand < 0.34) {
        return "rock";
    } else if(rand <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}


// Get game winner 
// p = person
// c = computer
const getWinner = (p, c) => {
    if(p === c ) {
        return "draw";
    } else if(p === "rock") {
        if(c === "paper") {
            return "computer";
        } else {
            return "player";
        }   
    }  else if(p === "paper") {
        if(c === "scissors") {
            return "computer";
        } else {
            return "player";
        }
    } else if (p === "scissors") {
        if(c === "rock") {
            return "computer"
        } else {
            return "player"
        }
    }
} 



options.forEach(option =>option.addEventListener("click", play));