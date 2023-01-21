import * as React from 'react'

import {Canvas} from '@/components/ds'
import {SwitchDemo} from '@/components/lab-components/lab.SwitchDemo'
import {PageLayout} from '@/components/layout/page'

const SwitchLabPage = () => {
  return (
    <PageLayout page_type={'App'}>
      <Canvas>
        <SwitchDemo />
      </Canvas>
    </PageLayout>
  )
}

export default SwitchLabPage
