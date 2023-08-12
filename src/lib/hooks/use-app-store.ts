import { create } from 'zustand';

export interface AppStore {
  loading: boolean;
  fontsLoaded: boolean;

  setLoading: (loading: boolean) => void;
  setFontsLoaded: (fontsLoaded: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  loading: true,
  setLoading: (loading: boolean) => set((s) => ({ ...s, loading })),

  fontsLoaded: false,
  setFontsLoaded: (fontsLoaded: boolean) => set((s) => ({ ...s, fontsLoaded })),
}));

/**
 *
 * Extend as needed.
 * zustand docs: https://docs.pmnd.rs/zustand/
 */
