import React from 'react';
import { Switch as RNSwitch, SwitchProps } from 'react-native-switch';

import { tw } from '@/config';
import { Colors } from '@/constants';
import { Text, View } from 'react-native';

export function Switch({ disabled = false, value, onValueChange }: Readonly<SwitchProps>) {
  const toggleWidth = 52;
  const toggleHeight = 27;
  const circleSize = 22;
  const switchWidthMultiplier = toggleWidth / circleSize;

  return (
    <View style={tw`flex-row items-center justify-center gap-2 bg-light-general p-2 rounded-full`}>
      <Text style={tw`text-b1-semibold text-dark-general`}>EN</Text>
      <RNSwitch
        testID='switch'
        value={value}
        containerStyle={tw``}
        outerCircleStyle={tw`mx-0.5`}
        onValueChange={onValueChange}
        disabled={disabled}
        circleSize={circleSize}
        barHeight={toggleHeight}
        circleBorderWidth={0}
        backgroundActive={disabled ? Colors.light.icon : Colors.dark.icon}
        backgroundInactive={disabled ? Colors.light.icon : Colors.dark.icon}
        circleActiveColor={disabled ? Colors.dark.icon : Colors.light.tint}
        circleInActiveColor={disabled ? Colors.dark.icon : Colors.light.tint}
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={switchWidthMultiplier}
        switchRightPx={1.6}
        switchWidthMultiplier={switchWidthMultiplier}
      />
      <Text style={tw`text-b1-semibold text-dark-general`}>AR</Text>
    </View>
  );
}
