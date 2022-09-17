import { styled } from '@/lib/stitches.config';

export const InlineLink = styled('a', {
  lineHeight: 'inherit',
  fontSize: 'inherit',
  color: '$chvn8',

  textDecoration: 'underline',
  textUnderlineOffset: 2,

  '&:hover': {
    color: '$chvn3',
  },
});
