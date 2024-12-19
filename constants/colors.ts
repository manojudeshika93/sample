/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#BCD543';
const tintColorDark = '#FFFFFF';

export const Colors = {
  light: {
    text: '#11181C',
    background: tintColorDark,
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    general: tintColorDark,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    general: '#000000',
  },
  status: {
    success: '#00FF00',
    error: '#FF0000',
    warn: '#FFFF00',
    info: '#4169E1',
  },
  general: {
    transparent: '#00000000',
  }
};
