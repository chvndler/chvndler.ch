import { css, styled } from '@stitches/react';

const BodyStyles = css({
  boxSizing: 'border-box',
  paddingTop: 160,
  paddingBottom: 160,
  width: 'auto'
});

export const BodyContainer = styled('div', BodyStyles);
