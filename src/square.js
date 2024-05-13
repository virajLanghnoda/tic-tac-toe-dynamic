function Square({ onClick, Value }) {
  let backgroundColor;

  if (Value === "X") {
    backgroundColor = "#76ABAE";
  } else if (Value === "O") {
    backgroundColor = "#B2A59B";
  } else {
    backgroundColor = "#C7C8CC"; 
  }

  return (
    <div
      className="myelement"
      style={{
        background: backgroundColor,
        margin: "0.5vh 0.5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        border: "2px solid #333",
        borderRadius: "5px",
      }}
      onClick={onClick}
    >
      {Value}
    </div>
  );
}

export default Square;
