import React, { useState } from 'react'
import Square from './Square';
const Board =({squares, onClick}) => {
  // const[squares, setSquares] = useState(Array(9).fill(null));
  // const[isNext, setNext] = useState(false);
  // // const[isWinner, setWinner] = useState(false);
  // const status = 'Next player: '+ (isNext ? 'X' : 'O');

  // const handleClick =(i)=>{
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   setSquares(prevState => {
  //     const newArray = [...prevState];
  //     newArray[i] = isNext? 'X' : 'O';
  //     return newArray;
  //   });
    
  //   setNext(!isNext)    
  // }
  
  // function calculateWinner(squares) {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // }

  // status[0] = 'X'
  console.log(squares);
  return (
    <div>
        {/* {calculateWinner(squares) != null? <div className="status">El ganador es  {calculateWinner(squares)}</div> 
        : 
        <div className="status">{status}</div>
        } */}
        <div className="board-row">
            <Square value={squares[0]} onClick={ ()=>onClick(0) } />  
            <Square value={squares[1]} onClick={ ()=>onClick(1) }/>
            <Square value={squares[2]} onClick={ ()=>onClick(2) }/>
        </div>
        <div className="board-row">
            <Square value={squares[3]} onClick={ ()=>onClick(3) } />   
            <Square value={squares[4]} onClick={ ()=>onClick(4) }/>
            <Square value={squares[5]} onClick={ ()=>onClick(5) }/>
        </div>
        <div className="board-row">
            <Square value={squares[6]} onClick={ ()=>onClick(6) }/>
            <Square value={squares[7]} onClick={ ()=>onClick(7) }/>
            <Square value={squares[8]} onClick={ ()=>onClick(8) }/>
        </div>
      </div>
  )
}

export default Board;
