import { Badge, Box, Container, Flex, Grid, Section, Space, Text } from '@/ui';
import { PageLayout } from '@/components/layout/page';
import { styled } from '@/lib/stitches.config';
import React from 'react';
import { prjcts as items } from '@/lib/prjcts';
import { ProjectEntry, ProjectProps } from '@/components/projects/ProjectEntry';
import Link from 'next/link';
import { GitHubLogoIcon, InstagramLogoIcon, PaperPlaneIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import NowPlaying from '@/components/NowPlaying';

const ContentContent = styled('div', {
  boxSizing: 'border-box',
  maxWidth: '800px',
  width: '100%',
  height: 'auto',
  padding: 20,
  margin: 'auto',
  paddingTop: '52px',
});

const AboutContent = styled('div', {
  fontFamily: '$inter',
  fontSize: '25px',
  fontWeight: '600',
  letterSpacing: '-0.03rem',
  color: '$mauve12',
  '@sm': {
    fontSize: 22,
  },
});

const Test = ({ ...props }: ProjectProps) => {
  return (
    <>
      <Box css={{ backgroundColor: '$mauve1' }}>
        <PageLayout title='Test'>
          <ContentContent>
            <Section size={2} css={{ paddingTop: 30 }}>
              <Container size={3} css={{ padding: 0 }}>
                <Space size={1} />
                <Badge size={2} variant='tartOrange'>about</Badge>
                <Space size={1} />
                <AboutContent>
                  Front-end developer & designer based in Charlotte, NC– I am currently
                  building AtelierDesign®
                  to calm the noise within design culture. I enjoy exploring– finding, and learning new advancements,
                  developing beautiful user interfaces, and have a passion for building brands and businesses.
                </AboutContent>
              </Container>
            </Section>

            <Section size={2} css={{ padding: 0 }}>
              <Container size={3} css={{ padding: 0 }}>
                <Space size={3} />
                <Badge size={2} variant='tartOrange'>projects</Badge>
                <Space size={1} />
                <Grid
                  css={{
                    gap: 6,
                    gridTemplateColumns: '1fr 1fr 1fr',
                    '@md': {
                      gridTemplateColumns: '1fr 1fr',
                    },
                    '@sm': {
                      gridTemplateColumns: '1fr',
                    },
                  }}>

                  {items.map(entry => {
                    return <ProjectEntry {...props} title={entry.title} href={entry.url}
                                         description={entry.description} key={entry.key} />;
                  })}
                </Grid>
              </Container>
            </Section>


            <Section size={2} css={{ padding: 0 }}>
              <Container size={3} css={{ padding: 0 }}>
                <Space size={3} />
                <Badge size={2} variant='tartOrange'>connect</Badge>
                <Space size={1} />

                <Box css={{ marginTop: '4px', marginBottom: '4px' }}>
                  <Twitter />
                </Box>

                <Box css={{ marginTop: '4px', marginBottom: '4px' }}>
                  <Instagram />
                </Box>

                <Box css={{ marginTop: '4px', marginBottom: '4px' }}>
                  <GitHub />
                </Box>

                <Box css={{ marginTop: '4px', marginBottom: '4px' }}>
                  <ContactEmail />
                </Box>

              </Container>
            </Section>

            <Section size={2} css={{ paddingBottom: 30 }}>
              <Container size={3} css={{ padding: 0 }}>
                <Space size={3} />
                <Badge size={2} variant='tartOrange'>spotify</Badge>
                <Space size={1} />

                <NowPlaying />

              </Container>
            </Section>


          </ContentContent>
        </PageLayout>
      </Box>
    </>
  );
};

function GitHub() {
  return (
    <Flex css={{ display: 'inline-flex', direction: 'row', padding: '4px', margin: 'auto' }}>
      <Box css={{ color: '$lime10' }}>
        <GitHubLogoIcon />
      </Box>

      <Link href='https://github.com/chvndler/chvndler.ch' passHref>
        <Text as='a' target='_blank' rel='noopener noreferrer' css={{
          fontFamily: '$pragmaticaExtended',
          fontSize: '13px',
          fontWeight: '400',
          color: '$mauve8',
          lineHeight: 'normal',

          paddingLeft: '6px',
        }}>
          github
        </Text>
      </Link>
    </Flex>
  );
}


function Twitter() {
  return (
    <Flex css={{ display: 'inline-flex', direction: 'row', padding: '4px', margin: 'auto' }}>
      <Box css={{ color: '$lime10' }}>
        <TwitterLogoIcon />
      </Box>

      <Link href='https://github.com/chvndler/chvndler.ch' passHref>
        <Text as='a' target='_blank' rel='noopener noreferrer' css={{
          fontFamily: '$pragmaticaExtended',
          fontSize: '13px',
          fontWeight: '400',
          color: '$mauve8',
          lineHeight: 'normal',

          paddingLeft: '6px',
        }}>
          twitter
        </Text>
      </Link>
    </Flex>
  );
}

function Instagram() {
  return (
    <Flex css={{ display: 'inline-flex', direction: 'row', padding: '4px', margin: 'auto' }}>
      <Box css={{ color: '$lime10' }}>
        <InstagramLogoIcon />
      </Box>

      <Link href='https://github.com/chvndler/chvndler.ch' passHref>
        <Text as='a' target='_blank' rel='noopener noreferrer' css={{
          fontFamily: '$pragmaticaExtended',
          fontSize: '13px',
          fontWeight: '400',
          color: '$mauve8',
          lineHeight: 'normal',

          paddingLeft: '6px',
        }}>
          instagram
        </Text>
      </Link>
    </Flex>
  );
}

function ContactEmail() {
  return (
    <Flex css={{ display: 'inline-flex', direction: 'row', padding: '4px', margin: 'auto' }}>
      <Box css={{ color: '$lime10' }}>
        <PaperPlaneIcon />
      </Box>

      <Link href='https://github.com/chvndler/chvndler.ch' passHref>
        <Text as='a' target='_blank' rel='noopener noreferrer' css={{
          fontFamily: '$pragmaticaExtended',
          fontSize: '13px',
          fontWeight: '400',
          color: '$mauve8',
          lineHeight: 'normal',

          paddingLeft: '6px',
        }}>
          email me
        </Text>
      </Link>
    </Flex>
  );
}

export default Test;
