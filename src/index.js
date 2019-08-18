import Hangman from './hangman'
import getPuzzle from './requests'

let game

const render = () => {
    const puzzleElement = document.querySelector('#puzzle')
    const guessesElement = document.querySelector('#guesses-left')
    
    puzzleElement.innerHTML = ''
    guessesElement.textContent = game.statusMessage

    game.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

window.addEventListener('keypress', (e) => {
    const guess = e.key
    game.makeGuess(guess)
    render()
})

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(`You are in ${country.name}!`)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(`You are in ${country.name}!`)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })
