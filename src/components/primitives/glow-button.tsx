import type * as Stitches from '@stitches/react';
import { styled } from 'stitches.config';

const StyledButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  backgroundColor: '$sage8',

  borderRadius: 8,
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 8,
  paddingBottom: 8,

  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },

  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none'
  }
});

// Use `Stitches.CSS` or the configured type as shown above
type GlowButtonProps = {
  css?: Stitches.CSS;
  children?: React.ReactNode;
};
export const GlowButton = function ({ children, ...props }: GlowButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
};
