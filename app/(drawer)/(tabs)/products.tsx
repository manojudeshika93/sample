import { Image } from 'expo-image';
import { router } from 'expo-router';
import { FlatList, ListRenderItem, SectionList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WishlistIcon } from '@/components';
import { tw } from '@/config';
import { SCREEN_WIDTH, dummyProductData } from '@/constants';
import { ProductData } from '@/models';
import { ToastService } from '@/services';

export default function ProductsScreen() {
  const CARD_WIDTH = (SCREEN_WIDTH - 40) / 3;

  const renderProduct: ListRenderItem<ProductData> = ({ item }) => (
    <TouchableOpacity
      style={tw`w-[${CARD_WIDTH}px] bg-light-general rounded-2xl px-5 pt-5 my-5 items-center shadow-xl shadow-light-tint`}
      onPress={() => router.navigate('./productDetails')}>
      <Image
        source={{ uri: item.image }}
        style={tw`w-[${CARD_WIDTH - 20}px] h-[${CARD_WIDTH - 20}px] mb-5 rounded-xl`}
      />
      <Text style={tw`text-b4-semibold text-dark-general`}>{item.name}</Text>
      <Text style={tw`text-b3-semibold text-status-info`}>{item.price}</Text>
      <Text style={tw`text-b5-regular`}>{'\u2B50'.repeat(Math.round(item.rating))}</Text>
      <TouchableOpacity
        style={tw`flex-row w-[${CARD_WIDTH}px] h-7 mt-2 bg-light-tint rounded-b-2xl items-center justify-center`}
        onPress={() => ToastService.success({ message: 'Item is successfully added to Cart!!!' })}>
        <Text style={tw`text-b3-bold text-light-general`}>Add Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`absolute top-2 right-2`}
        onPress={() => ToastService.success({ message: 'Item is successfully added to Wishlist!!!' })}>
        <WishlistIcon />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={tw`flex-1 mt--10 gap-10`}>
      <SectionList
        sections={dummyProductData}
        keyExtractor={item => item.id}
        renderItem={() => <View />}
        renderSectionHeader={({ section: { title, data } }) => (
          <View>
            <View style={tw`mx-5`}>
              <Text style={tw`text-b1-semibold text-dark-general mb-2`}>{title}</Text>
            </View>
            <FlatList
              data={data}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={tw`mx-5 gap-5`}
            />
          </View>
        )}
        contentContainerStyle={tw`pb-10`}
        stickyHeaderHiddenOnScroll
        stickySectionHeadersEnabled={false}
      />
      {/* <Portal>
        <BottomSheet ref={sheetRef} snapPoints={['75%']} title={t('title')} handleSheetClose={() => sheetRef.current?.close()}><View></View></BottomSheet>
      </Portal> */}
    </SafeAreaView>
  );
}
