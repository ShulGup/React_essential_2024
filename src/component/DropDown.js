import React, { useState } from "react";
// import { Table_Display } from "./Table";
import Input_project from "./Input_project";

const DropdownSelect = ({ sendDataToInput }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    sendDataToInput(e.target.value);
  };

  return (
    <div>
      <label htmlFor="selectOption">Select an option:</label>
      <select
        id="selectOption"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {selectedOption && (
        <p>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
};

export default DropdownSelect;
