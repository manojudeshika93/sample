import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tw } from '@/config';

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-h1-regular text-status-info`}>Notifications</Text>
    </SafeAreaView>
  );
}
