import Link from 'next/link';
import { styled } from 'stitches.config';

export const InlineLink = styled(Link, {
  lineHeight: 'inherit',
  fontSize: 'inherit',
  textDecoration: 'underline',
  textUnderlineOffset: 2,
  color: '$chxn5',

  '&:hover': {
    color: '$chvn6'
  }
});
