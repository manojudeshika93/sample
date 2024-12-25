import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

import { tw } from '@/config';
import { Notification } from '@/models';


interface NotificationCardProps {
  item: Notification;
  selectedID: string;
  onPress: () => void;
  onRemove: () => void;
  threshold?: number;
  onSwipeStart?: () => void;
}

export function NotificationCard({
  item,
  selectedID,
  onPress,
  onRemove,
  threshold = 100,
  onSwipeStart,
}: Readonly<NotificationCardProps>) {
  const renderRightActions = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onRemove}
      style={tw`flex items-center justify-center w-[${threshold}px] bg-status-error`}>
      <Text style={tw`text-light-text text-b1-semibold ml-5`}>Remove</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      overshootFriction={8}
      rightThreshold={threshold}
      onSwipeableWillOpen={onSwipeStart}>
      <Pressable style={tw`w-full justify-center bg-light-general px-4 py-4 border-b border-light-icon`} onPress={onPress}>
        <Text style={tw`text-b1-medium text-dark-general`}>{item.title}</Text>
        <Text style={tw`text-b2-regular text-dark-icon`} numberOfLines={selectedID === item.id ? 2 : 1} ellipsizeMode="tail">
          {item.body}
        </Text>
        {!item.isRead ? <View style={tw`absolute top-6 right-4 w-2 h-2 rounded-full bg-status-success`} /> : null}
      </Pressable>
    </Swipeable>
  );
}
