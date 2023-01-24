import { ThemeProvider } from "styled-components";
import { theme } from "./Styled/Theme";
import { Grid } from "./Styled/GridOne";
import { GlobalStyles } from "./Styled/Global";
import Router from "./Components/App/Router/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
