import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Màu xanh đặc trưng của Material-UI
    },
    secondary: {
      main: "#dc004e", // Màu đỏ hồng
    },
    background: {
      default: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
