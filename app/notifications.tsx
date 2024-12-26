import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NotificationCard, NotificationCardRef } from '@/components';
import { tw } from '@/config';
import { dummyNotifications } from '@/constants';
import { ToastService } from '@/services';

export default function NotificationsScreen() {
  const [selectedID, setSelectedID] = useState<string>('');
  const swipeableRefs = useRef<Map<string, NotificationCardRef | null>>(new Map());

  const { t } = useTranslation();

  const closeAllSwipeables = (currentID?: string) => {
    swipeableRefs.current.forEach((ref, id) => {
      if (id !== currentID) {
        ref?.closeSwipeable();
      }
    });
  };

  const listEmptyComponent = (
    <View style={tw`mx-4`}>
      <Text style={tw`text-b1-regular text-status-info text-center`}>{t('noNotifications')}</Text>
    </View>
  );

  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <FlatList
        data={dummyNotifications}
        keyExtractor={item => item.id}
        ListEmptyComponent={listEmptyComponent}
        renderItem={({ item }) => (
          <NotificationCard
            ref={ref => {
              if (ref) {
                swipeableRefs.current.set(item.id, ref);
              } else {
                swipeableRefs.current.delete(item.id);
              }
            }}
            item={item}
            selectedID={selectedID}
            onPress={() => setSelectedID(item.id)}
            onRemove={() => ToastService.warning({ message: 'Notification remove clicked' })}
            threshold={108}
            onSwipeStart={() => closeAllSwipeables(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}
