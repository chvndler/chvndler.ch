import Link from 'next/link';

import { Box, Container, Flex, Heading, Section, Space, Text } from '@/components/ds';
import { Icxn } from '@/components/icons/icxn';
import { PageLayout } from '@/components/layout/page';
import { AtlrColorLogo, AtlrDsLogo, AtlrIcxnsLogo, CDCLogo } from '@/components/logos';
import { AtlrTypeLogo } from '@/components/logos/atlr.typesxript';
import { ContentSlider } from '@/components/primitives/off-canvas/slider';
import { ProjectDisplay } from '@/components/primitives/project-display';
import { GridStyle } from '@/components/primitives/project-display/grid-style';
import { Tweet } from '@/components/primitives/tweet';
import { HeroSection } from '@/components/sections/hero';

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
        <ProjectDisplay
          projectUrl="https://github.com/chvndler/chvndler.ch"
          title="@chvndler / chvndler.ch →"
          description="This website is built with Next.js and Stitches. It is hosted on Vercel."
        >
          <CDCLogo />
        </ProjectDisplay>
        <ProjectDisplay
          projectUrl="https://github.com/AtelierDesign/atlr.typesxript"
          title="@AtelierDesign / atlr.typesxript →"
          description="This website is built with Next.js and Stitches. It is hosted on Vercel."
        >
          <AtlrTypeLogo />
        </ProjectDisplay>
        <ProjectDisplay
          projectUrl="https://github.com/AtelierDesign/atlr.ds"
          title="@AtelierDesign / atlr.ds"
          description="This website is built with Next.js and Stitches. It is hosted on Vercel."
        >
          <AtlrDsLogo />
        </ProjectDisplay>
        <ProjectDisplay
          projectUrl="https://github.com/AtelierDesign/atlr.icxns"
          title="@AtelierDesign / atlr.icxns"
          description="A simple a crisp icon library, built for quickness and minimal design."
        >
          <AtlrIcxnsLogo />
        </ProjectDisplay>
        <ProjectDisplay
          projectUrl="https://github.com/AtelierDesign/atlr.color"
          title="@AtelierDesign / atlr.color"
          description="A minimal color system built on top of Stitches x Radix-UI."
        >
          <AtlrColorLogo />
        </ProjectDisplay>
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

      <Section size="3">
        <Container
          size="3"
          css={{ display: 'flex', alignItems: 'center', margin: 'auto', justifyContent: 'center', paddingTop: 40 }}
        >
          <Tweet
            userUrl="https://twitter.com/chvndlerch"
            avatar="https://pbs.twimg.com/profile_images/1570572396913999872/eu5obCWK_reasonably_small.jpg"
            url="https://twitter.com/chvndlerch/status/1572055841225703426"
            author="chan"
            username="chvndlerch"
            date="8:07 PM · Sep 19, 2022 · Twitter for iPhone"
          >
            i love twitter.
          </Tweet>
        </Container>
        <Space size="5" />
      </Section>

      <Section>
        <Container size="3" css={{ padding: 20 }}>
          <GridStyle>
            <Box
              css={{
                backgroundColor: '$chxn2',
                width: 'auto',
                height: '240px',
                border: '1px solid $mauve5',
                borderRadius: 20,
                padding: 6
              }}
            />

            <Box
              css={{
                backgroundColor: '$chxn2',
                width: 'auto',
                height: '240px',
                border: '1px solid $mauve5',
                borderRadius: 20,
                padding: 6
              }}
            />
            <Box
              css={{
                backgroundColor: '$chxn2',
                width: 'auto',
                height: '240px',
                border: '1px solid $mauve5',
                borderRadius: 20,
                padding: 6
              }}
            />
            <Box
              css={{
                backgroundColor: '$chxn2',
                width: 'auto',
                height: '240px',
                border: '1px solid $mauve5',
                borderRadius: 20,
                padding: 6
              }}
            />
          </GridStyle>
          <Space size="5" />
        </Container>
      </Section>
    </PageLayout>
  );
};

export default ProjectsPage;
