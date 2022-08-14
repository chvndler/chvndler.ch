import * as React from 'react';
import Link from 'next/link';
import { styled } from '@/lib/stitches.config';

const StyledLink = styled('div', {
  textAlign: 'left',
  fontFamily: '$inter',
  fontWeight: '600',
  fontSize: '13px',
  color: '$mauve8',
  paddingLeft: '0px',
  paddingRight: '12px',
  margin: 0,

  '&:hover': {
    color: '$mauve9',
  },
});

const BlogLink = ({ ...props }) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <>
        <Link href={href} passHref>
          <StyledLink {...props}>
            <a {...props}>
              <span>{props.children}</span>
            </a>
          </StyledLink>
        </Link>
      </>
    );
  }

  return (
    <>
      <Link href={href} passHref>
        <StyledLink {...props}>
          <a target='_blank' rel='noopener noreferrer' {...props}>
            <span>{props.children}</span>
          </a>
        </StyledLink>
      </Link>
    </>
  );
};

export default BlogLink;
