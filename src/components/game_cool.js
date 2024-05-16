import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import "../Style/main.css";
import "../Style/ss.css";
import { Modal, Space, List } from 'antd';



function Square({ value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
    
  );
}

function Board({ xIsNext, squares, onPlay, onWinner}) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X'; //<img src="xxx.png" alt="no image" style={{height: '70px',}}/>;
    } else {
      nextSquares[i] = 'O'; //<img src="ooo.png" alt="no image" style={{height: '70px',}}/>;
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Победитель: ' + winner  + (xIsNext ? ' Плюшкина Екатерина' : ' Пупкин Владилен');
    onWinner(xIsNext ? ' Плюшкина Екатерина' : ' Пупкин Владилен')
  } else {
    status = 'Ходит: ' + (xIsNext ? 'X Пупкин Владилен' : 'O Плюшкина Екатерина');
  }



  return (
    <>
      {/* <div className="status">{status}</div> */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

{/* новый дом копоненты */}
      <div style={{
        width: 350,
        height: 30,
        margin: '25px auto',
        // marginLFeft: 30,
        // marginTop: 30,
        // marginTop: 200,
        // backgroundColor: "#373745",
        backgroundColor: "#373745",
        borderRadius: "12px",
        alignItems: 'center',
        color: "red",
        // justifyContent: 'center',
      }}  class="parent">
        <div class="child" style={{
          color: "red",
          // justifyContent: 'center',
        }}>
          <span class= "bolno">{(status)}</span>
        </div>
      </div> 
    </>
  );
}


export default function Game_cool({onGameStart, onGameStop}) { //////////////////////////////////////////////////////////////////СТАТУС НЕ СТАТУС БЕБЕБЕБЕ
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [winnerName, setWinnerName] = useState(null)  
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  

  const onWinner = (winnerName) => {
    onGameStop()
    setWinnerName(winnerName);
    showModal();
  }

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setWinnerName(null);
    onGameStart();
    setOpen(false);
  };


  function handlePlay(nextSquares) {
    if(currentMove == 0){
      onGameStart();
    }
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

//   const openModal = () => {
//     setModalVisible(true); // Установка состояния для видимости модального окна
// }

  const moves = history.map((move, index) => {
    console.log(index);
    let description;
    if (index > 0) {
      description = `ход: ${index}`;
    } else {
      description = 'Новая игра';
    }
    
    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} onWinner={onWinner} />
      </div>
      {/* <div  className="game-info">
        <ol>{moves}</ol>
      </div> */}

      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}

      <Modal
        open={open}
        width="30%"
        title=""
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            {winnerName &&
              <p class="modal_text" style={{ fontSize: '25px' }}> {winnerName} победил!</p>
            }
            <Button class="btn_modal" style={{width: '100%', borderRadius: "15px",marginBottom:'10px',}} onClick={handleCancel}>Новая игра</Button> <br></br>
          </>
        )}
      >
        <div class='picture'>
          <img
            className="small"
            src="POBEDA.png"
            alt="no image"
            position="absolute"
          />
        </div>
      </Modal>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



// const Game_cool = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [currentPlayer, setCurrentPlayer] = useState('X');
//   const [winner, setWinner] = useState(null);

// const checkWinner = () => {
//             const winLines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
//             for (let i=0; i<winLines.length; i++) {
//             const [a, b, c] = winLines[i];
//             if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//                 setWinner(board[a]); //используем board[a] вместо currentPlayer
//                 console.log('есть победитель!')
//                 console.log(winLines)
//             }
//             }
//         };


//    const handleSquareClick = (index) => {
//     if (board[index] || winner) {
//       return;
//     }
//     const newBoard = board.slice();
//     newBoard[index] = currentPlayer;
//     setBoard(newBoard);
//     setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
//     checkWinner();
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setCurrentPlayer('X');
//     setWinner(null);
//   };

//   return (
//     <>
//         <div>
//             <div className="board" class="table-container">
//                 {[0, 1, 2].map(row => (
//                     <div key={row} className="board-row">
//                     {[0, 1, 2].map(col => {
//                         const index = row * 3 + col;
//                         return (
//                         <Button class="square" key={index} className="square" onClick={() => handleSquareClick(index)}>
//                             {board[index]}
//                         </Button>
//                         );
//                     })}
//                     </div>
//                 ))}

//                 <div style={{marginLeft: "400px", }}> 
//                     {winner && <p>{winner} wins!</p>}
//                     {!winner && board.every(square => square) && <p>It's a draw!</p>}
//                     <Button onClick={resetGame}>Reset</Button>
//                 </div>
//             </div>

//         </div>
//     </>
//   );
// };

// export default Game_cool;