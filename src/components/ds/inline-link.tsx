import Link from 'next/link';
import React from 'react';
import { styled } from 'stitches.config';

import { Text } from './text';

type InlineProps = {
  href: string;
  children: React.ReactNode;
};

const StyledInlineLink = styled('a', {
  lineHeight: 'inherit',
  fontSize: 'inherit',
  fontWeight: 600,
  textDecoration: 'underline',
  textUnderlineOffset: 2,
  color: 'inherit',
  transition: 'color 0.4s ease',

  '&:hover': {
    color: '$maxBlue'
  },

  [`& ${Text}`]: {
    color: 'inherit',
    '&:hover': {
      color: '$maxBlue'
    }
  }
});

export const InlineLink = ({ href, children, ...props }: InlineProps) => {
  return (
    <Link href={href} passHref target="_blank" rel="norefferer noopener">
      <StyledInlineLink {...props}>{children}</StyledInlineLink>
    </Link>
  );
};
