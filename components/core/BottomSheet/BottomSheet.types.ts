import GorhomBottomSheet from '@gorhom/bottom-sheet';
import { ComponentProps } from 'react';

type GorhomBottomSheetProps = ComponentProps<typeof GorhomBottomSheet>;

type WithGorhomBottomSheetProps = Pick<
  GorhomBottomSheetProps,
  'children' | 'snapPoints' | 'enablePanDownToClose' | 'backgroundStyle' | 'enableDynamicSizing'
>;

export interface BottomSheetProps extends WithGorhomBottomSheetProps {
  onChange?: (index: number) => void;
  visibleInitially?: boolean;
  handleSheetClose: () => void;
  title: string;
}
