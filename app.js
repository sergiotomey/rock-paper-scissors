
function playGame(){
    
    let userChoice = prompt("Please choose Rock, Paper, or Scissors").toLowerCase()

    if(userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors'){
        return 'please type rock, paper or scissors and try again'
    }

    let computerChoice = Math.floor(Math.random() * (4-1)) + 1

    if(computerChoice === 1){
        computerChoice = 'rock'
    }else if(computerChoice === 2){
        computerChoice = 'paper'
    }else if(computerChoice === 3){
        computerChoice = 'scissors'
    }

    if(userChoice === computerChoice){
        return `Your ${userChoice} draws with computers ${computerChoice}.`
    }else if(computerChoice === 'rock' && userChoice === 'paper'){
        return `Your paper beats computers rock`;
    }else if(computerChoice === 'rock' && userChoice === 'scissors'){
        return `Your scissors lose against computers rock`
    }else if(computerChoice === 'paper' && userChoice === 'scissors'){
        return `Your scissors beats computers paper`;
    }else if(computerChoice === 'paper' && userChoice === 'rock'){
        return `Your rock lose against computers paper`
    }else if(computerChoice === 'scissors' && userChoice === 'rock'){
        return `Your rock beats computers scissors`;
    }else if(computerChoice === 'scissors' && userChoice === 'paper'){
        return `Your paper lose against computers scissors`
    }
}