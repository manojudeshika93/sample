import React, { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { tw } from '@/config';

import { ButtonProps } from './Button.types';

export function Button({ onPress, title, disabled = false, fullWidth = true, isLink = false }: Readonly<ButtonProps>) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const backgroundColor = useMemo(() => {
    if (disabled) return 'bg-light-icon';
    if (isLink) return 'bg-general-transparent';
    if (isButtonClicked) return 'bg-light-tabIconDefault';
    return 'bg-light-general';
  }, [isButtonClicked, disabled]);

  const pressableStyle = tw.style(`items-center justify-center rounded-2xl h-15 ${backgroundColor}`, { 'w-full': fullWidth });

  return (
    <Pressable
      style={pressableStyle}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setIsButtonClicked(true)}
      onPressOut={() => setIsButtonClicked(false)}>
      <View style={tw`items-center justify-center`}>
        {title.length > 0 && <Text style={tw`text-h3-semibold ${isLink ? 'text-status-info underline' : 'text-light-general'}`}>{title}</Text>}
      </View>
    </Pressable>
  );
}
