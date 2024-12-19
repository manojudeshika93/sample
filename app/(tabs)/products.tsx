import { tw } from '@/config';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductsScreen() {
  return (
    <SafeAreaView>
      <Text style={tw`text-h1-regular text-status-info`}>Products Screen</Text>
    </SafeAreaView>
  );
}
