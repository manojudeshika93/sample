import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PortalProvider } from '@gorhom/portal';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'intl-pluralrules';
import { useEffect } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ReanimatedLogLevel, configureReanimatedLogger } from 'react-native-reanimated';

import { ToastHost } from '@/components';
import { i18n, tw } from '@/config';
import { Colors } from '@/constants';

SplashScreen.preventAutoHideAsync();
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: true,
});
export default function RootLayout() {
  SplashScreen.hideAsync();

  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Inter_400Regular: require('../assets/fonts/Inter_400Regular.ttf'),
    Inter_500Medium: require('../assets/fonts/Inter_500Medium.ttf'),
    Inter_600SemiBold: require('../assets/fonts/Inter_600SemiBold.ttf'),
    Inter_700Bold: require('../assets/fonts/Inter_700Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <PortalProvider>
        <BottomSheetModalProvider>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <ToastHost />
              <Stack>
                <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
                <Stack.Screen
                  name="notifications"
                  options={{
                    headerBackButtonDisplayMode: 'minimal',
                    headerTitle: t('notifications'),
                    headerTintColor: Colors.dark.general,
                  }}
                />
                <Stack.Screen
                  name="+not-found"
                  options={{
                    headerBackButtonDisplayMode: 'minimal',
                    headerTitle: t('notFound'),
                    headerTintColor: Colors.dark.general,
                  }}
                />
              </Stack>
              <StatusBar style="auto" />
            </ThemeProvider>
          </I18nextProvider>
        </BottomSheetModalProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
