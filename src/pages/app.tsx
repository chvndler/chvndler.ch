import Inspect from 'inspx'

import {Canvas} from '@/components/ds'
import {FixedCanvas} from '@/components/ds/canvas'
import {PageHeader} from '@/components/layout/Header'
import {PageLayout} from '@/components/layout/page'

const NextAppPage = () => {
 return (
  <>
   <Inspect>
    <PageLayout page_type={'App'}>
     <PageHeader />
     <FixedCanvas>
      <Canvas></Canvas>
     </FixedCanvas>
    </PageLayout>
   </Inspect>
  </>
 )
}

export default NextAppPage
