import {create} from 'zustand'

/**
 *
 * Extend as needed.
 * zustand docs: https://docs.pmnd.rs/zustand/
 */

export interface AppStore {
  fontsLoaded: boolean
  setFontsLoaded: (fontsLoaded: boolean) => void
}

export const useAppStore = create<AppStore>((set) => ({
  fontsLoaded: false,
  setFontsLoaded: (fontsLoaded: boolean) => set((s) => ({...s, fontsLoaded})),
}))
