import Square from "./square";
import PropTypes from "prop-types";

import "./styles.css";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isDraw = drawCheck(squares);
  let status;
  if (winner) {
    status = winner + " is a winner ";
  } else if (isDraw) {
    status = "It is a draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
      <div className="status">{status}</div>
    </>
  );
}

Board.propTypes = {
  xIsNext: PropTypes.bool,
  squares: PropTypes.array,
  onPlay: PropTypes.func,
};

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
function drawCheck(squares) {
  if (squares.every((x) => x !== null)) {
    return true;
  }
}
