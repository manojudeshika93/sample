import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import React from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotFoundScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: t('terms') }} />
    </SafeAreaView>
  );
}

