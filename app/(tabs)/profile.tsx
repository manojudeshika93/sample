import { Linking, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components';
import { tw } from '@/config';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <View style={tw`items-center mt-5`}>
        <Text style={tw`text-h1-regular text-status-info`}>Profile</Text>
      </View>
      <View style={tw`items-center mt-5`}>
        <Button isLink title='Nazih.com' onPress={() => Linking.openURL('https://nazih.ae/')} />
      </View>
    </SafeAreaView>
  );
}
