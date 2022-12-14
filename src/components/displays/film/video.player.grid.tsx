import React from 'react'

import {Container, Grid, Section} from '@/components/ds'

type FProps = {
  children: React.ReactNode
}

export const VideoPlayerGrid = ({children}: FProps) => {
  return (
    <Section size={'4'}>
      <Container size={'3'} css={{}}>
        <Grid columns={'1'} justify={'between'} align={'center'} gap={'3'} css={{width: '100%'}}>
          {children}
        </Grid>
      </Container>
    </Section>
  )
}
