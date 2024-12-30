import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Animated,
  FlatList,
  I18nManager,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import Swiper from 'react-native-swiper';

import { ListEmpty } from '@/components';
import { tw } from '@/config';
import { Colors, SCREEN_WIDTH, dummyHomePopularData, dummyHomeSwiperData, dummyHomeTrendingData } from '@/constants';
import { ToastService } from '@/services';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function HomeScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const [scrollX, setScrollX] = useState(0);
  const [contentWidth, setContentWidth] = useState(1);
  const [layoutWidth, setLayoutWidth] = useState(1);
  const flatListRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      ToastService.success({ message: t('welcome') });
      setIsFetching(false);
    }, 1000);
  }, [t]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollX(event.nativeEvent.contentOffset.x);
  };

  const renderCustomIndicator = useMemo(() => {
    const indicatorWidth = (layoutWidth / contentWidth) * layoutWidth;
    const translateX = (scrollX / contentWidth) * layoutWidth;

    return (
      <View style={tw`h-1 bg-light-icon rounded-lg w-full`}>
        <Animated.View
          style={[
            tw`h-1 bg-light-tint rounded-lg`,
            {
              width: indicatorWidth,
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    );
  }, [scrollX, contentWidth, layoutWidth]);

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
          <View style={tw`h-45 mb-5 gap-2 shadow-xl shadow-status-success`}>
            <View style={tw`px-5`}>
              <Text style={tw`text-b1-bold text-dark-general`}>{t('treanding')}</Text>
            </View>
            <FlatList
              ref={flatListRef}
              data={dummyHomeTrendingData}
              horizontal
              style={tw``}
              keyExtractor={item => item.id}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              onContentSizeChange={w => setContentWidth(w)}
              onLayout={({ nativeEvent }) => setLayoutWidth(nativeEvent.layout.width)}
              scrollEventThrottle={16}
              renderItem={({ item }) => (
                <TouchableOpacity style={tw`w-30`}>
                  {item.isNew && (
                    <View style={tw`absolute top-0 right-0`}>
                      <Text style={tw`text-b3-bold text-status-error`}>{t('new')}</Text>
                    </View>
                  )}
                  <View style={tw`items-center m-2 bg-general-transparent`}>
                    {isFetching ? (
                      <ShimmerPlaceholder style={tw`w-20 h-20 rounded-full`} />
                    ) : (
                      <Image
                        contentFit="cover"
                        source={{ uri: item.image }}
                        style={tw`w-20 h-20 rounded-full border border-light-icon`}
                      />
                    )}
                    <Text style={tw`text-b3-semibold text-dark-general`} numberOfLines={1}>
                      {item.name}
                    </Text>
                    <Text style={tw`text-b2-semibold text-status-info`}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
              ListEmptyComponent={<ListEmpty />}
            />
            <View style={tw`mt-2 px-4`}>{renderCustomIndicator}</View>
          </View>
        )}
        <View style={tw`px-5 pb-3`}>
          <Text style={tw`text-b1-bold text-dark-general`}>{t('popular')}</Text>
        </View>
      </View>
    );
  }, [isFetching, t, renderCustomIndicator]);

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
              <TouchableOpacity
                style={tw.style(
                  `flex-row p-3 my-2 mx-5 items-center justify-between rounded-2xl border border-dark-icon bg-light-general shadow-xl shadow-light-tint`,
                  I18nManager.isRTL && `flex-reverse-row`,
                )}>
                {isFetching ? (
                  <ShimmerPlaceholder style={tw`w-15 h-15 rounded-2xl`} />
                ) : (
                  <Image contentFit="contain" source={{ uri: item.image }} style={tw`w-15 h-15 rounded-2xl`} />
                )}
                <View style={tw`justify-center`}>
                  <Text style={tw`text-b2-semibold text-dark-general text-right`}>{item.name}</Text>
                  <Text style={tw.style(`text-b3-bold text-status-info`, I18nManager.isRTL && 'text-left')}>
                    Upto <Text style={tw`text-status-error`}>{item.itemCount}%</Text> Discounts
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            ListHeaderComponent={renderListHeader}
            ListEmptyComponent={<ListEmpty />}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
