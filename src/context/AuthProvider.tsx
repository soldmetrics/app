import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSegments, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '@config/api';
import { useAppDispatch } from '@store/hooks';
import { setAppIsReady } from '@slices/globalSlice';

type AuthType = {
  user: any;
  setUser: (user: any) => void;
  resetPassword: any;
  setResetPassword: (info: any) => void;
}

const AuthContext = createContext<AuthType>({
  user: null,
  setUser: () => {},
  resetPassword: null,
  setResetPassword: () => {},
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(user: any, isReady: boolean) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)' || segments[0] === 'onboarding';

    if (
      !user &&
      !inAuthGroup &&
      isReady
    ) {
      router.replace('onboarding');
    } else if (user && inAuthGroup) {
      if (user?.company?.integrationKey) {
        router.replace('dashboard');
      } else {
        router.replace('registerIntegration');
      }
    }
  }, [user, segments]);
}

export function AuthProvider({ children }: { children: React.ReactNode | React.ReactNode[] }): JSX.Element {
  const [user, setUser] = useState<any | null>(null);
  const [resetPassword, setResetPassword] = useState<any | null>(null);
  const [isReady, setIsReady] = useState(false);
  const dispath = useAppDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUser = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        // const refreshToken = await AsyncStorage.getItem('refreshToken');

        // if (accessToken && refreshToken) {
        if (accessToken) {
          api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

          // TODO: Validar access token
          const result = await api.get('/auth/me', {
            signal: abortController.signal,
          });

          console.log(result?.data);

          if (result?.data) {
            setUser(result?.data);
          }
        }

        setIsReady(true);
      } catch (error: unknown) {
        if (abortController.signal.aborted) {
          console.error('Data fetching cancelled');
        } else {
          console.error('🚀 ~ file: AuthProvider.tsx:72 ~ error:', error);
        }
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const loadAsync = () => {
      dispath(setAppIsReady(isReady));
      // dispath(setFontsIsLoaded(fontsLoaded));
      // dispath(setFontsIsError(!!fontError));
    };

    loadAsync();
  }, [isReady]);

  useProtectedRoute(user, isReady);

  const authContext: AuthType = {
    user,
    setUser,
    resetPassword,
    setResetPassword,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
};
