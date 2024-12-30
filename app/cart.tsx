import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, ListEmpty } from '@/components';
import CartItem from '@/components/cart/cartItem';
import { tw } from '@/config';
import { dummyCartData } from '@/constants';
import { ToastService } from '@/services';

interface CartData {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartScreen() {
  const [cartData, setCartData] = useState(dummyCartData.map(item => ({ ...item, quantity: 1 })));

  const onIncrement = useCallback((id: string) => {
    setCartData(prev => prev.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  }, []);

  const onDecrement = useCallback((id: string) => {
    setCartData(prev =>
      prev.map(item => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)),
    );
  }, []);

  const onRemove = useCallback((id: string) => {
    setCartData(prev => prev.filter(item => item.id !== id));
    ToastService.warning({ message: 'Item removed from the cart!!!' });
  }, []);

  const subtotal = useMemo(() => {
    return cartData.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  }, [cartData]);

  const renderListFooter = useMemo(() => {
    const shipping = 20.0;
    const tax = 5.0;
    const grandTotal = (parseFloat(subtotal) + shipping + tax).toFixed(2);

    return (
      <View style={tw``}>
        <View style={tw`flex-row p-5 gap-2`}>
          <Text style={tw`text-b2-semibold text-dark-general text-right`}>Price Details</Text>
          <Text style={tw`text-b2-regular text-dark-general text-right`}>{`(${cartData.length} items)`}</Text>
        </View>
        <View style={tw`flex-row px-5 justify-between my-1`}>
          <Text style={tw`text-b3-semibold text-dark-general text-right`}>Subtotal</Text>
          <Text style={tw`text-b3-regular text-dark-general text-right`}>AED {subtotal}</Text>
        </View>
        <View style={tw`flex-row px-5 justify-between my-1`}>
          <Text style={tw`text-b3-semibold text-dark-general text-right`}>Shipping & Handling</Text>
          <Text style={tw`text-b3-regular text-dark-general text-right`}>AED {shipping.toFixed(2)}</Text>
        </View>
        <View style={tw`flex-row px-5 justify-between my-1`}>
          <Text style={tw`text-b3-semibold text-dark-general text-right`}>Tax</Text>
          <Text style={tw`text-b3-regular text-dark-general text-right`}>AED {tax.toFixed(2)}</Text>
        </View>
        <View style={tw`flex-row px-5 justify-between my-2`}>
          <Text style={tw`text-b2-semibold text-dark-general text-right`}>Grand Total</Text>
          <Text style={tw`text-b2-semibold text-dark-general text-right`}>AED {grandTotal}</Text>
        </View>
      </View>
    );
  }, [subtotal, cartData.length]);

  const renderItem: ListRenderItem<CartData> = useCallback(
    ({ item }) => (
      <CartItem
        image={item.image}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        onWished={() => ToastService.success({ message: 'Item is successfully added to Wishlist!!!' })}
        onDecrement={() => onDecrement(item.id)}
        onIncrement={() => onIncrement(item.id)}
        onRemove={() => onRemove(item.id)}
      />
    ),
    [onDecrement, onIncrement, onRemove],
  );

  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      <View style={tw`flex-1`}>
        <FlatList
          data={cartData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          ListFooterComponent={renderListFooter}
          ListEmptyComponent={<ListEmpty />}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      </View>
      <View style={tw`px-5 py-2`}>
        <Button title="Checkout" onPress={() => ToastService.success({ message: 'Successfully checked out!!!' })} />
      </View>
    </SafeAreaView>
  );
}
