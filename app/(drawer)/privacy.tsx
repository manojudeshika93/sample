import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tw } from '@/config';

export default function PrivacyScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <ScrollView contentContainerStyle={tw`p-4`}>
        <Text style={tw`text-h1-semibold text-light-tint mb-4`}>{t('privacy')}</Text>

        <Text style={tw`text-b1-regular text-dark-general mb-4`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
          dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </Text>

        <Text style={tw`text-b1-regular text-dark-general mb-4`}>
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
          lacinia arcu eget nulla.
        </Text>

        <Text style={tw`text-b1-regular text-dark-general mb-4`}>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
          ligula in libero. Sed dignissim lacinia nunc.
        </Text>

        <Text style={tw`text-b1-regular text-dark-general mb-4`}>
          Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
          tristique sem.
        </Text>

        <Text style={tw`text-b1-regular text-dark-general mb-4`}>
          Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
          Fusce ac turpis quis ligula lacinia aliquet.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
