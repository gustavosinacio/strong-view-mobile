import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import './src/config/firebase';

import usePersistedState from './src/utils/usePersistedState';

import { Router } from './src/routes';
import darkTheme from './src/styles/themes/dark';
import lightTheme from './src/styles/themes/light';

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', darkTheme);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme =>
      currentTheme.title === 'light' ? darkTheme : lightTheme,
    );
  }, [setTheme]);

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <StatusBar style={theme.statusBarStyle} />
      <Router />
    </ThemeProvider>
  );
}
