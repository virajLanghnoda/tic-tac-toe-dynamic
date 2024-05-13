import { useNavigate } from "react-router-dom";
import Matrix3 from "./3x3";
import { useState } from "react";

export const DropDown = () => {

  const [value, setValue] = useState(3);
  const handleChange = (event) => {
    console.log("Selected Value: ", event.target.value);

    if (event.target.value === "value1") {
      setValue(3);
    } else if (event.target.value === "value2") {
      setValue(4);
    } else if (event.target.value === "value3") {
      setValue(5);
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "5vh" }}
      >
        <select className="custom-dropdown" onChange={handleChange}>
          <option value="">Select Matrix Size</option>
          <option value="value1">3 X 3</option>
          <option value="value2">4 X 4</option>
          <option value="value3">5 X 5</option>
        </select>
      </div>
      <Matrix3 value={value} />
    </>
  );
};