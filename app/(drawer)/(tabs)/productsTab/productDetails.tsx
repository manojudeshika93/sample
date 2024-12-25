import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tw } from '@/config';

export default function ProductDetailsScreen() {
  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <Text style={tw`text-h1-regular text-status-info`}>Product Details</Text>
    </SafeAreaView>
  );
}
