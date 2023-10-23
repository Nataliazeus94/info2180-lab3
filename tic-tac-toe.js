

const startCells = [
    "", "", "", "", "", "", "", "", ""
]

let go = "X"
let gameOver = false;


document.addEventListener("DOMContentLoaded", function () {
    const game = document.querySelector('#game')
    const status = document.getElementById("status")
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");
    const newgameButton = document.querySelector(".btn");
    squares.forEach((div) => {
        div.classList.add("square");
        div.addEventListener('mouseover', () => {
            div.classList.add('hover');
            div.classList.add('O');
        });
        div.addEventListener('mouseout', () => {
            div.classList.remove('hover');
            div.classList.remove('O');
        });
        
    });
            
    startCells.forEach((_cell, index) => {
        const cellElement = document.querySelector('.square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        board.append(cellElement) 
    })
        
    function addGo(e){
        const goDisplay = document.createElement('div')
        goDisplay.innerHTML = go;
        goDisplay.classList.add('square')
        goDisplay.classList.add(go)
        e.target.append(goDisplay)
        go = go === 'X' ? 'O' : 'X'
        e.target.removeEventListener('click', addGo)
        checkWin()
    }

    function checkWin() {
        const winningCombos = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
    
        for (const combo of winningCombos) {
          const [a, b, c] = combo;
          if (
            squares[a].textContent &&
            squares[a].textContent === squares[b].textContent &&
            squares[b].textContent === squares[c].textContent
            
          ) {
            
            gameOver = true;
            status.textContent = `Congratulations! ${go} is the Winner!`
            status.classList.add("you-won");
            disableBoard()
            return;
          }
        }
        
      }
    
    newgameButton.addEventListener("click", function() {
        location.reload();
    }); 
    
    function disableBoard() {
        for (let i = 0; i < 9; i++) {
          squares = board.querySelectorAll("div").children[i].onclick = null;
        }
    }

})
     





 


