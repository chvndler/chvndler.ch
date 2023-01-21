import * as React from 'react'

import {Canvas} from '@/components/ds'
import {ButtonDemo} from '@/components/lab-components/lab.ButtonDemo'
import {PageLayout} from '@/components/layout/page'

const ButtonLabPage = () => {
  return (
    <PageLayout page_type={'App'}>
      <Canvas>
        <ButtonDemo />
      </Canvas>
    </PageLayout>
  )
}

export default ButtonLabPage
