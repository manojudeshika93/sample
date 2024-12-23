import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import Swiper from 'react-native-swiper';

import { tw } from '@/config';
import { Colors, SCREEN_WIDTH, dummyHomePopularData, dummyHomeSwiperData, dummyHomeTrendingData } from '@/constants';
import { ToastService } from '@/services';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function HomeScreen() {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      ToastService.success({ message: 'Hi, Have a nice day!!!' });
      setIsFetching(false);
    }, 1000);
  }, []);

  const renderListEmpty = () => {
    return (
      <View style={tw`w-full h-45 items-center justify-center`}>
        <Text style={tw`text-b1-semibold text-dark-general`}>No items available!!!</Text>
      </View>
    );
  };

  const renderListHeader = () => {
    return (
      <View>
        {dummyHomeTrendingData.length > 0 && (
          <View style={tw`h-45 gap-2`}>
            <View style={tw`px-5`}>
              <Text style={tw`text-b1-bold text-dark-general`}>Treanding Products</Text>
            </View>
            <FlatList
              data={dummyHomeTrendingData}
              horizontal
              style={tw`px-3`}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => (
                <View style={tw`items-center m-2 bg-general-transparent`}>
                  {isFetching ? (
                    <ShimmerPlaceholder style={tw`w-20 h-20 rounded-2xl`} />
                  ) : (
                    <Image source={{ uri: item.image }} style={tw`w-20 h-20 rounded-2xl`} />
                  )}
                  <Text style={tw`text-b3-semibold text-dark-general`}>{item.name}</Text>
                  <Text style={tw`text-h3-semibold text-status-info`}>{item.price}</Text>
                </View>
              )}
              ListEmptyComponent={renderListEmpty}
            />
          </View>
        )}
        <View style={tw`px-5 pb-3`}>
          <Text style={tw`text-b1-bold text-dark-general`}>Popular Categories</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={tw`flex-1 items-center`}>
      <View style={tw`flex-1 items-center w-full gap-5`}>
        <View style={tw`h-55`}>
          <Swiper
            autoplay
            width={SCREEN_WIDTH}
            paginationStyle={tw`p-0 items-end mx-5 overflow-hidden`}
            activeDotColor={Colors.status.error}>
            {dummyHomeSwiperData.map((item, index) => {
              return (
                <Image key={item.id + index} source={{ uri: item.url }} style={tw`w-full h-55`} contentFit="cover" />
              );
            })}
          </Swiper>
        </View>
        {dummyHomePopularData.length > 0 && (
          <View style={tw`items-center gap-2 mb-60`}>
            <FlatList
              data={dummyHomePopularData}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => (
                <View style={tw`w-full flex-row px-5 my-2  items-center justify-between shadow-xl`}>
                  {isFetching ? (
                    <ShimmerPlaceholder style={tw`w-20 h-20 rounded-full`} />
                  ) : (
                    <Image source={{ uri: item.image }} style={tw`w-20 h-20 rounded-full`} />
                  )}
                  <View style={tw`justify-center`}>
                    <Text style={tw`text-b2-semibold text-dark-general`}>{item.name}</Text>
                    <Text style={tw`text-h3-semibold text-status-info text-right`}>{item.itemCount}</Text>
                  </View>
                </View>
              )}
              ListHeaderComponent={renderListHeader}
              ListEmptyComponent={renderListEmpty}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
