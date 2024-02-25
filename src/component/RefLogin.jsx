import React from "react";

const RefLogin = () => {
  const EmailRef = React.useRef();
  const PasswordRef = React.useRef();
  const [invalidEmail, setInvalidEmail] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const InputEmail = EmailRef.current.value;
    const InputPassword = PasswordRef.current.value;
    const emailIsValid = InputEmail.includes("@");
    if (!emailIsValid) {
      setInvalidEmail(true);
      return;
    }
    console.log(InputEmail, InputPassword);
    EmailRef.current.value = "";
    PasswordRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" ref={EmailRef} />
        {invalidEmail && "please add @"}
        <input type="password" ref={PasswordRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RefLogin;
