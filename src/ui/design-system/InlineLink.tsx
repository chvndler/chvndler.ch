import { styled } from '@/lib/stitches.config';

export const InlineLink = styled('a', {
  lineHeight: 'inherit',
  fontSize: 'inherit',
  color: '$chvn500',

  textDecoration: 'underline',
  textUnderlineOffset: 2,

  '&:hover': {
    color: '$chvn300',
  },
});
