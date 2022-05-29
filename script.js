

let main = document.querySelector('main')
main.addEventListener('click', placeIcon)

document.querySelector('#resetBtn').addEventListener('click', reset)

class Player{
  constructor(name, symbol, turn){
    this._name = name
    this._symbol = symbol
    this.turn = turn
  }
  get name(){
    return this._name
  }
  get symbol(){
    return this._symbol
  }
}

class Human extends Player{
  constructor(name, gamesWon, gamesPlayed, gamesTied){
    super(name)
    this._gamesWon = gamesWon
    this._gamesPlayed = gamesPlayed
    this._gamesTied = gamesWon
  }
  get gamesWon(){
    return this._gamesWon
  }
  get gamesTied(){
    return this._gamesTied
  }
  get gamesPlayed(){
    return this._gamesPlayed
  }
}

let player1 = new Player('Player 1', 'X', true)
let player2 = new Player('Player 2', 'O', false)

let turns = 0

//store player icons in an array
let board = new Array(9)

//game state
let gameOver = false

//place icon on click
function placeIcon(event) {
    if ((player1.turn) && (event.target.innerText === '') && gameOver === false){
      board[event.target.id] = player1.symbol
      event.target.innerText = board[event.target.id]
      player1.turn = false
      player2.turn = true
    } else if (player2.turn && event.target.innerText === '' && gameOver === false) {
      board[event.target.id] = player2.symbol
      event.target.innerText = board[event.target.id]
      player1.turn = true
      player2.turn = false
    }
  checkWin()
}


let winConditions = [[0,1,2],
                     [3,4,5], 
                     [6,7,8], 
                     [0,3,6], 
                     [1,4,7],
                     [2,5,8],
                     [0,4,8],
                     [2,4,6]]


function checkWin(){
  if(!gameOver) turns ++

  document.querySelector('#turnCount').innerText = `Turn Count: ${turns}`
  
  winConditions.forEach(condition => {
      if(board[condition[0]] === player1.symbol && board[condition[1]] === player1.symbol && board[condition[2]] === player1.symbol) {
        gameOver = true
      }
      else if(board[condition[0]] === player2.symbol && board[condition[1]] === player2.symbol && board[condition[2]] === player2.symbol){
        gameOver = true
      }

  })
}

function reset(){
  board = new Array(9)
  turns = 0
  gameOver = false
  document.querySelector('#turnCount').innerText = `Turn Count: 0`
  document.querySelectorAll('section').forEach(section => section.innerText = '')
}
   
    






