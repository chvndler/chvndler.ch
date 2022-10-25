import React from 'react';
import { styled } from 'stitches.config';

import { Box, Container, Grid, InlineLink, Paragraph, Section } from '@/components/ds';

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
      <Section size="2" css={{ paddingTop: 100 }}>
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
            The focus in the moment is building <InlineLink href="/">Atelier® Design</InlineLink>, to silence the noise
            in design culture. My passion is to make simple, beautiful and performant web experiences.
          </Paragraph>
        </Container>
      </Section>

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
              <ProjectDescription>An ever— expanding ecosystem of essential design components.</ProjectDescription>
            </Box>
            {/* <!-- P1 --> */}

            {/* <!-- P2 --> */}
            <Box as="a" css={{}}>
              <ProjectTitle>Typesxript →</ProjectTitle>
              <ProjectDescription>
                Opinionated and essential starting code for next.js, React, Atelier®, and Typescript.
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
