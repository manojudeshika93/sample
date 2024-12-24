import React, { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { tw } from '@/config';

import { ButtonProps } from './Button.types';

export function Button({ onPress, title, disabled = false, fullWidth = true, isLink = false }: Readonly<ButtonProps>) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const baseStyle = useMemo(() => {
    if (disabled) return 'bg-light-icon';
    if (isLink) return 'bg-general-transparent';
    if (isButtonClicked) return 'bg-dark-tabIconDefault border border-light-general';
    return 'bg-light-general border border-light-icon';
  }, [isButtonClicked, disabled, isLink]);

  const pressableStyle = tw.style(`items-center justify-center rounded-2xl h-15 ${baseStyle}`, { 'w-full': fullWidth });

  return (
    <Pressable
      style={pressableStyle}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setIsButtonClicked(true)}
      onPressOut={() => setIsButtonClicked(false)}>
      <View style={tw`items-center justify-center`}>
        {title.length > 0 && <Text style={tw`text-h3-semibold ${isLink ? 'text-status-info underline' : 'text-dark-general'}`}>{title}</Text>}
      </View>
    </Pressable>
  );
}
