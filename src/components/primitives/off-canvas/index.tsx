import React from 'react'

import {Section} from '@/components/ds'

type SlideProps = {
  children?: React.ReactNode
}

export const OffCanvas = ({children}: SlideProps) => {
  return (
    <>
      <Section
        size="4"
        css={{
          position: 'relative',
          overflowX: 'scroll',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          MsOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}>
        {children}
      </Section>
    </>
  )
}
