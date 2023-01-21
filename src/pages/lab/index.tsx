import * as React from 'react'

import {Canvas, Container, Heading, PassLink} from '@/components/ds'
import {PageLayout} from '@/components/layout/page'

const LabPage = () => {
  return (
    <PageLayout page_type={'App'}>
      <Canvas>
        <Container>
          <Heading css={{textAlign: 'center'}}>Lab</Heading>
          <PassLink href={'/lab/button'}>Button</PassLink>
          <PassLink href={'/lab/switch'}>Switch</PassLink>
        </Container>
      </Canvas>
    </PageLayout>
  )
}

export default LabPage
