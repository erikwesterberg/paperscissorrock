const options = document.querySelectorAll(".choice");
const modal = document.querySelector(".modal");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

// Play game

const play = (e) => {
    restart.style.display = "inline-block";
    const user = e.target.id;   
    const Computer = computerChoice();
    const winner = getWinner(user, Computer);
    showWinner(winner, Computer);
    
}

// Get computers choice

const computerChoice = () => {
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
// u = user
// c = computer

const getWinner = (c, p) => {
    if(p === c ) {
        return "rock";
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
    console.log(getWinner())
} 

// Function to show the winner 

const showWinner = (winner, Computer) => {
    if(winner === "player") {
        // show modal result
        result.innerHTML = `
        <h1 class="text-win">You killed it!</h1>
        <button class="fas fa-hand-${Computer} fa-10x"></button>
        <p><strong>Computer chose</strong></p>
        `;  
    } else if(winner === "computer") {
        result.innerHTML = `
        <h1 class="text-lose">You got killed!</h1>
        <button class="fas fa-hand-${Computer} fa-10x"></button>
        <p><strong>Computer chose</strong></p>
        `;  
    } else {
        result.innerHTML = `
        <h1>"Its A Draw"</h1>
        <button class="fas fa-hand-${Computer} fa-10x"></button>
        <p><strong>Computer chose</strong></p>
        `;  
      }
   modal.style.display = "block"
  }

// Clear Model

function clearModal(e) {
    if (e.target == modal) {
    modal.style.display = "none";
  }
}
options.forEach(option => option.addEventListener("click", play));
window.addEventListener("click", clearModal);