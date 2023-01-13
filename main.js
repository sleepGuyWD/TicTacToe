class TicTacToe {
  constructor(gameBoxes, playerScore, cpuScore, currentPlayer) {
    this.gameBoxes = gameBoxes
    this.playerScore = playerScore
    this.cpuScore = cpuScore
    this.currentPlayer = currentPlayer
    this.boxArray = Array(9).fill(null)
    this.winningCombos = [
      
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,8]
  ]
    this.setGame()
  }
  setGame() {
    this.playerScore.innerText = 0
    this.cpuScore.innerText = 0
  }
  changePlayer() {
    if (this.currentPlayer == 'X') {
      this.currentPlayer = 'O'
      for (let element of this.gameBoxes) {
        if (element.innerText == "X") {
          element.style.color = "#d75ffc";
        }
      }
    } else {
      this.currentPlayer = 'X'
      for (let element of this.gameBoxes) {
        if (element.innerText == "O") {
          element.style.color = "#0460eb";
        }
      }
    }
  }
  getWinner() {
  //background-color: --glowtext-shadow

  }
  gameOver() {
  //if this.boxArray has element in each, then absolute justify GameOver window w/ restart
  }
  restart() {
    this.setGame()
    this.gameBoxes.forEach(el => el = "")
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
    if (!game.boxArray[id]){
    game.boxArray[id] = game.currentPlayer
    e.target.innerText = game.currentPlayer
    game.changePlayer()
  }
}

startGame()

