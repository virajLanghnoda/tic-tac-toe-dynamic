function Square({ onClick, Value }) {
  let backgroundColor;
  
  if (Value === 'X') {
    backgroundColor = "#76ABAE"; // Set background color to white if X or O is selected
  } 
  else if(Value === 'O'){
    backgroundColor = 	"#B2A59B"; 
  }else {
    backgroundColor = '#C7C8CC'; // Set background color to grey if no value is selected
  }

  return (
    <div className="myelement"
    style={{
      background: backgroundColor,
      margin: "0.5vh 0.5vh",
      display: "flex", 
      justifyContent: "center",
      alignItems: "center", 
      cursor: "pointer",
      // fontSize: "3vw", 
      border:"2px solid #333",
      borderRadius:"5px"
    }}
    onClick={onClick}
  >
    {Value}
  </div>
  );
}

export default Square;
