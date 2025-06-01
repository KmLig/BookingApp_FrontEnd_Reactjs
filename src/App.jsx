import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
