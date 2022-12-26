import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./theme/MUITheme";

import MainLayout from "./components/Layout/MainLayout";
import "./app.css";

const App = () => {
  return (
    <ThemeProvider theme={false ? darkTheme : lightTheme}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
