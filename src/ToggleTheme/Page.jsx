import React from "react";

import Header from "./Header";
import { ThemeContext } from "./ThemeContextProvider";
import "./index.css";

export default function Page() {
  const themeCtx = React.useContext(ThemeContext);

  return (
    <div id="app" className={themeCtx.theme}>
      <Header />
      <h1>Header</h1>
      <article>
        <h2>React Course-2</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
