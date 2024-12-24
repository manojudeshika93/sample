import { Pressable } from 'react-native';

import { Colors } from '@/constants';

import { tw } from '@/config';
import { TabBarIcon } from './TabBarIcon';

type TabHeaderIconProps = {
  onPress: () => void;
  isMenu?: boolean;
};

export function TabHeaderIcon({ onPress, isMenu = false }: Readonly<TabHeaderIconProps>) {
  return (
    <Pressable style={tw`p-3`} onPress={onPress}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    >
      <TabBarIcon
        name={isMenu ? 'menu' : 'notifications'}
        color={Colors.dark.general}
      />
    </Pressable>
  );
}
