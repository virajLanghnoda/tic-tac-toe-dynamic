import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Matrix3 from "./3x3";
import "./App.css";
import { DropDown } from "./DropDown";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Prevent the window from being closed by setting the returnValue
      event.preventDefault();
      event.returnValue = '';
    };

    // Add event listener for beforeunload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function to remove the event listener
    return () => {
      console.log("Reloaded");
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DropDown />} />
      </Routes>
      <Routes>
        <Route exact path="/:matrixsize" element={<Matrix3 />} />
      </Routes>
    </Router>
  );
}

export default App;
