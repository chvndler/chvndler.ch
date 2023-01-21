/** @format */

import {create} from 'zustand'

/**
 * Extend if needed !
 */

export interface AppStore {
  fontsLoaded: boolean
  setFontsLoaded: (fontsLoaded: boolean) => void
}

export const useAppStore = create<AppStore>((set) => ({
  fontsLoaded: false,
  setFontsLoaded: (fontsLoaded: boolean) => set((s) => ({...s, fontsLoaded}))
}))
