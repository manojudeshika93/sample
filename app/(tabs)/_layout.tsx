import { DrawerActions, useNavigation } from '@react-navigation/native';
import { router, Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab, TabBarIcon, TabHeaderIcon } from '@/components';
import { Colors } from '@/constants';
import { useColorScheme } from '@/hooks';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        headerLeft: () => <TabHeaderIcon isMenu onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />,
        headerRight: () => <TabHeaderIcon onPress={() => router.navigate('/notifications')} />,
        headerTitle: '',
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="productsTab"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'grid' : 'grid-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'happy' : 'happy-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
