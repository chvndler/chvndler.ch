import { Box, Container, Heading } from '@/components/ds';
import { AppBar } from '@/components/layout/app-bar';
import { HeroSection } from '@/components/sections/hero';

const TestPage = () => {
  return (
    <>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          padding: 0,
          margin: 0
        }}
      >
        <AppBar />
      </Box>
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
    </>
  );
};

export default TestPage;
