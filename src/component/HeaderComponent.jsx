import React, { useEffect } from "react";
import {
  Link,
  useLoaderData,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import { getTokenDuration } from "./utils/auth";

const Header = () => {
  const [searchParam] = useSearchParams();
  const isLogin = searchParam.get("mode") === "login";
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", methos: "post" });
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);
  return (
    <div>
      {token ? (
        <form action="/logout" method="post">
          <Link to="/logout">
            <button>Logout</button>
          </Link>
        </form>
      ) : (
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          <button>{isLogin ? "create a new user" : "login"}</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
