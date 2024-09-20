import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#0070f3",
    secondary: "#f8312f",
    tertiary: "#483474",
    quaternary: "#212121",
    gray: {
      100: "#f8f9fa",
      200: "#e9ecef",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#6c757d",
      700: "#495057",
      800: "#343a40",
      900: "#212529",
    },
  },
  fonts: {
    heading: "'Source Sans Pro', 'Open Sans', 'Poppins', 'Roboto', sans-serif",
    body: "'Source Sans Pro', 'Open Sans', 'Poppins', 'Roboto', sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  breakpoints: {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    xxl: "1536px",
  },
});
