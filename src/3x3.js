import { useParams } from "react-router-dom";
import Square from "./square";
import Modal from "./Modal";
import { useState, useEffect } from "react";

function Matrix3() {
  const { matrixsize } = useParams();
  const [grid, setGrid] = useState([]);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    resetGame();
  }, [matrixsize]);

  useEffect(() => {
    if (winner) {
      setShowModal(true);
    }
  }, [winner]);

  const checkWinner = (newGrid) => {
    const size = newGrid.length;
    let diag1 = true, diag2 = true;
    for (let i = 0; i < size; i++) {
      let row = true, col = true;
      for (let j = 1; j < size; j++) {
        if (newGrid[i][j] !== newGrid[i][0] || newGrid[i][0] === null) row = false;
        if (newGrid[j][i] !== newGrid[0][i] || newGrid[0][i] === null) col = false;
      }
      if (row || col) return newGrid[i][row ? 0 : i];
      if (newGrid[i][i] !== newGrid[0][0] || newGrid[0][0] === null) diag1 = false;
      if (newGrid[i][size - 1 - i] !== newGrid[0][size - 1] || newGrid[0][size - 1] === null) diag2 = false;
    }
    if (diag1) return newGrid[0][0];
    if (diag2) return newGrid[0][size - 1];
    return null;
  };

  const resetGame = () => {
    const length = parseInt(matrixsize, 10);
    if (!isNaN(length)) {
      const initialGrid = Array.from({ length }, () => Array.from({ length }, () => null));
      setGrid(initialGrid);
      setWinner(null);
      setIsXNext(true);
      setShowModal(false);
    }
  };

  const handleClick = (rowIndex, colIndex) => {
    if (winner || grid[rowIndex][colIndex]) return;
    const nextValue = isXNext ? "X" : "O";
    const newGrid = grid.map((row, rIdx) => row.map((val, cIdx) => {
      if (rIdx === rowIndex && cIdx === colIndex) {
        return nextValue;
      }
      return val;
    }));
    setGrid(newGrid);
    const win = checkWinner(newGrid);
    if (win) {
      setWinner(win);
    } else {
      setIsXNext(!isXNext);
    }
  };

  return (
    <div>
      <p>This is a {matrixsize}x{matrixsize} square matrix. {winner ? `${winner} wins!` : `${isXNext ? "X's turn" : "O's turn"}`}</p>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((value, colIndex) => (
              <Square
                key={`${rowIndex}-${colIndex}`}
                Value={value}
                onClick={() => handleClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
      <Modal
        isOpen={showModal}
        winner={winner}
        onRestart={resetGame}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default Matrix3;
