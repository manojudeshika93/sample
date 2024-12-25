import { Pressable } from 'react-native';

import { Colors } from '@/constants';

import { tw } from '@/config';
import { TabBarIcon } from './TabBarIcon';

type TabHeaderIconProps = {
  onPress: () => void;
};

export function TabHeaderIcon({ onPress }: Readonly<TabHeaderIconProps>) {
  return (
    <Pressable style={tw`p-3`} onPress={onPress}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    >
      <TabBarIcon
        name="notifications"
        color={Colors.dark.general}
        style={tw`mb-0`}
        size={21}
      />
    </Pressable>
  );
}
