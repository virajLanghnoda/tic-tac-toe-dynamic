function Square({ onClick, Value }) { // Accept onClick prop
  return (
    <div 
    style={{
      width: "8vw", 
      height: "8vw", 
      background: "grey",
      margin: "0.5vh 0.5vh",
      display: "flex", // Set the display to flex
      justifyContent: "center", // Center content horizontally
      alignItems: "center", // Center content vertically
      cursor: "pointer",
      fontSize: "3vw", 
    }}
    onClick={onClick}
  >
    {Value}
  </div>
  
  );
}

export default Square;
