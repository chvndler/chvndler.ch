import { Box, Container, Heading } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { CardHero } from '@/components/sections/card-hero';
import { ProjectOne } from '@/components/sections/projexts/one';

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
                fontSize: '3rem',
                fontFamily: '$neueMontreal',
                color: '$chxn5',
                fontWeight: 'normal',
                letterSpacing: '-0.05rem',
                lineHeight: '30px',
                padding: 0,
                margin: 0,
                width: 'auto',
                '@md': {
                  fontSize: '3rem',
                  letterSpacing: '-0.08rem',
                  lineHeight: '30px'
                }
              }}
            >
              PROJEXTS
            </Heading>
          </Container>
        </CardHero>

        <ProjectOne />
      </Box>
      {/*END HERO CONTAINER*/}
    </PageLayout>
  );
};

export default DevelopingPage;
