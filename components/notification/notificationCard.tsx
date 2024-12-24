import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

import { tw } from '@/config';
import { Colors } from '@/constants';
import { Notification } from '@/models';

interface NotificationCardProps {
  item: Notification;
  onPress: () => void;
  onRemove: () => void;
  threshold?: number;
  onSwipeStart?: () => void;
}

export function NotificationCard({
  item,
  onPress,
  onRemove,
  threshold = 100,
  onSwipeStart,
}: Readonly<NotificationCardProps>) {
  const renderRightActions = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onRemove}
      style={[tw`flex items-center justify-center w-[${threshold}px]`, { backgroundColor: Colors.status.error }]}>
      <Text style={tw`text-light-text text-b1-semibold ml-5`}>Remove</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      overshootFriction={8}
      rightThreshold={threshold}
      onSwipeableWillOpen={onSwipeStart}>
      <View style={tw`justify-center w-full bg-light-general`}>
        <Pressable style={tw`flex-row gap-3 px-4 py-4 border-b border-light-icon`} onPress={onPress}>
          <View style={tw`flex-1 gap-1`}>
            <Text style={tw`text-b1-medium text-dark-general`}>{item.title}</Text>
            <Text style={tw`text-b2-regular text-dark-text`} numberOfLines={1} ellipsizeMode="tail">
              {item.body}
            </Text>
          </View>
          {!item.isRead ? <View style={tw`absolute top-4 right-4 w-2 h-2 rounded-full bg-`} /> : null}
        </Pressable>
      </View>
    </Swipeable>
  );
}
