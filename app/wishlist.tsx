import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tw } from '@/config';

export default function WishlistScreen() {
  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <Text>Wishlist Screen</Text>
    </SafeAreaView>
  );
}
