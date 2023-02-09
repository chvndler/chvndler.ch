/** @format */

import {SpotifyTopTenDisplay} from '@/components/displays/spotify'
import {Container, Space} from '@/components/ds'
import {PageLayout} from '@/components/layout/page'
import {NowPlaying} from '@/components/primitives/spotify'

const Music = () => (
  <>
    <PageLayout page_type={'Production'}>
      <Container size={'2'}>
        <NowPlaying />
      </Container>
      <Space size={'3'} />
      <Container size={'2'}>
        <SpotifyTopTenDisplay />
      </Container>
    </PageLayout>
  </>
)

export default Music
