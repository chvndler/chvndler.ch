import Link from 'next/link';
import React from 'react';
import { styled } from 'stitches.config';

import { Box, Container, Flex, Grid, InlineLink, Paragraph, Section } from '@/components/ds';
import { Icxn } from '@/components/icons/icxn';
import { Avatar } from '@/components/primitives/avatar';

const StyledProjectTitle = styled('a', {
  fontSize: 18,
  fontFamily: '$rightGroteskText',
  fontWeight: 'normal',
  lineHeight: '2',
  color: '$slate12',

  '&:hover': {
    color: '$chxn6',
    cursor: 'pointer',
    textDecoration: 'underline'
  }
});

const StyledProjectDescription = styled('p', {
  fontSize: 14,
  fontFamily: '$rightGroteskText',
  lineHeight: '1.4',
  color: '$slate10'
});

export const ProjectTitle = StyledProjectTitle;
export const ProjectDescription = StyledProjectDescription;

export const AboutMe = () => {
  return (
    <>
      <Container size="1" css={{ marginBottom: 40 }}>
        <Flex
          css={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            padding: 4
          }}
        >
          <Link href="/" passHref>
            <Box as="a" css={{}}>
              <Avatar
                size="3"
                alt="Chandler Chappell"
                src="https://pbs.twimg.com/profile_images/1570572396913999872/eu5obCWK_reasonably_small.jpg"
                fallback="C"
              />
            </Box>
          </Link>

          <Link href="https://twitter.com/chvndlerch" passHref target="_blank" rel="norefferer">
            <Box as="a" css={{ color: '$twitter' }}>
              <Icxn variant="Twitter" />
            </Box>
          </Link>

          <Link href="https://twitter.com/chvndlerch" passHref target="_blank" rel="norefferer">
            <Box as="a" css={{ color: '$github' }}>
              <Icxn variant="GitHub" />
            </Box>
          </Link>

          <Link href="https://twitter.com/chvndlerch" passHref target="_blank" rel="norefferer">
            <Box as="a" css={{ color: '$mauve9' }}>
              <Icxn variant="Are.na" />
            </Box>
          </Link>
        </Flex>
      </Container>

      <Container size="1" css={{}}>
        <Paragraph
          css={{
            color: '$slate11',
            fontFamily: '$rightGroteskText',
            fontSize: 22,
            fontWeight: '600',
            lineHeight: 1.4,
            textAlign: 'center'
          }}
        >
          The focus in the moment is building <InlineLink href="/">Atelier® Design</InlineLink>, to silence the noise in
          design culture. My passion is to make simple, beautiful and performant web experiences.
        </Paragraph>
      </Container>

      <Section size="2" css={{ paddingTop: 100 }}>
        <Container size="1" css={{}}>
          <Grid
            align="stretch"
            flow="row"
            columns="2"
            gap="4"
            css={{
              '@md': {
                gridTemplateColumns: 'repeat(2, 1fr)'
              },
              '@sm': {
                gridTemplateColumns: 'repeat(1, 1fr)'
              }
            }}
          >
            {/* <!-- P1 --> */}
            <Box as="a" css={{}}>
              <ProjectTitle>Atelier® DS →</ProjectTitle>
              <ProjectDescription>
                My passion is to make simple, beautiful and performant web experiences.
              </ProjectDescription>
            </Box>
            {/* <!-- P1 --> */}

            {/* <!-- P2 --> */}
            <Box as="a" css={{}}>
              <ProjectTitle>Typesxript →</ProjectTitle>
              <ProjectDescription>
                My passion is to make simple, beautiful and performant web experiences.
              </ProjectDescription>
            </Box>
            {/* <!-- P2 --> */}

            {/* <!-- P3 --> */}
            <Box as="a" css={{}}>
              <ProjectTitle>atlr.icxns →</ProjectTitle>
              <ProjectDescription>Not your basic icon set.</ProjectDescription>
            </Box>
            {/* <!-- P3 --> */}

            {/* <!-- P4 --> */}
            <Box as="a" css={{}}>
              <ProjectTitle>atlr.color →</ProjectTitle>
              <ProjectDescription>
                A quickly accessible, yielded and opinionated color system for the web.
              </ProjectDescription>
            </Box>
            {/* <!-- P4 --> */}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
