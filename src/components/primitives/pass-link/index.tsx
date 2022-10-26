import Link from 'next/link';
import React, { useMemo } from 'react';
import { styled } from 'stitches.config';

type PassLinkProps = { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const StyledHref = styled(Link, {
  transition: 'color 0.4s ease',
  '&:hover': {
    color: '$lime10'
  }
});

const LinkComp = StyledHref;

export const PassLink = React.forwardRef<HTMLAnchorElement, PassLinkProps>(({ href, children, ...props }, ref) => {
  const isMailto = useMemo(() => href.startsWith('mailto:'), [href]);
  const isExternal = useMemo(() => /https:/.test(href), [href]);

  if (isExternal || isMailto) {
    return (
      <a rel="noreferrer nofollow noopenner" ref={ref} target="_blank" {...props} href={href}>
        {children}
      </a>
    );
  }

  return (
    <LinkComp href={href} ref={ref}>
      <span {...props}>{children}</span>
    </LinkComp>
  );
});
