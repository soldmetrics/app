import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '@context/ThemeProvider';
import theme from '../theme';

export const ThemeProviderStyled = ({ children }: { children: JSX.Element }) => {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      {children}
    </ThemeProvider>
  );
};
