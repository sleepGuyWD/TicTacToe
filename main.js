class TicTacToe {
  constructor(gameBoxes, playerScore, cpuScore, currentPlayer) {
    this.gameBoxes = gameBoxes
    this.playerScore = playerScore
    this.cpuScore = cpuScore
    this.currentPlayer = currentPlayer
    this.boxArray = Array(9).fill(null)
    this.winningCombos = {
      
    }
    this.setGame()
  }
  setGame() {
    this.playerScore.innerText = 0
    this.cpuScore.innerText = 0
  }
  changePlayer() {
    
    if (this.currentPlayer == 'X') {
      this.currentPlayer = 'O'
    } else {
      this.currentPlayer = 'X'
    }
  }
  getWinner() {

  }
}

let gameBoxes = Array.from(document.getElementsByClassName('box'))
let playerScore = document.querySelector('.score.Player')
let cpuScore = document.querySelector('.score.Computer')
let currentPlayer = 'X'

let game = new TicTacToe (gameBoxes, playerScore, cpuScore, currentPlayer)

let startGame = () => {
  gameBoxes.forEach (box => box.addEventListener('click', placeSymbol))
}

function placeSymbol(e) {
  let id = e.target.id
  game.boxArray[id] = currentPlayer
  e.target.innerText = game.currentPlayer
  game.changePlayer()
}

startGame()

