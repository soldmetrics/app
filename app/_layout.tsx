import { useEffect, useState } from 'react';
import { Stack } from 'expo-router/stack';
import { Slot } from 'expo-router';
import { LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { ToastProvider } from 'react-native-toast-notifications';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import SplashScreenCustom from '@components/SplashScreenCustom/index';
import { ThemeProvider } from '@context/ThemeProvider';
import { ThemeProviderStyled } from '@context/ThemeProviderStyled';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AuthProvider } from '@context/AuthProvider';

SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

export default function RootLayout() {
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
        // router.replace('onboarding');
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <ThemeProviderStyled>
          <ToastProvider
            placement="top"
            duration={4000}
            swipeEnabled
          >
            <BottomSheetModalProvider>
              {/* {!appIsReady && !fontsLoaded && !fontError ? (
                <SplashScreenCustom image={require('@assets/splash.png')} />
              ) : (
                <Stack
                  screenOptions={{
                    headerShown: false,
                  }}
                >
                  <Stack.Screen
                    name="(tabs)"
                  />
                </Stack>
              )} */}
              {/* <Stack
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen
                  name="(tabs)"
                />
              </Stack> */}

              <Slot />
            </BottomSheetModalProvider>
          </ToastProvider>
        </ThemeProviderStyled>
      </ThemeProvider>
    </AuthProvider>
  );
};
