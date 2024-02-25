import React from "react";

const DummyTest = () => {
  const [clickedText, setClickedText] = React.useState(false);
  const changeTheData = () => {
    setClickedText(true);
  };
  return (
    <>
      {clickedText && (
        <p>
          Content not displayed you have to clicked button to display the
          content
        </p>
      )}
      {!clickedText && <h1>!clicked</h1>}
      <button onClicked={changeTheData}>Clicked</button>
    </>
  );
};

export default DummyTest;
