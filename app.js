let playerScore = 0
let CompScore = 0
let playerScoreBox = document.querySelector('.playerScore')
let compScoreBox = document.querySelector('.compScore')
playerScoreBox.value = playerScore
compScoreBox.value = CompScore
let rockButton = document.querySelector(".rock-button")
let paperButton = document.querySelector(".paper-button")
let scissorsButton = document.querySelector(".scissors-button")
let playButton = document.querySelector('.play-button')
let playerAnounce = document.querySelector(".player-selection-anouncement")
let playerSelection = document.createElement('h3')
let finalResults = document.querySelector('.final-results')
let userChoice

const rockSelection = () => {
    playerSelection.textContent = 'You have chosen Rock!'
    playerAnounce.appendChild(playerSelection)
    return userChoice = 'rock'

}
const paperSelection = () => {
    playerSelection.textContent = 'You have chosen Paper!'
    playerAnounce.appendChild(playerSelection)
    return userChoice = 'paper'
}
const scissorsSelection = () => {
    playerSelection.textContent = 'You have chosen Scissors!'
    playerAnounce.appendChild(playerSelection)
    return userChoice = 'scissors'
}



rockButton.addEventListener('click', rockSelection)
paperButton.addEventListener('click', paperSelection)
scissorsButton.addEventListener('click', scissorsSelection)




function playGame() {

    let computerChoice = Math.floor(Math.random() * (4 - 1)) + 1

    if (computerChoice === 1) {
        computerChoice = 'rock'
    } else if (computerChoice === 2) {
        computerChoice = 'paper'
    } else if (computerChoice === 3) {
        computerChoice = 'scissors'
    }

    let finalResultsText = document.createElement('h3')


    if (userChoice === computerChoice) {
        finalResultsText.textContent = `Your ${userChoice} draws with computers ${computerChoice}.`
        finalResults.appendChild(finalResultsText)
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        finalResultsText.textContent = `Your paper beats computers rock`;
        finalResults.appendChild(finalResultsText)
        playerScore += 1
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        finalResultsText.textContent = `Your scissors lose against computers rock`
        finalResults.appendChild(finalResultsText)
        CompScore += 1
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        finalResultsText.textContent = `Your scissors beats computers paper`;
        finalResults.appendChild(finalResultsText)
        playerScore += 1
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        finalResultsText.textContent = `Your rock lose against computers paper`
        finalResults.appendChild(finalResultsText)
        CompScore += 1
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        finalResultsText.textContent = `Your rock beats computers scissors`;
        finalResults.appendChild(finalResultsText)
        playerScore += 1
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        finalResultsText.textContent = `Your paper lose against computers scissors`
        finalResults.appendChild(finalResultsText)
        CompScore += 1
    }
    playerScoreBox.value = `${playerScore}`
    compScoreBox.value = `${CompScore}`

    if (playerScoreBox.value == 5) {
        alert('You reached 5 points, You win!')
        location.reload()
    }
    if (compScoreBox.value == 5) {
        alert('Computer reached 5 points, You lose!')
        location.reload()
    }
}

playButton.addEventListener('click', playGame)