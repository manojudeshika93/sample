import GorhomBottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { forwardRef, useMemo } from 'react';
import { I18nManager, Platform, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { tw } from '@/config';

import { CloseIcon } from '../Icon';
import { BottomSheetProps } from './BottomSheet.types';

export const BottomSheet = forwardRef<GorhomBottomSheet, BottomSheetProps>(function BottomSheet(
  { children, visibleInitially = false, onChange, title, handleSheetClose, ...rest }: BottomSheetProps,
  ref,
) {
  const modalHeader = useMemo(
    () => (
      <View
        style={tw.style(`flex-row mt-2 mb-6 items-center justify-between`, I18nManager.isRTL && `flex-reverse-row`)}>
        <Text style={tw`text-b1-semibold text-light-text`}>{title}</Text>
        <TouchableOpacity onPress={handleSheetClose}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
    ),
    [title, handleSheetClose],
  );

  const { bottom, top } = useSafeAreaInsets();

  const bottomPadding = useMemo(() => bottom + (Platform.OS === 'android' ? 32 : 16), [bottom]);

  return (
    <GorhomBottomSheet
      ref={ref}
      onChange={onChange}
      backgroundStyle={tw`rounded-t-6.5`}
      containerStyle={tw`mt-[${top}]`}
      handleComponent={null}
      enablePanDownToClose
      backdropComponent={props => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />}
      index={visibleInitially ? 0 : -1}
      keyboardBlurBehavior="restore"
      keyboardBehavior="interactive"
      {...rest}>
      <BottomSheetView
        style={tw.style(`mt-4 mx-4 pb-[${bottomPadding}px]`, {
          'flex-1': !rest.enableDynamicSizing,
        })}>
        {modalHeader}
        {children}
      </BottomSheetView>
    </GorhomBottomSheet>
  );
});
