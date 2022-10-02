import { styled } from 'stitches.config';

import { Box, Grid } from '@/components/ds';

import { PopMenu } from '../app-navbar/pop-menu';

const ContentBox = styled(Box, {
  zIndex: '4',
  appearance: 'none',
  borderRadius: 20,
  border: '1px solid white',
  boxSizing: 'border-box',
  outline: 'none',
  padding: 20,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'flex-start',
  textAlign: 'left',
  alignContent: 'left',
  alignItems: 'left',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: 'transparent',
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  position: 'relative',
  height: '100%',
  width: '100%',

  variants: {
    alignment: {
      start: {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      },
      center: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
      end: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
      }
    }
  }
});

export const CoverGrid = () => {
  return (
    <Grid
      align="stretch"
      flow="row"
      columns="3"
      gap="2"
      css={{
        '@md': {
          gridTemplateColumns: 'repeat(1, 1fr)'
        },
        '@sm': {
          gridTemplateColumns: 'repeat(1, 1fr)'
        }
      }}
    >
      <ContentBox alignment="start">© Copyright</ContentBox>
      <ContentBox alignment="center">CENTER</ContentBox>
      <ContentBox alignment="end">
        <PopMenu />
      </ContentBox>
    </Grid>
  );
};
