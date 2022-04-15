// creating variables for the HTML elements
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 5
let timerId = null

// creating a function to have the mole appear in a random square
function randomSquare() {
    // mapping thorugh the squares array to remove the mole from all squares
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    // getting a random number between 0 and 8 to assign the mole to a random square
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

// mole moves areound every 500ms
function moveMole() {
    
    timerId = setInterval(randomSquare, 900)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game over')
    }
}

let countDownTimerId = setInterval(countDown, 1000)