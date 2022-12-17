/** @format */

import React from 'react'
import type {CSS} from 'stitches.config'
import {styled, VariantProps} from 'stitches.config'

import {Container, Grid, Section} from '@/components/ds'

type FProps = {
 children: React.ReactNode
 columns?: number
}

type VideoGridComponentProps = FProps & GridVariantProps & {css?: CSS}

export const VideoPlayerGrid = ({children, ...props}: VideoGridComponentProps) => {
 return (
  <Section size={'4'}>
   <Container size={'video'} css={{}}>
    <VideoGrid justify={'between'} align={'center'} gap={'3'} css={{width: '100%'}} {...props}>
     {children}
    </VideoGrid>
   </Container>
  </Section>
 )
}

const gridStyles = styled(Grid, {
 variants: {
  columns: {
   1: {
    gridTemplateColumns: 'repeat(1, 1fr)'
   },
   2: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    '@md': {
     gridTemplateColumns: 'repeat(1, 1fr)'
    }
   }
  }
 },
 defaultVariants: {
  columns: 1
 }
})

const VideoGrid = styled(gridStyles)
type GridVariantProps = VariantProps<typeof gridStyles>
