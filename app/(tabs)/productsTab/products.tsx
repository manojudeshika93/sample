import RNBottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomSheet, Button } from '@/components';
import { tw } from '@/config';
import { Portal } from '@gorhom/portal';


export default function ProductsScreen() {
  const { t } = useTranslation();
  const sheetRef = useRef<RNBottomSheet>(null);

  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <View style={tw`flex-1`}>
        <Text style={tw`text-h1-regular text-status-info`}>{t('products')}</Text>
      </View>
      <View style={tw`w-full pb-5 px-5`}>
        <Button title={t('openSheet')} onPress={() => sheetRef.current?.expand()} />
      </View>
      <Portal>
        <BottomSheet ref={sheetRef} snapPoints={['75%']} title={t('title')} handleSheetClose={() => sheetRef.current?.close()}><View></View></BottomSheet>
      </Portal>
    </SafeAreaView>
  );
}
