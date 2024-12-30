import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { tw } from '@/config';

export function ListEmpty() {
  const { t } = useTranslation();

  return (
    <View style={tw`w-full h-45 items-center justify-center`}>
      <Text style={tw`text-b1-semibold text-dark-general`}>{t('noItems')}</Text>
    </View>
  );
}
