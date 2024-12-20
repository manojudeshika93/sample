import { tw } from '@/config';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-h1-regular text-status-info`}>Profile</Text>
    </SafeAreaView>
  );
}
