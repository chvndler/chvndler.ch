import {createReactClient, LivepeerConfig, studioProvider, ThemeConfig} from '@livepeer/react'
import * as React from 'react'

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY
  })
})

export interface ProviderProps {
  children?: React.ReactNode
}

const theme: ThemeConfig = {
  colors: {
    accent: 'rgb(226, 255, 112)',
    containerBorderColor: 'rgb(226, 255, 112)'
  },
  fonts: {
    display: 'Inter'
  }
}

const LivepeerProvider = ({children, ...props}: ProviderProps) => {
  return (
    <LivepeerConfig {...props} client={livepeerClient} theme={theme}>
      {children}
    </LivepeerConfig>
  )
}

export {LivepeerProvider}
