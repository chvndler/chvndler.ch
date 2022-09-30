import Link from 'next/link';
import React, { useMemo } from 'react';

type PassLinkProps = { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

// eslint-disable-next-line import/no-named-as-default-member
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
    <Link href={href} ref={ref}>
      <a {...props}>{children}</a>
    </Link>
  );
});
