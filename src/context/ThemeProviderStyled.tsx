import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from './ThemeProvider';
import theme from '../themes';

export const ThemeProviderStyled = ({ children }: { children: JSX.Element }) => {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      {children}
    </ThemeProvider>
  );
};
