'use client'
import * as React from 'react'

// client.

interface ProviderProps {
  children: React.ReactNode
}

const AppContext = React.createContext<{fontsLoaded: boolean}>({
  fontsLoaded: false,
})

export const useAppContext = () => React.useContext(AppContext)

export function ThemeProvider({children, ...props}: ProviderProps) {
  return <div {...props}>{children}</div>
}
