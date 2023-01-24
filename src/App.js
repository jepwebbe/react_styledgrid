import { template } from "./Styled/Theme/Template";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styled/Theme/Theme";
import { Grid } from "./Styled/Grid";
import { GlobalStyles } from "./Styled/Global";
import Content from "./Components/Content";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        gtc={template.desktop.columns}
        gtcM={template.mobile.columns}
        gtcT={template.tablet.columns}
        gtr={template.desktop.rows}
        gtrM={template.mobile.rows}
        gtrT={template.tablet.rows}
        gta={template.desktop.area}
        gtaM={template.mobile.area}
        gtaT={template.tablet.area}
      ><Content /></Grid>
      
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
