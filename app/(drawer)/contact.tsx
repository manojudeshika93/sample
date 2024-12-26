import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tw } from '@/config';

export default function ContactScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <ScrollView contentContainerStyle={tw`p-4`}>
        <Text style={tw`text-h1-semibold text-light-tint mb-4`}>{t('contact')}</Text>

        <View style={tw`mb-4`}>
          <Text style={tw`text-h2-bold mb-2`}>Nazih Group</Text>
          <Text style={tw`text-b1-regular text-dark-general mb-1`}>{t('headOffice')}</Text>
          <Text style={tw`text-b1-regular text-dark-general mb-1`}>
            18th Floor, Al Batha Tower, Buhaira Corniche, Sharjah, UAE.
          </Text>
        </View>

        <View style={tw`mb-4`}>
          <Text style={tw`text-b1-regular text-dark-general mb-1`}>{t('tollFree')}: 800-62944 (NAZIH)</Text>
          <Text style={tw`text-b1-regular text-dark-general mb-1`}>
            {t('workingHours')}: 8:00am - 6:00pm (Monday-Friday)
          </Text>
          <Text style={tw`text-b1-regular text-dark-general mb-1`}>{t('phone')}: +971 6 573 9392</Text>
          <Text style={tw`text-b1-regular text-dark-general mb-1`}>{t('fax')}: +971 6 573 6315</Text>
          <Text style={tw`text-b1-regular text-dark-general mb-1`}>{t('email')}: info@nazih.com</Text>
          <Text style={tw`text-b1-regular text-dark-general mb-1`}>{t('poBox')}: 62874</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
