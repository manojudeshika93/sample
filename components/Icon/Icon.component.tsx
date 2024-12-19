import { CloseCircle } from 'iconsax-react-native';
import React from 'react';

import { BeautySvg } from '@/assets';
import { Colors, IconVariantType, SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants';
import { IconProps, SvgProps } from './Icon.types';

export function CloseIcon({
  variant = IconVariantType.BOLD,
  color = Colors.dark.text,
  size = 16,
}: Readonly<IconProps>) {
  return <CloseCircle variant={variant} size={size} color={color} />;
}

export function DetailedLogo({
  color = Colors.light.background,
  width = SCREEN_WIDTH,
  height = SCREEN_HEIGHT * 0.05,
}: Readonly<SvgProps>) {
  return <BeautySvg fill={color} width={width} height={height} />;
}
