import React from 'react';
import { ActivityIndicator as RNLoadingIndicator, View } from 'react-native';

import { tw } from '@/config';
import { Colors } from '@/constants';

export interface LoadingIndicatorProps {
  color?: string;
  size?: 'small' | 'large';
}

export function LoadingIndicator({ color = Colors.status.success, size = 'large' }: Readonly<LoadingIndicatorProps>) {
  return (
    <View style={tw`w-full h-full items-center justify-center`}>
      <RNLoadingIndicator color={color} size={size} animating={true} />
    </View>
  );
}
