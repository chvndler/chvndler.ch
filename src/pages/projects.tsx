import Link from 'next/link';

import { Box, Container, Flex, Heading, Text } from '@/components/ds';
import { Icxn } from '@/components/icons/icxn';
import { PageLayout } from '@/components/layout/page';
import { AtlrColorLogo, AtlrDsLogo, AtlrIcxnsLogo, CDCLogo } from '@/components/logos';
import { ContentSlider } from '@/components/primitives/off-canvas/slider';
import { ProjectDisplay } from '@/components/primitives/project-display';
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
          description="A minimal color system built on top of Stitches x Radix-UI, for a complete brand guide."
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
    </PageLayout>
  );
};

export default ProjectsPage;
