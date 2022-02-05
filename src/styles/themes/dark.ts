import { DefaultTheme } from "styled-components";
import extraConfigs from "./extraConfigs";
import sizing from "./sizing";

const DarkTheme: DefaultTheme = {
  title: "dark",
  colors: {
    primary: "mediumseagreen",
    secondary: "seagreen",
    background: "#121212",
    text: {
      primary: "#fff",
    },
  },
  statusBarStyle: "light",
  ...sizing,
  ...extraConfigs,
};

export default DarkTheme;
