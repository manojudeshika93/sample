import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { Images } from '@/assets';
import { TabBarIcon, TabHeaderIcon } from '@/components';
import { tw } from '@/config';
import { Colors } from '@/constants';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={
        {
          drawerStyle: tw`w-50`,
          drawerContentStyle: tw`bg-light-general`,
          drawerActiveTintColor: Colors.dark.general,
          drawerActiveBackgroundColor: Colors.light.tint,
          drawerHideStatusBarOnOpen: true,
          headerLeft: () => <DrawerToggleButton tintColor={Colors.dark.general} />,
          headerRight: () => <TabHeaderIcon onPress={() => router.navigate('/notifications')} />,
          headerTitle: () => <Image source={Images.groupLogo} style={{ width: 100, height: 30 }} />,
        }
      }>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color }) => <TabBarIcon name="home" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="info"
        options={{
          drawerLabel: 'Info',
          drawerIcon: ({ color }) => <TabBarIcon name="information-circle" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="terms"
        options={{
          drawerLabel: 'Terms',
          drawerIcon: ({ color }) => <TabBarIcon name="accessibility" size={20} color={color} />,
        }}
      />
    </Drawer>
  );
}
