import { Container, Heading } from '@/components/ds';
import { HeroSection } from '@/components/sections/hero';
import { PageLayout } from '~/components/layout/page';

const TestPage = () => {
  return (
    <>
      <PageLayout>
        <HeroSection size="1" color="default" alignment="responsiveLeft" css={{ padding: 0, height: '200vh' }}>
          <Container size="1" css={{ padding: 20, paddingTop: '100px' }}>
            <Heading
              css={{
                fontSize: 62,
                fontFamily: '$rightGroteskTextWide',
                color: '$chxn4',
                fontWeight: 'bold',
                letterSpacing: '-0.53rem',
                lineHeight: '53px',
                padding: 0,
                margin: 0,
                width: 'auto',
                '@md': {
                  letterSpacing: '-0.3rem',
                  fontSize: 38,
                  lineHeight: '30px'
                }
              }}
            >
              DEVELOPING
            </Heading>
            <Heading
              css={{
                fontSize: 82,
                fontFamily: '$rightGroteskTextWide',
                color: '$chxn4',
                fontWeight: 'bold',
                letterSpacing: '-0.53rem',
                lineHeight: '53px',
                padding: 0,
                margin: 0,
                width: 'auto',
                '@md': {
                  letterSpacing: '-0.3rem',
                  fontSize: 38,
                  lineHeight: '30px'
                }
              }}
            >
              DEVELOPING
            </Heading>
          </Container>
        </HeroSection>
      </PageLayout>
    </>
  );
};

export default TestPage;
