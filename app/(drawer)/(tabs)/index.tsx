import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      ToastService.success({ message: t('welcome') });
      setIsFetching(false);
    }, 1000);
  }, []);

  const renderListEmpty = useMemo(() => {
    return (
      <View style={tw`w-full h-45 items-center justify-center`}>
        <Text style={tw`text-b1-semibold text-dark-general`}>{t('welcome')}</Text>
      </View>
    );
  }, [t]);

  const renderListHeader = useMemo(() => {
    return (
      <View>
        <Swiper
          autoplay
          width={SCREEN_WIDTH}
          height={240}
          paginationStyle={tw`mx-10`}
          activeDotColor={Colors.status.error}>
          {dummyHomeSwiperData.map((item, index) => {
            return (
              <Image key={item.id + index} source={{ uri: item.url }} style={tw`w-full h-50`} contentFit="cover" />
            );
          })}
        </Swiper>
        {dummyHomeTrendingData.length > 0 && (
          <View style={tw`h-45 gap-2 shadow-xl shadow-status-success`}>
            <View style={tw`px-5`}>
              <Text style={tw`text-b1-bold text-dark-general`}>{t('treanding')}</Text>
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
          <Text style={tw`text-b1-bold text-dark-general`}>{t('popular')}</Text>
        </View>
      </View>
    );
  }, [isFetching, renderListEmpty, t]);

  return (
    <SafeAreaView style={tw`flex-1 mt--10`}>
      {dummyHomePopularData.length > 0 && (
        <View style={tw`items-center gap-2 pb-12`}>
          <FlatList
            data={dummyHomePopularData}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <View style={tw`flex-row p-3 my-2 mx-5 items-center justify-between rounded-2xl border border-dark-icon bg-light-general`}>
                {isFetching ? (
                  <ShimmerPlaceholder style={tw`w-15 h-15 rounded-full`} />
                ) : (
                  <Image source={{ uri: item.image }} style={tw`w-15 h-15 rounded-full`} />
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
    </SafeAreaView>
  );
}
