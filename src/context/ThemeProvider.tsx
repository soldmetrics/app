import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Theme = 'dark' | 'light';

type ThemeType = 'dark' | 'light' | 'system';

type ThemeContextData = {
  currentTheme: Theme,
  typeTheme: ThemeType,
  handleChangeTypeTheme: (type: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [typeTheme, setTypeTheme] = useState<ThemeType>('system');
  const colorScheme = useColorScheme();

  useEffect(() => {
    (async () => {
      const typeThemeStorage = await AsyncStorage.getItem('typeThemeStorage');

      if (typeThemeStorage) {
        setTypeTheme(typeThemeStorage as ThemeType);
      } else {
        setTypeTheme('system');
      }
    })();
  }, [colorScheme]);

  const handleChangeTypeTheme = async (type: ThemeType): Promise<void> => {
    await AsyncStorage.setItem('typeThemeStorage', type);
    setTypeTheme(type);
  };

  return (
    <ThemeContext.Provider value={{
      typeTheme,
      currentTheme: (typeTheme === 'system' ? colorScheme : typeTheme) as Theme,
      handleChangeTypeTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
