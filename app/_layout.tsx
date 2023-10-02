import { useEffect, useState } from 'react';
import { Stack } from 'expo-router/stack';
import { LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import SplashScreenCustom from '../src/components/SplashScreenCustom';
import { ThemeProvider } from '../src/context/ThemeProvider';
import { ThemeProviderStyled } from '../src/context/ThemeProviderStyled';

// import { AuthProvider } from '../src/context/AuthProvider';

SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

const RootLayout = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  let [fontsLoaded, fontError] = useFonts({
    'Inter Light': Inter_300Light,
    'Inter Regular': Inter_400Regular,
    'Inter Medium': Inter_500Medium,
    'Inter SemiBold': Inter_600SemiBold,
    'Inter Bold': Inter_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // verify user token
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return (
    <ThemeProvider>
      <ThemeProviderStyled>
        {!appIsReady && !fontsLoaded && !fontError ? (
          <SplashScreenCustom image={require('../assets/splash.png')} />
        ) : (
          <Stack
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="onboarding"
          />
        )}
      </ThemeProviderStyled>
    </ThemeProvider>
  );
};

export default RootLayout;

export const unstable_settings = {
  initialRouteName: "onboarding",
};
