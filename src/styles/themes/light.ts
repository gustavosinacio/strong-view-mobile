import { DefaultTheme } from "styled-components";
import sizing from "./sizing";

const DarkTheme: DefaultTheme = {
  title: "light",
  colors: {
    primary: "mediumseagreen",
    secondary: "seagreen",
    background: "#fff",
    text: {
      primary: "#222",
    },
  },
  statusBarStyle: "dark",
  sizing: {
    ...sizing,
  },
};

export default DarkTheme;
