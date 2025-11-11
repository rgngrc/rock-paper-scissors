/*
Initialize human score and computer score to zero
Create computer function randomly chooses 1, 2 or 3
1, 2, 3 corresponds to rock, paper, scossors
Create human function for user input
Ask prompt for user's choice
Get the input and pass into the function
The two results will be checked if who won
If they win, increment the score
They win by comparing numbers that corresponds with R,P,S
If same numbers, tie
If 1 && 2 = 2 wins
If 2 && 3 = 3 wins
If 3 && 1 = 1 wins
1 = rock
2 = paper
3 = scissors
*/

function getComputerChoice(){
    let random = Math.random() * (4 - 1) + 1
    return Math.floor(random)
}

function askUserInput(){
    return input = prompt("Input either \"rock\", \"paper\" or \"scissors\": ")
}

function getHumanChoice(input){
    if (input.toLowerCase() == "rock"){
        return 1
    }else if (input.toLowerCase() == "paper"){
        return 2
    }else if (input.toLowerCase() == "scissors"){
        return 3
    }
}

function playGame(){
    let humanScore = 0
    let computerScore = 0
    let computerSelection = getComputerChoice()
    let humanSelection = getHumanChoice(askUserInput())
    
    function playRound(humanChoice, computerChoice){
        if(humanChoice == computerChoice){
            console.log("Tied! Play again")
        }else if(humanChoice == 1 && computerChoice == 2){
            console.log("You lost! Paper beats rock")
            computerScore++
        }else if(humanChoice == 2 && computerChoice == 3){
            console.log("You lost! Scissors beats paper")
            computerScore++
        }else if(humanChoice == 3 && computerChoice == 1){
            console.log("You lost! Rock beats scissors")
            computerScore++
        }else if(humanChoice == 2 && computerChoice == 1){
            console.log("You won! Paper beats rock")
            humanScore++
        }else if(humanChoice == 3 && computerChoice == 2){
            console.log("You won! Scissors beats paper")
            humanScore++
        }else if(humanChoice == 1 && computerChoice == 3){
            console.log("You won! Rock beats scissors")
            humanScore++
        }
    }
    
    console.log("Round 1")
    playRound(humanSelection, computerSelection)
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)

    humanSelection = getHumanChoice(askUserInput())

    console.log("Round 2")
    playRound(humanSelection, computerSelection)
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)

    humanSelection = getHumanChoice(askUserInput())

    console.log("Round 3")
    playRound(humanSelection, computerSelection)
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)

    humanSelection = getHumanChoice(askUserInput())

    console.log("Round 4")
    playRound(humanSelection, computerSelection)
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)

    humanSelection = getHumanChoice(askUserInput())

    console.log("Round 5")
    playRound(humanSelection, computerSelection)
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
}

playGame()