class TicTacToe {
  constructor(gameBoxes, playerScore, cpuScore, currentPlayer, playerText) {
    this.gameBoxes = gameBoxes
    this.playerScore = playerScore
    this.cpuScore = cpuScore
    this.currentPlayer = currentPlayer
    this.playerText = playerText
    this.boxArray = Array(9).fill(null)
    this.winningCombos = 
    [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    this.setGame()
  }
  setGame() {
    this.playerScore.innerText = 'X'
    this.cpuScore.innerText = 'O'
    this.currentPlayer = 'X'
    this.boxArray = Array(9).fill(null)
    this.playerText.innerText = ''
    this.gameBoxes.forEach(box => {
      box.style.boxShadow = ''
    })
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
  restart() {
    this.setGame()
    this.gameBoxes.forEach(el => {
      el.innerText = ""
    })
    this.boxArray.forEach(el => {
      el = ""
    })
  }
  getWinner() {
    for (const condition of this.winningCombos) {
      let [a, b, c] = condition
      if (this.boxArray[a] && (this.boxArray[a] == this.boxArray[b] && this.boxArray[a] == this.boxArray[c])) {
        return [a, b, c]
      }
    }
    return false
  }
  gameOver() {
    //if this.boxArray has element in each, then absolute justify GameOver window w/ restart
    }
}

let gameBoxes = Array.from(document.getElementsByClassName('box'))
let playerScore = document.querySelector('.score.Player')
let cpuScore = document.querySelector('.score.Computer')
let currentPlayer = 'X'
let playerText = document.querySelector('#playerText')
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--glowtext-shadow')

let game = new TicTacToe (gameBoxes, playerScore, cpuScore, currentPlayer, playerText)

let startGame = () => {
  gameBoxes.forEach (box => box.addEventListener('click', placeSymbol))
}

function placeSymbol(e) {
  let id = e.target.id
    if (!game.boxArray[id]){
    game.boxArray[id] = game.currentPlayer
    e.target.innerText = game.currentPlayer

    game.changePlayer()

    if (game.getWinner() !== false) {
      game.changePlayer()
      playerText.innerText = `Player ${game.currentPlayer} has won!`
      let winningBlocks = game.getWinner()
      
      winningBlocks.map(box => game.gameBoxes[box].style.boxShadow=winnerIndicator)
      
      game.currentPlayer = ''
      return
    }
    
    console.log(game.currentPlayer)
  }
}

document.querySelector('#reset').addEventListener('click', reset)

function reset() {
  game.restart()
}

startGame()

