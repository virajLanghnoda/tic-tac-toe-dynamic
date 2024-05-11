import { useNavigate } from "react-router-dom";

export const DropDown = () => {
  const navigate = useNavigate();
  const handleChange = (event) => {
    console.log("Selected Value:", event.target.value);
    // Navigate based on selection
    if (event.target.value === "value1") {
      navigate("/3");
    } else if (event.target.value === "value2") {
      navigate("/4"); 
    } else if (event.target.value === "value3") {
      navigate("/5"); 
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <select className="custom-dropdown" onChange={handleChange}>
        <option value="">Select Matrix Size</option>
        <option value="value1">3 X 3</option>
        <option value="value2">4 X 4</option>
        <option value="value3">5 X 5</option>
      </select>
    </div>
  );
};
