import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  lng: string;
  setLng: (lng: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      lng: 'en',
      setLng: lng => set({ lng: lng }),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
