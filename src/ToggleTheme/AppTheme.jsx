import Page from "./Page";
import ThemeContextProvider from "./ThemeContextProvider";

function AppTheme() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default AppTheme;
