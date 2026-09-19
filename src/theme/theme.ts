import { createTheme } from "@mui/material/styles";

// Create a custom theme for the application

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#010101",
    },
    secondary: {
      main: "#a0d095",
    },
    text: {
      primary: "#000000",
      secondary: "#868585",
    },
  },
});

export default theme;
