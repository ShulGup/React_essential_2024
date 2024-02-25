import React from "react";
import {
  NavLink,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";
import RefLogin from "./RefLogin";

const FormComponent = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitted";
  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const acquitionChannel = fd.getAll("acqution");
    const data = Object.fromEntries(fd.entries());
    data.acqution = acquitionChannel;
    console.log("data", data);
    //clear the input value
    event.target.reset();
  };
  const [searchParam] = useSearchParams();
  const isLogin = searchParam.get("mode") === "login";
  return (
    <div>
      <NavLink to="/auth?mode=login">{isLogin && <RefLogin />}</NavLink>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {data && data.message && <p>{data.message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" required />
        <input type="password" name="password" required minLength={6} />
        <button type="submit">Submit</button>
        <hr />
        <input type="checkbox" id="male" name="acqution" required />
        <label htmlFor="male">Male</label>
        <input type="checkbox" id="female" name="acqution" required />
        <label htmlFor="female">Female</label>
      </form>
      <p>{isLogin ? "login" : "create a new user"}</p>
      <button disabled={isSubmitting}>
        {isSubmitting ? "submitting..." : "Save"}
      </button>
    </div>
  );
};

export default FormComponent;
