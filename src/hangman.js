class Hangman { 
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    get puzzle() {
        return this.word.map(letter => {
            return this.guessedLetters.includes(letter) || letter === ' ' ? letter : '*'
        }).join('')
    }

    makeGuess(guess) {
        if (this.status !== 'playing') {
            return
        }
    
        guess = guess.toLowerCase()
        if (this.guessedLetters.includes(guess)) {
            return
        }
    
        this.guessedLetters.push(guess)
    
        if (!this.word.includes(guess)) {
            this.remainingGuesses--
        }
    
        this.calculateStatus()
    }

    calculateStatus() {
        if (this.puzzle.includes('*')) {
            this.status = this.remainingGuesses > 0 ? 'playing' : 'failed'
        } else {
            this.status = 'finished'
        }
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        }
    
        return 'Great work! You guessed the word.'
    }
}

export { Hangman as default }