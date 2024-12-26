import * as Updates from 'expo-updates';
import { useCallback } from 'react';
import { I18nManager } from 'react-native';

export function useRTLToggle() {
  const enableRTL = useCallback(async () => {
    try {
      // Enable and allow RTL
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);

      await Updates.reloadAsync();
    } catch (error) {
      console.error('Failed to enable RTL:', error);
    }
  }, []);

  const disableRTL = useCallback(async () => {
    try {
      // Disable and disallow RTL
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);

      await Updates.reloadAsync();
    } catch (error) {
      console.error('Failed to disable RTL:', error);
    }
  }, []);

  return { enableRTL, disableRTL };
}
