import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

import { Button, Switch } from '@/components';
import { tw } from '@/config';
import { Colors, SCREEN_WIDTH } from '@/constants';
import { ToastService } from '@/services';

interface ImageData {
  id: number;
  url: string;
}

const dummyData: ImageData[] = [
  { id: 1, url: 'https://picsum.photos/id/237/200/300' },
  { id: 2, url: 'https://picsum.photos/seed/picsum/536/354' },
  { id: 3, url: 'https://picsum.photos/id/1084/536/354?grayscale' },
  { id: 4, url: 'https://picsum.photos/id/1060/536/354?blur=2' },
  { id: 5, url: 'https://picsum.photos/id/870/536/354?grayscale&blur=2' },
];

export default function HomeScreen() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      ToastService.success({ message: 'Hi Have a nice day!!!' });
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 items-center px-5`}>
      <View style={tw`flex-1 items-center w-full gap-5`}>
        <View style={tw`h-60`}>
          <Swiper autoplay height={220} width={SCREEN_WIDTH} paginationStyle={tw`bottom-0 items-end mx-5 overflow-hidden`} activeDotColor={Colors.status.error}>
            {dummyData.map((item, index) => {
              return <Image key={item.id + index} source={{ uri: item.url }} style={tw`w-full h-55`} contentFit='cover' />;
            })}
          </Swiper>
        </View>
        <Text style={tw`text-h1-bold text-status-info`}>Home</Text>
        <Button title='Go to Profile' onPress={() => router.navigate('/profile')} />
        <Switch value={value} onValueChange={setValue} />
      </View>
      <View style={tw`items-center mt-5`}>
        <Button isLink title='Nazih.com' onPress={() => { }} />
      </View>
    </SafeAreaView>
  );
}
