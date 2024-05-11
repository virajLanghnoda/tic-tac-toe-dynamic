import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Matrix3 from "./3x3";
import "./App.css";
import { DropDown } from "./DropDown";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      console.log("Reloaded");
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
    <h2 style={{marginTop:"10px"}} className="d-flex justify-content-center align-items-center"> <span style={{color:"#B2A59B"}}>Tic  &nbsp;</span>  <span style={{color:"#76ABAE"}}>Tac &nbsp;</span><span style={{color:"#B2A59B"}}>Toe  &nbsp;</span><span style={{color:"#76ABAE"}}>Game </span></h2>
    <DropDown />
    {/* <Matrix3 value={3}/> */}
    
    {/* <Router>
      <Routes>
        <Route exact path="/" element={<DropDown />} />
        <Route exact path="/:matrixsize" element={<Matrix3 />} />
      </Routes>
    </Router> */}
    </>
    
  );
}

export default App;
