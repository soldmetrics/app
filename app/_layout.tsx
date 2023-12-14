import { LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Slot } from 'expo-router';

import RootProviders from '@context/RootProviders';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import SplashScreenCustom from '@components/SplashScreenCustom';

SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

export default function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    'Inter Light': Inter_300Light,
    'Inter Regular': Inter_400Regular,
    'Inter Medium': Inter_500Medium,
    'Inter SemiBold': Inter_600SemiBold,
    'Inter Bold': Inter_700Bold,
  });

  if (!fontsLoaded && !!fontError) {
    return <SplashScreenCustom image={require('@assets/splash.png')} />;
  }

  return (
    <RootProviders>
      <Slot />
    </RootProviders>
  );
};
