import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Box, Container, Flex, Heading, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { HeroSection } from '@/components/sections/hero';
import { ContentSlider } from '@/components/primitives/off-canvas/slider';

const ProjectsPage = () => {
  return (
    <PageLayout>
      <HeroSection size="1" color="default" alignment="responsiveLeft" css={{ padding: 0, marginTop: '100px' }}>
        <Container size="1" css={{ padding: 20 }}>
          <Heading
            css={{
              fontSize: 62,
              fontFamily: '$neueMontreal',
              color: '$chxn4',
              fontWeight: 'bold',
              lineHeight: '60px',
              letterSpacing: '-0.07rem',
              padding: 0,
              margin: 0,
              width: 'auto',
              '@md': {
                fontSize: 38,
                lineHeight: '40px'
              }
            }}
          >
            PROJEXTS©
          </Heading>
          <Flex
            css={{
              width: '100%',
              flexDirection: 'row',
              gap: 5,
              display: 'inline-flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              '@md': {
                textAlign: 'left',
                alignItems: 'left',
                justifyContent: 'flex-start'
              }
            }}
          >
            <Link href="https://github.com/chvndler" passHref>
              <Text
                as="a"
                css={{
                  // backgroundColor: '$twitter',
                  fontSize: 16,
                  fontFamily: '$telegraf',
                  color: '$chxn3',
                  fontWeight: '600',
                  lineHeight: '15px',
                  letterSpacing: '-0.04rem',
                  marginRight: 10,
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                view on github
              </Text>
            </Link>

            <Box css={{ lineHeight: '15px' }}>
              <GitHubLogoIcon />
            </Box>
          </Flex>
        </Container>
      </HeroSection>

      <ContentSlider />
    </PageLayout>
  );
};

export default ProjectsPage;
