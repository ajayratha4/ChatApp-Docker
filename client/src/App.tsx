import { useState } from "react";
import "./MuiClassNameSetup";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./theme/MUITheme";

import "./app.css";
import MainLayout from "components/Layout/MainLayout";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  console.log(setIsDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
