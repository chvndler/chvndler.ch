import { css, styled } from '@stitches/react';

const BodyStyles = css({
  boxSizing: 'border-box',
  paddingTop: 160,
  paddingBottom: 'auto',
  width: 'auto',
  minHeight: '50vh'
});

export const BodyContainer = styled('div', BodyStyles);
