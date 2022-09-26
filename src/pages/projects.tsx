import Link from 'next/link';
import { Box, Container, Flex, Heading, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { HeroSection } from '@/components/sections/hero';
import { ContentSlider } from '@/components/primitives/off-canvas/slider';
import { SliderCard } from '@/components/primitives/off-canvas/slider-card';
import { AtlrDsLogo } from '@/components/logos';
import { Icxn } from '@/components/icons/icxn';

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
              fontWeight: 'normal',
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
            PROJECTS
          </Heading>
        </Container>
      </HeroSection>

      <ContentSlider>
        <SliderCard>
          <AtlrDsLogo />
        </SliderCard>

        <SliderCard>
          <AtlrDsLogo />
        </SliderCard>

        <SliderCard>
          <AtlrDsLogo />
        </SliderCard>

        <SliderCard>
          <AtlrDsLogo />
        </SliderCard>
      </ContentSlider>

      <Container size="1" css={{ padding: 20 }}>
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
          <Box css={{ lineHeight: '15px' }}>
            <Icxn variant="GitHub" />
          </Box>

          <Link href="https://github.com/chvndler" passHref>
            <Text
              as="a"
              css={{
                // backgroundColor: '$twitter',
                fontSize: 13,
                fontFamily: '$neueMontreal',
                color: '$chxn3',
                fontWeight: 'normal',
                lineHeight: '15px',
                letterSpacing: 'normal',
                marginRight: 10,
                '&:hover': {
                  color: '$gray12'
                }
              }}
            >
              View all projects on GitHub →
            </Text>
          </Link>
        </Flex>
      </Container>
    </PageLayout>
  );
};

export default ProjectsPage;
