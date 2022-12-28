import React, { useReducer } from "react";
import { ContextProvider, initialValue, reducer } from "./contextProvider";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "theme/MUITheme";

interface Props {
  children: React.ReactNode;
}

const Store = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <ContextProvider.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ContextProvider.Provider>
  );
};

export default Store;
