import { Redirect, useRootNavigationState, useSegments } from "expo-router";

import SplashScreenCustom from "@components/SplashScreenCustom";
import { useAuth } from "@context/AuthProvider";
import { useAppSelector } from "@store/hooks";
import { getAllState } from "@slices/globalSlice";

export default function HomePage() {
  const { appIsReady, fontsIsLoaded, fontsIsError } = useAppSelector(getAllState);
  const rootNavigationState = useRootNavigationState();
  const segments = useSegments();
  const { user } = useAuth();

  const inAuthGroup = segments[0] === '(auth)' || segments[0] === 'onboarding';

  if (!rootNavigationState?.key && !appIsReady && !!fontsIsError && fontsIsLoaded) {
    return <SplashScreenCustom image={require('@assets/splash.png')} />;
  }

  if (rootNavigationState?.key) {
    if (user && inAuthGroup) {
      if (user?.company?.integrationKey) {
        return <Redirect href="dashboard" />
      } else {
        return <Redirect href="registerIntegration" />
      }
    }

    if ((!user && !inAuthGroup) || (!user && segments[0] === undefined)) {
      return <Redirect href="onboarding" />
    }
  }

  return <SplashScreenCustom image={require('@assets/splash.png')} />;


  // useEffect(() => {
  //   const inAuthGroup = segments[0] === '(auth)' || segments[0] === undefined || segments[0] === 'onboarding';

  //   if (
  //     (!user && !inAuthGroup) || (!user && segments[0] === undefined)
  //   ) {
  //     router.replace('onboarding');
  //   } else if (user && inAuthGroup) {
  //     if (user?.company?.integrationKey) {
  //       router.replace('dashboard');
  //     } else {
  //       router.replace('registerIntegration');
  //     }
  //   }
  // }, [user, segments, appIsReady]);
};
