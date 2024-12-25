import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NotificationCard } from '@/components';
import { tw } from '@/config';
import { dummyNotifications } from '@/constants';
import { ToastService } from '@/services';

export default function NotificationsScreen() {
  const [selectedID, setSelectedID] = useState<string>('');
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: true,
  });

  const { t } = useTranslation();

  const listEmptyComponent = useMemo(() => {
    return (
      <View style={tw`mx-4`}>
        <Text style={tw`text-b1-regular text-status-info text-center`}>
          {t('noNotifications')}
        </Text>
      </View>
    );
  }, [t]);

  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <FlatList
        data={dummyNotifications}
        keyExtractor={item => item.id}
        ListEmptyComponent={listEmptyComponent}
        renderItem={({ item }) => (
          <NotificationCard
            item={item}
            selectedID={selectedID}
            onPress={() => setSelectedID(item.id)}
            onRemove={() => ToastService.warning({ message: 'Notification romeve clicked' })}
            threshold={108}
          />
        )}
      />
    </SafeAreaView>
  );
}
