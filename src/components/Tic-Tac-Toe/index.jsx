import { useState } from "react";
import "./styles.css";
import Header from "../Header";
import Board from "./board";

export default function TicTactToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    if (nextMove === 0) {
      setHistory([Array(9).fill(null)]);
    }
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0 && move < 9) {
      description = "Go to move #" + move;
    } else if (move == 9) {
      description = "Game over";
    } else {
      description = "Restart";
    }

    return (
      <li key={move} className="tic-move">
        <button className="move-button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <Header title={"Tic Tac Toe Game"} />
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol className="tic-moves">{moves}</ol>
      </div>
    </div>
  );
}
