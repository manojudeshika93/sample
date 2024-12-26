import { DrawerToggleButton } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useTranslation } from 'react-i18next';

import { Images } from '@/assets';
import { CustomDrawerContent, TabBarIcon, TabHeaderIcon } from '@/components';
import { tw } from '@/config';
import { Colors } from '@/constants';

export default function DrawerLayout() {
  const { t } = useTranslation();

  return (
    <Drawer
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'slide',
        drawerStyle: tw`w-50`,
        drawerContentStyle: tw`bg-light-general`,
        drawerActiveTintColor: Colors.dark.general,
        drawerActiveBackgroundColor: Colors.light.tint,
        drawerHideStatusBarOnOpen: true,
        headerLeft: () => <DrawerToggleButton tintColor={Colors.dark.general} />,
        headerRight: () => <TabHeaderIcon onPress={() => router.navigate('/notifications')} />,
        headerTitle: () => <Image source={Images.groupLogo} style={{ width: 100, height: 30 }} />,
      }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: t('home'),
          drawerIcon: ({ color }) => <TabBarIcon name="home" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="privacy"
        options={{
          drawerLabel: t('privacy'),
          drawerIcon: ({ color }) => <TabBarIcon name="information-circle" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="terms"
        options={{
          drawerLabel: t('terms'),
          drawerIcon: ({ color }) => <TabBarIcon name="accessibility" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="contact"
        options={{
          drawerLabel: t('contact'),
          drawerIcon: ({ color }) => <TabBarIcon name="mail" size={20} color={color} />,
        }}
      />
    </Drawer>
  );
}
