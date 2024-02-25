import React from "react";
import { TableDisplay } from "./Table";
import DropdownSelect from "./DropDown";

const Input_project = () => {
  const initialState = {
    firstname: "Shulbhi",
    age: "25",
    amount: "100",
  };
  const [data, setData] = React.useState([initialState]);
  const [displayOption, setDisplayOption] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the state with the form input values
    setData((prevData) => [
      ...prevData,
      {
        firstname: "",
        age: "",
        amount: "",
      },
    ]);

    // Reset the form values to the initial state
    e.target.reset();
  };

  const handleReset = () => {
    setData([initialState]);
  };

  const handleChange = (input, value) => {
    setData((prevData) => {
      const lastIndex = prevData.length - 1;
      return prevData.map((item, index) =>
        index === lastIndex
          ? {
              ...item,
              [input]: value,
            }
          : item
      );
    });
  };

  const displayData = (data) => {
    setDisplayOption(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={data[data.length - 1].firstname}
          onChange={(e) => handleChange("firstname", e.target.value)}
        />
        <input
          type="text"
          name="age"
          value={data[data.length - 1].age}
          onChange={(e) => handleChange("age", e.target.value)}
        />
        <input
          type="text"
          name="amount"
          value={data[data.length - 1].amount}
          onChange={(e) => handleChange("amount", e.target.value)}
        />
        <button onClick={handleReset}>Reset</button>
        <button type="submit">Submit</button>
      </form>
      <TableDisplay data={data} />
      <p>{displayOption}</p>
      <hr />
      <h1>Call back function(child to parent)</h1>
      <DropdownSelect sendDataToInput={displayData} />
    </div>
  );
};

export default Input_project;
