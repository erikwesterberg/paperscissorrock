const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");


function Game(userChoice){
console.log("fucker" + userChoice)
}

const userMove = () => {
    paper.addEventListener("click", function() {
        Game("Paper")
    })
    rock.addEventListener("click", function() {
        Game("Rock")
    })
    scissors.addEventListener("click", function() {
        Game("Scissors")
    })
}

userMove()












