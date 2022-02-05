import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "./src/utils/usePersistedState";

import { Router } from "./src/routes";
import darkTheme from "./src/styles/themes/dark";
import lightTheme from "./src/styles/themes/light";

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", darkTheme);

  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme.title === "light" ? darkTheme : lightTheme));
  }, []);

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <StatusBar style={theme.statusBarStyle} />
      <Router />
    </ThemeProvider>
  );
}
