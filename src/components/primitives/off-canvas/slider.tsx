import { styled } from 'stitches.config';

import { Grid, Section } from '@/components/ds';

const ContentCard = styled('div', {
  zIndex: '4',
  appearance: 'none',
  border: '1px solid $chxn3',
  borderRadius: 20,
  boxSizing: 'border-box',
  outline: 'none',
  padding: 0,
  textAlign: 'inherit',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: '$chxn2',
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  position: 'relative',

  minHeight: '350px',
  minWidth: '350px'
});

export const ContentSlider = () => {
  return (
    <>
      <Section
        size="4"
        css={{
          backgroundColor: '$grayA2',
          // paddingBottom: 10,
          position: 'relative',
          overflowX: 'scroll',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          MsOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          },

          border: '1px solid $grayA3',
          borderLeftWidth: 0,
          borderRightWidth: 0
        }}
      >
        <Grid flow="column" align="center" justify="start" gap="2">
          <ContentCard></ContentCard>
          <ContentCard></ContentCard>
          <ContentCard></ContentCard>
          <ContentCard></ContentCard>
          <ContentCard></ContentCard>
          <ContentCard></ContentCard>
          <ContentCard></ContentCard>
          <ContentCard></ContentCard>
        </Grid>
      </Section>
    </>
  );
};
