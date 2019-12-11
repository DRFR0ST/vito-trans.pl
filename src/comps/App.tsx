import React, { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { Appbar } from "./common/";
import LitteraProvider from "react-littera";
import Routes from "./Routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#235dce"
    }
  }
});

const App: React.FC = () => {
  const [language, setLanguage] = useState("en_US");

  return (
    <ThemeProvider theme={theme}>
      <LitteraProvider language={language} setLanguage={setLanguage}>
        <Appbar />
        <Routes />
      </LitteraProvider>
    </ThemeProvider>
  );
};

export default App;
