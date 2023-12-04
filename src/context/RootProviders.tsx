import { ReactNode } from "react";
import { ToastProvider } from 'react-native-toast-notifications';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Provider as ReduxProvider } from 'react-redux';

import { ThemeProvider } from '@context/ThemeProvider';
import { ThemeProviderStyled } from '@context/ThemeProviderStyled';
import { AuthProvider } from '@context/AuthProvider';
import store from '@store/index';
import NotificationProvider from "./NotificationProvider";

type RootProvidersProps = {
  children: ReactNode | ReactNode[];
};

export default function RootProviders({ children }: RootProvidersProps) {
  return (
    <ThemeProvider>
      <ThemeProviderStyled>
        <ReduxProvider store={store}>
          <AuthProvider>
            <NotificationProvider />
            <ToastProvider
              placement="top"
              duration={4000}
              swipeEnabled
            >
              <BottomSheetModalProvider>
                {children}
              </BottomSheetModalProvider>
            </ToastProvider>
          </AuthProvider>
        </ReduxProvider>
      </ThemeProviderStyled>
    </ThemeProvider>
  );
};
