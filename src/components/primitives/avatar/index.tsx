/** @format */

import type * as AvatarPrimitive from '@radix-ui/react-avatar'
import React from 'react'
import {styled, VariantProps} from 'stitches.config'

import {Box} from '@/components/ds'

import {AvatarComponent, AvatarFallback, AvatarImage} from './avatar.styles'

export const AvatarNestedItem = styled('div', {
 boxShadow: '0 0 0 2px $colors$loContrast',
 borderRadius: '50%'
})

export const AvatarGroup = styled('div', {
 display: 'flex',
 flexDirection: 'row-reverse',
 [`& ${AvatarNestedItem}:nth-child(n+2)`]: {
  marginRight: '-$1'
 }
})

type AvatarVariants = VariantProps<typeof AvatarComponent>
type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>
type AvatarOwnProps = AvatarPrimitiveProps &
 AvatarVariants & {
  alt?: string
  src?: string
  fallback?: React.ReactNode
 }

export const Avatar = React.forwardRef<
 React.ElementRef<typeof AvatarComponent>,
 AvatarOwnProps
>(({alt, src, fallback, size, variant, shape, ...props}, forwardedRef) => {
 return (
  <Box
   css={{
    position: 'relative',
    height: 'fit-content',
    width: 'fit-content'
   }}>
   <AvatarComponent
    {...props}
    ref={forwardedRef}
    size={size}
    variant={variant}
    shape={shape}>
    <AvatarImage alt={alt} src={src} />
    <AvatarFallback size={size}>{fallback}</AvatarFallback>
   </AvatarComponent>

   <Box
    css={{
     position: 'absolute',
     bottom: '0',
     right: '0',
     boxShadow: '0 0 0 3px $colors$loContrast',
     borderRadius: '$round'
    }}
   />
  </Box>
 )
})

Avatar.displayName = 'Avatar'
