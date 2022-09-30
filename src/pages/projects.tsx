import Link from 'next/link';
import { styled } from 'stitches.config';

import { Box, Container, Flex, Heading, Text } from '@/components/ds';
import { Icxn } from '@/components/icons/icxn';
import { PageLayout } from '@/components/layout/page';
import { AtlrColorLogo, AtlrDsLogo, AtlrIcxnsLogo, CDCLogo } from '@/components/logos';
import { ContentSlider } from '@/components/primitives/off-canvas/slider';
import { SliderCard, SvgBox } from '@/components/primitives/off-canvas/slider-card';
import { HeroSection } from '@/components/sections/hero';
import { LogoLink } from '~/components/ds/logo-link';

const ProjectDetails = styled('div', {
  boxSizing: 'content-box',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  textAlign: 'left',
  padding: 20,
  margin: 'auto',
  bottom: 10,
  left: 0
});

const SubTitle = styled('div', {
  position: 'relative',
  fontSize: 16,
  fontFamily: '$telegraf',
  fontWeight: 'normal',
  lineHeight: '40px',
  textAlign: 'left',
  textTransform: 'uppercase',
  padding: 0,
  margin: 0,

  color: '$chxn4'
});

const Description = styled('p', {
  position: 'relative',
  fontSize: 14,
  fontFamily: '$neueMontreal',
  fontWeight: 'normal',
  lineHeight: 'normal',
  textAlign: 'left',
  padding: 0,
  margin: 0,

  color: '$chxn3'
});

const ProjectsPage = () => {
  return (
    <PageLayout>
      <HeroSection size="1" color="default" alignment="center" css={{ padding: 0, paddingTop: '100px' }}>
        <Container size="1" css={{ padding: 20 }}>
          <Heading
            css={{
              fontSize: '2.2rem',
              fontFamily: '$telegraf',
              color: '$chxn4',
              fontWeight: '600',
              lineHeight: '60px',
              letterSpacing: '-0.01rem',
              padding: 0,
              margin: 0,
              width: 'auto',
              '@md': {
                fontSize: '1.8rem',
                lineHeight: '40px'
              }
            }}
          >
            PROJECTS
          </Heading>
        </Container>
      </HeroSection>

      <ContentSlider>
        {/* <!-- PROJECT #001 --> */}
        {/* <!-- PROJECT #001 --> */}
        <LogoLink variant="box">
          <SliderCard>
            <CDCLogo />
            <ProjectDetails>
              <SubTitle>
                @chvndler / <strong>chvndler.ch</strong>
              </SubTitle>
              <Description>
                Consequat laborum laborum adipisicing officia tempor ullamco anim elit elit in aliqua laborum nisi
                consectetur.
              </Description>
            </ProjectDetails>
          </SliderCard>
        </LogoLink>
        {/* <!-- END ! PROJECT #001 --> */}
        {/* <!-- END ! PROJECT #001 --> */}

        {/* <!-- PROJECT #002 --> */}
        {/* <!-- PROJECT #002 --> */}
        <SliderCard>
          <SvgBox color="maxBlue">
            <AtlrDsLogo />
          </SvgBox>
          <ProjectDetails>
            <SubTitle>
              @AtelierDesign / <strong>atlr.ds</strong>
            </SubTitle>
            <Description>
              Consequat laborum laborum adipisicing officia tempor ullamco anim elit elit in aliqua laborum nisi
              consectetur.
            </Description>
          </ProjectDetails>
        </SliderCard>
        {/* <!-- END ! PROJECT #002 --> */}
        {/* <!-- END ! PROJECT #002 --> */}

        <SliderCard>
          <AtlrDsLogo />
        </SliderCard>

        <SliderCard>
          <AtlrIcxnsLogo />
        </SliderCard>

        <SliderCard>
          <AtlrColorLogo />
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
            margin: 'auto'
          }}
        >
          <Box css={{ lineHeight: '18px', marginRight: 6, color: '$githubAlt' }}>
            <Icxn variant="GitHub" />
          </Box>

          <Link href="https://github.com/chvndler" passHref>
            <Text
              as="a"
              css={{
                // backgroundColor: '$twitter',
                fontSize: 14,
                fontFamily: '$neueMontreal',
                color: '$chxn3',
                fontWeight: '500',
                lineHeight: '18px',
                letterSpacing: '0.01rem',
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
