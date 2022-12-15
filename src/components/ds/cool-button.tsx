/** @format */

import type * as Polymorphic from '@radix-ui/react-polymorphic'
import clsx from 'clsx'
import {forwardRef} from 'react'
import {styled} from 'stitches.config'

export type ButtonProps = {
 children?: React.ReactNode
 icon?: boolean | React.ReactNode
 isLoading?: boolean
 variant?: 'underlined'
}

const StyledButton = styled('button', {
 all: 'unset',
 alignItems: 'center',
 boxSizing: 'border-box',
 userSelect: 'none',
 backgroundColor: '$sage3',
 boxShadow: 'inset 0 0 0 1px $colors$slate7',
 textAlign: 'center',
 paddingLeft: 14,
 paddingRight: 14,
 paddingTop: 5,
 paddingBottom: 5,
 borderRadius: 6,
 '@hover': {
  '&:hover': {
   backgroundColor: '$twitter',
   boxShadow: 'inset 0 0 0 1px $colors$slate8'
  }
 },
 '&:active': {
  backgroundColor: '$slate2',
  boxShadow: 'inset 0 0 0 1px $colors$slate8'
 },
 '&:focus': {
  boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
 },
 '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
  {
   backgroundColor: '$slate4',
   boxShadow: 'inset 0 0 0 1px $colors$slate8'
  },
 '&::before': {
  boxSizing: 'border-box'
 },
 '&::after': {
  boxSizing: 'border-box'
 },
 display: 'flex',
 border: 'none',
 transition: 'background-size 250ms',

 variants: {
  underlined: {
   true: {
    background:
     'linear-gradient(to right, transparent, transparent), linear-gradient(to right, $colors$slate1, $colors$slate2)',
    backgroundSize: '100% 0.1em, 0 0.1em',
    backgroundPosition: '100% 100%, 0 100%',
    backgroundRepeat: 'no-repeat',
    '&:hover': {
     backgroundSize: '0 0.1em, 100% 0.1em'
    }
   }
  },
  hasIcon: {
   true: {
    svg: {
     marginLeft: 6,
     transition: 'all 250ms',
     fill: 'currentColor',
     color: 'currentColor'
    },
    '&:hover': {
     svg: {
      color: '$slate1'
     }
    }
   }
  }
 }
})

/**
 * This `Button` is Polymorphic, so it can render any HTML element you pass (via the `as` prop).
 * Make it your own. Add variants, sizes, etc.
 *
 *
 * Look how easy is to create a ButtonLink:
 * ```tsx
 *   <Button as="a" href="https://google.com">My Button Link!</Button>
 * ```
 *
 * Also, below the `Button` is a `ButtonLink` that automatically wraps `NextLink` to it ✨
 */
export const CoolButton = forwardRef(
 ({children, className, disabled, isLoading, variant, icon, ...props}, ref) => {
  return (
   <StyledButton
    {...props}
    className={clsx(className)}
    disabled={isLoading || disabled}
    ref={ref}
    underlined={variant === 'underlined'}
    hasIcon={!!icon}>
    {children} {icon && typeof icon !== 'boolean' ? icon : null}
   </StyledButton>
  )
 }
) as Polymorphic.ForwardRefComponent<'button', ButtonProps>
