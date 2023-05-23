'use client'
import * as React from 'react'

// client.

import {ThemeProvider as NextThemesProvider} from 'next-themes'
import type {ThemeProviderProps} from 'next-themes/dist/types'

type ProviderProps = {
  children: React.ReactNode
} & ThemeProviderProps

const AppContext = React.createContext<{fontsLoaded: boolean}>({
  fontsLoaded: false,
})

export const useAppContext = () => React.useContext(AppContext)

export function ThemeProvider({children, ...props}: ProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      defaultTheme={'system'}
      attribute='class'
      enableSystem
    >
      <div {...props}>{children}</div>
    </NextThemesProvider>
  )
}
