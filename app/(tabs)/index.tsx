import { tw } from '@/config';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={tw`text-h1-regular text-status-info`}>Home Screen</Text>
    </SafeAreaView>
  );
}
