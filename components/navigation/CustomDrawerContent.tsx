import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import i18n from 'i18next';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Images } from '@/assets';
import { tw } from '@/config';
import { useRTLToggle } from '@/hooks';
import { useAuthStore } from '@/store';

import { Switch } from '../core';

export function CustomDrawerContent(props: Readonly<DrawerContentComponentProps>) {
  const { lng } = useAuthStore();
  const { enableRTL, disableRTL } = useRTLToggle();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={tw`flex-1 bg-light-general justify-between`}>
      <SafeAreaView style={tw`flex-1 bg-light-general justify-between`}>
        <View style={tw`mt--10 gap-10`}>
          <Image source={Images.groupLogo} style={tw`h-10`} contentFit="contain" />
          <View>
            <DrawerItemList {...props} />
          </View>
        </View>
        <View style={tw`px-5`}>
          <Switch
            value={lng === 'ar'}
            onValueChange={() => {
              if (lng === 'ar') {
                i18n.changeLanguage('en');
                useAuthStore.getState().setLng('en');
              } else {
                i18n.changeLanguage('ar');
                useAuthStore.getState().setLng('ar');
              }
            }}
          />
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}
