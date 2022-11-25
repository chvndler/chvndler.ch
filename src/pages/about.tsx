import { styled, theme } from 'stitches.config';

import { Container } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';

const About = () => {
  return (
    <>
      <PageLayout page_type={'CoverPage'}>
        <Container size={'2'}>
          <Heading>Archive</Heading>
        </Container>
      </PageLayout>
    </>
  );
};

export default About;

/**
 * @styles
 */
const Heading = styled('h1', {
  color: theme.colors.chxn13,
  fontFamily: theme.fonts.panB,
  fontSize: 20,
  textAlign: 'center'
});
