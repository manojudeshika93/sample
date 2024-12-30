import { Ionicons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import { tw } from '@/config';
import { Colors } from '@/constants';

import { TabBarIcon } from './TabBarIcon';

type TabHeaderRightProps = {
  onWishlistPress: () => void;
  onCartPress: () => void;
  onNotifyPress: () => void;
};

type IconsData = {
  iconName: keyof typeof Ionicons.glyphMap;
  action: () => void;
  iconStatus: boolean;
};

export function TabHeaderRight({ onWishlistPress, onCartPress, onNotifyPress }: Readonly<TabHeaderRightProps>) {
  const DATA: IconsData[] = [
    {
      iconName: 'heart',
      action: onWishlistPress,
      iconStatus: false,
    },
    {
      iconName: 'cart',
      action: onCartPress,
      iconStatus: true,
    },
    {
      iconName: 'notifications',
      action: onNotifyPress,
      iconStatus: true,
    },
  ];

  return (
    <View style={tw`flex-row`}>
      {DATA.map((item, index) => {
        return (
          <View key={item.iconName + index}>
            {item.iconStatus && <View style={tw`w-2 h-2 bg-light-tint rounded-full absolute top-3 right-2 z-100`} />}
            <Pressable style={tw`px-2 py-3`} onPress={item.action}>
              <TabBarIcon name={item.iconName} color={Colors.dark.general} style={tw`mb-0`} size={21} />
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}
