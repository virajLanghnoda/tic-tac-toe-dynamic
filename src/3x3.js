import { useParams } from "react-router-dom";
import Square from "./square";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DropDown } from "./DropDown";

function Matrix3({ value }) {
  const  matrixsize  = value;
  const [grid, setGrid] = useState([]);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // const navigate = useNavigate();

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
    let diag1 = true,
      diag2 = true;
    for (let i = 0; i < size; i++) {
      let row = true,
        col = true;
      for (let j = 1; j < size; j++) {
        if (newGrid[i][j] !== newGrid[i][0] || newGrid[i][0] === null)
          row = false;
        if (newGrid[j][i] !== newGrid[0][i] || newGrid[0][i] === null)
          col = false;
      }
      if (row || col) return newGrid[i][row ? 0 : i];
      if (newGrid[i][i] !== newGrid[0][0] || newGrid[0][0] === null)
        diag1 = false;
      if (
        newGrid[i][size - 1 - i] !== newGrid[0][size - 1] ||
        newGrid[0][size - 1] === null
      )
        diag2 = false;
    }
    if (diag1) return newGrid[0][0];
    if (diag2) return newGrid[0][size - 1];
    return null;
  };

  const resetGame = () => {
    const length = parseInt(matrixsize, 10);
    if (!isNaN(length)) {
      const initialGrid = Array.from({ length }, () =>
        Array.from({ length }, () => null)
      );
      console.log("initialGrid", initialGrid);
      setGrid(initialGrid);
      setWinner(null);
      setIsXNext(true);
      setShowModal(false);
    }
  };

  const handleClick = (rowIndex, colIndex) => {
    if (winner || grid[rowIndex][colIndex]) return;
    const nextValue = isXNext ? "X" : "O";
    const newGrid = grid.map((row, rIdx) =>
      row.map((val, cIdx) => {
        if (rIdx === rowIndex && cIdx === colIndex) {
          return nextValue;
        }
        return val;
      })
    );
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
      {/* <p
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "20px", color:"#B3C8CF"}}
      >
        This is a {matrixsize}x{matrixsize} square matrix.{" "}
      </p> */}
      <p className="d-flex  align-items-center"
      style={{justifyContent:"center"}}>
        {/* <button type="button" className="btn btn-outline-secondary" style={{marginRight:"2vw"}}>
        <i class="fa-solid fa-backward"></i> &nbsp; Back
        </button> */}
        <div className="turntitle" style={{ color: "#D6DAC8", marginRight:"2vw", marginLeft:"2vw"}}>
        
          {winner ? `${winner} wins!` : `${isXNext ? "Turn of - X" : "Turn of - O"}`}
        </div>
        
        <button type="button" className="btn btn-outline-secondary" onClick={resetGame}>
          Reset &nbsp;
          <i class="fa-solid fa-rotate-right"></i>
        </button>
        
        
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      <div className="d-flex justify-content-center align-items-center">
      
      </div>
    </div>
  );
}

export default Matrix3;
