const options = document.querySelectorAll(".choice");
const result = document.querySelector(".modal");

// Play game

const play = (e) => {
    const user = e.target.id;   
    const Computer = computerChoice();
    const winner = getWinner(user, Computer);
    showWinner(winner, Computer);
   console.log(user, Computer, winner)
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
const getWinner = (u, c) => {
    if(u === c ) {
        return "draw";
    } else if(u === "rock") {
        if(c === "paper") {
            return "computer";
        } else {
            return "user";
        }   
    }  else if(u === "user") {
        if(c === "scissors") {
            return "computer";
        } else {
            return "user";
        }
    } else if (u === "scissors") {
        if(c === "rock") {
            return "computer"
        } else {
            return "user"
        }
    }
} 

const showWinner = (winner, Computer) => {
    if(winner === "user") {
        // Show result on webpage
       result.innerHTML = `
       <h1 class="text-win">You killed it!</h1>
       <button class="fas fa-hand-${Computer} fa-10x"></button>
       <p>Computer chose <strong>${Computer}</strong></p>
       `;  
   } else if(winner === "computer") {
       // Show result on webpage
       result.innerHTML = `
       <h1 class="text-lose">You got killed!</h1>
       <button class="fas fa-hand-${Computer} fa-10x"></button>
       <p>Computer chose <strong>${Computer}</strong></p>
       `;  
   } else {
       // Show result on webpage
       result.innerHTML = `
       <h1>"Its A Draw"</h1>
       <button class="fas fa-hand-${Computer} fa-10x"></button>
       <p>Computer chose <strong>${Computer}</strong></p>
       `;  
     }
   }


options.forEach(option => option.addEventListener("click", play));