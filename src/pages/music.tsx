import { styled, theme } from 'stitches.config';

import { Container } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';

const Music = () => {
  return (
    <>
      <PageLayout page_type={'CoverPage'}>
        <Container size={'2'}>
          <Heading>Music</Heading>
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
