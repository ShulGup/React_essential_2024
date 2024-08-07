import React from "react";

import { ThemeContext } from "./ThemeContextProvider";

export default function Header() {
  const themeCtx = React.useContext(ThemeContext);

  return (
    <header>
      <h1>Demo Website Page</h1>
      <button onClick={themeCtx.toggleTheme}>Toggle</button>
    </header>
  );
}
