import { LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Slot } from 'expo-router';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { useCallback } from 'react';
import styled from 'styled-components/native';

import RootProviders from '@context/RootProviders';

SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    'Inter Light': Inter_300Light,
    'Inter Regular': Inter_400Regular,
    'Inter Medium': Inter_500Medium,
    'Inter SemiBold': Inter_600SemiBold,
    'Inter Bold': Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container onLayout={onLayoutRootView}>
      <RootProviders>
        <Slot />
      </RootProviders>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;
