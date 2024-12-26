import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import React from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tw } from '@/config';

export default function NotFoundScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <Stack.Screen options={{ title: t('notFound') }} />
    </SafeAreaView>
  );
}
