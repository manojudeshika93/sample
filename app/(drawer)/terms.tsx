import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tw } from '@/config';

export default function TermsScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <Text style={tw`text-h1-regular text-status-info`}>{t('terms')}</Text>
    </SafeAreaView>
  );
}
