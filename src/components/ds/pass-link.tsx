/** @format */

import Link from 'next/link'
import React, {useMemo} from 'react'
import {styled, theme} from 'stitches.config'

type PassLinkProps = {
  href: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const StyledHref = styled(Link, {
  fontFamily: 'inherit',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.colors.heliotrope
  }
})

const LinkComp = StyledHref

export const PassLink = React.forwardRef<HTMLAnchorElement, PassLinkProps>(({href, children, ...props}, ref) => {
  const isMailto = useMemo(() => href.startsWith('mailto:'), [href])
  const isExternal = useMemo(() => /https:/.test(href), [href])

  if (isExternal || isMailto) {
    return (
      <LinkComp rel='noreferrer nofollow noopenner' ref={ref} target='_blank' {...props} href={href}>
        {children}
      </LinkComp>
    )
  }

  return (
    <LinkComp href={href} ref={ref}>
      <span {...props}>{children}</span>
    </LinkComp>
  )
})
