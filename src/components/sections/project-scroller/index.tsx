import { styled } from 'stitches.config';

import { Box, Container, Grid, Section } from '@/components/ds';

const LogoBox = styled(Box, {
  padding: 12,
  backgroundColor: '$sage11',
  borderRadius: 14,

  // DEV
  height: 80,
  width: 320
});

export const ProjectScroller = () => {
  return (
    <Section size="2">
      <Box css={{ padding: 4, backgroundColor: '$slate6', width: '100%' }}>
        <Container
          size="2"
          css={{
            position: 'relative',
            overflowX: 'scroll',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            MsOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <Grid flow="column" align="center" justify="start" gap="2">
            <LogoBox />
            <LogoBox />
            <LogoBox />
            <LogoBox />
          </Grid>
        </Container>
      </Box>
    </Section>
  );
};
