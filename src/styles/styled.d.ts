import { StatusBarStyle } from "expo-status-bar";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      text: {
        primary: string;
      };
    };
    sizing: {
      text: {
        extraSmall: string;
        small: string;
        normal: string;
        large: string;
        extraLarge: string;
      };
    };
    title: string;
    statusBarStyle: StatusBarStyle;
    toggleTheme(themeTitle: string): void;
  }
}
