import { Linking, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Switch } from '@/components';
import { i18n, tw } from '@/config';
import { useAuthStore } from '@/store';
import { useTranslation } from 'react-i18next';

export default function ProfileScreen() {
  const { lng } = useAuthStore();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <View style={tw`flex-1 items-center w-full`}>
        <Text style={tw`text-h1-regular text-status-info`}>{t('profile')}</Text>
      </View>
      <View style={tw`w-full flex-row items-center justify-between mt-5 px-5`}>
        <Text style={tw`text-h3-regular text-light-text`}>{t('lngSelect')}</Text>
        <Switch
          value={lng === 'ar'}
          onValueChange={() => {
            if (lng === 'ar') {
              i18n.changeLanguage('en');
              useAuthStore.getState().setLng('en');
            } else {
              i18n.changeLanguage('ar');
              useAuthStore.getState().setLng('ar');
            }
          }}
        />
      </View>
      <View style={tw`items-center mt-5`}>
        <Button isLink title="Nazih.com" onPress={() => Linking.openURL('https://nazih.ae/')} />
      </View>
    </SafeAreaView>
  );
}
