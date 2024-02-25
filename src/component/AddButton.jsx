import React from "react";
import { ErrorComponent } from "./ErrorComponent";

export const AddButton = ({ OnButtonAdd }) => {
  const [userName, setUserName] = React.useState("");
  const [userAge, setUserAge] = React.useState("");
  const [error, setError] = React.useState({ title: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Input should not be blank",
      });
      return;
    } else if (+userAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age should be greater than zero",
      });
      return;
    } else {
      OnButtonAdd(userName, userAge);
      setError(null);
    }
    setUserName("");
    setUserAge("");
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setUserAge(event.target.value);
  };
  const displayError = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorComponent
          title={error.title}
          message={error.message}
          onConfirm={displayError}
        />
      )}
      <form onSubmit={handleSubmit}>
        <input type="name" value={userName} onChange={handleNameChange} />
        <input type="number" value={userAge} onChange={handleAgeChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
