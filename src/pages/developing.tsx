import { Box, Container, Heading } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { CardHero } from '@/components/sections/card-hero';

const DevelopingPage = () => {
  return (
    <PageLayout>
      {/* <!-- HERO CONTAINER --> */}
      <Box css={{ bc: '$loContrast', height: 'auto' }}>
        <CardHero>
          <Container size="3" css={{ textAlign: 'center' }}>
            <Heading
              css={{
                // backgroundColor: '$chxn8',
                fontSize: '4rem',
                fontFamily: '$pragExtended',
                color: '$chxn5',
                fontWeight: 'bold',
                letterSpacing: '-0.3rem',
                lineHeight: '30px',
                padding: 0,
                margin: 0,
                width: 'auto',
                '@md': {
                  fontSize: '3rem',
                  letterSpacing: '-0.2rem',
                  lineHeight: '30px'
                }
              }}
            >
              I'M CHAN.
            </Heading>
          </Container>
        </CardHero>
      </Box>
      {/*END HERO CONTAINER*/}
    </PageLayout>
  );
};

export default DevelopingPage;
