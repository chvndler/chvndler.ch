import { styled, theme } from 'stitches.config';

import { SpotifyTopTenDisplay } from '@/components/displays/spotify-top-ten';
import { Container, Space } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { NowPlaying } from '@/components/primitives/spotify';

const Music = () => {
  return (
    <>
      <PageLayout page_type={'Production'}>
        <Container size={'2'}>
          <Heading>Spotify Logo</Heading>
        </Container>
        <Container size={'2'}>
          <NowPlaying />
        </Container>
        <Space size={'3'} />
        <Container size={'2'}>
          <SpotifyTopTenDisplay />
        </Container>
      </PageLayout>
    </>
  );
};

export default Music;

const Heading = styled('h1', {
  color: theme.colors.chxn13,
  fontFamily: theme.fonts.panB,
  fontSize: 32,
  textAlign: 'center'
});
