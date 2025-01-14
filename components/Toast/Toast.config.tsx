import { StatusBar, TouchableOpacity } from 'react-native';
import { hideMessage } from 'react-native-flash-message';

import { tw } from '@/config/tw';

import { CloseIcon } from '../Icon';
import { InitialToastStyleProps, OtherInitialToastProps } from './Toast.types';

const statusBarHeight = StatusBar.currentHeight ?? 0;

const initialToastStyleProps: InitialToastStyleProps = {
  style: tw`items-center rounded-25 px-6 mt-[${statusBarHeight}px]`,
  titleStyle: tw`text-b2-semibold text-light-text`,
};

const otherInitialToastProps: OtherInitialToastProps = {
  autoHide: true,
  hideOnPress: false,
  icon: {
    //@ts-ignore
    icon: () => (
      <TouchableOpacity onPress={hideMessage} style={tw`mt-1`}>
        <CloseIcon />
      </TouchableOpacity>
    ),
    position: 'right',
  },
  position: 'top',
};

export const customToastProps = {
  ...initialToastStyleProps,
  ...otherInitialToastProps,
};
