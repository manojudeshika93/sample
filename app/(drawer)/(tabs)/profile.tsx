import { useTranslation } from 'react-i18next';
import { Linking, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components';
import { tw } from '@/config';

export default function ProfileScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <View style={tw`flex-1 items-center w-full`}>
        <Text style={tw`text-h1-regular text-status-info`}>{t('profile')}</Text>
      </View>
      <View style={tw`items-center mt-5`}>
        <Button isLink title="Nazih.com" onPress={() => Linking.openURL('https://nazih.ae/')} />
      </View>
    </SafeAreaView>
  );
}
