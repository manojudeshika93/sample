import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

import { tw } from '@/config';

import { DeleteIcon, WishlistIcon } from '../core';

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  onWished: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

export default function CartItem({
  image,
  name,
  price,
  quantity,
  onWished,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps) {
  return (
    <View
      style={tw`flex-1 p-3 my-2 mx-5 rounded-2xl border border-dark-icon bg-light-general shadow-xl shadow-light-tint`}>
      <TouchableOpacity style={tw`absolute top-2 left-2 z-100`} onPress={onWished}>
        <WishlistIcon />
      </TouchableOpacity>
      <View style={tw`flex-row items-center justify-between ml-5`}>
        <Image contentFit="contain" source={{ uri: image }} style={tw`w-15 h-15 rounded-2xl`} />
        <View style={tw`justify-center`}>
          <Text style={tw`text-b2-semibold text-dark-general text-right`}>{name}</Text>
          <Text style={tw`text-b2-bold text-status-info text-right`}>AED {price.toFixed(2)}</Text>
        </View>
      </View>
      <View style={tw`flex-row items-center justify-end gap-10`}>
        <Pressable onPress={onRemove}>
          <DeleteIcon />
        </Pressable>
        <View style={tw`flex-row items-center justify-center border-2 border-dark-icon rounded-2xl`}>
          <Pressable style={tw`px-2`} onPress={onDecrement}>
            <Text style={tw`text-b2-bold text-dark-general`}>-</Text>
          </Pressable>
          <View style={tw`w-8 items-center justify-center`}>
            <Text style={tw`text-b2-bold text-dark-general`}>{quantity}</Text>
          </View>
          <Pressable style={tw`px-2`} onPress={onIncrement}>
            <Text style={tw`text-b2-bold text-dark-general`}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
