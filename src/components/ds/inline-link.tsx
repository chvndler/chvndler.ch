/** @format */

import Link from 'next/link'
import React from 'react'
import {styled} from 'stitches.config'

import {Text} from './text'

type InlineProps = {
  href: string
  children: React.ReactNode
}

const StyledInlineLink = styled(Link, {
  lineHeight: 'inherit',
  fontSize: 'inherit',
  // fontWeight: 600,
  textDecoration: 'underline',
  textUnderlineOffset: 2,
  color: 'inherit',
  transition: 'color 0.4s ease',

  '&:hover': {
    color: '$blue9'
  },

  [`& ${Text}`]: {
    color: 'inherit',
    '&:hover': {
      color: '$blue9'
    }
  },

  variants: {
    color: {
      inherit: {
        color: 'inherit'
      },
      tartOrange: {
        color: '$tartOrange'
      },
      twitter: {
        color: '$twitter'
      }
    }
  }
})

export const InheritedLink = StyledInlineLink

export const InlineLink = ({href, children, ...props}: InlineProps) => {
  return (
    <InheritedLink href={href} {...props} passHref target='_blank' rel='norefferer noopener'>
      {children}
    </InheritedLink>
  )
}
