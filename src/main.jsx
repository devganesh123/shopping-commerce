import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    background: {
      default: "#faa74d",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "#f7f7f7",
    },
    secondary: {
      main: "#faa74d",
      light: "#e0f7fd",
      dark: "#80ccdc",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.8rem",
    },
    h3: {
      fontSize: "1.6rem",
    },
    h4: {
      fontSize: "1.4rem",
    },
    h5: {
      fontSize: "1.2rem",
    },
    h6: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: ".95rem",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
