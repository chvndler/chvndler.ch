import Link from 'next/link';

import { ProjectHero } from '@/components/common/project-hero';
import { Box, Container, Flex, Text } from '@/components/ds';
import { Icxn } from '@/components/icons/icxn';
import { PageLayout } from '@/components/layout/page';
import { AtlrColorLogo, AtlrDsLogo, AtlrIcxnsLogo, CDCLogo } from '@/components/logos';
import { AtlrTypeLogo } from '@/components/logos/atlr.typesxript';
import { ContentSlider } from '@/components/primitives/off-canvas/slider';
import { ProjectDisplay } from '@/components/primitives/project-display';

const ProjectsPage = () => {
  return (
    <PageLayout>
      <ProjectHero />

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
          projectUrl="https://developer.atlrdsgn.com/"
          title="@AtelierDesign / atlr.ds"
          description="This website is built with Next.js and Stitches. It is hosted on Vercel."
        >
          <AtlrDsLogo />
        </ProjectDisplay>
        <ProjectDisplay
          projectUrl="https://developer.atlrdsgn.com/"
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
    </PageLayout>
  );
};

export default ProjectsPage;
