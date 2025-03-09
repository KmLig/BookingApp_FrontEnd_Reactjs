import React from "react";
import { Outlet, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Outlet /> {/* Nơi render nội dung trang */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
