/** @format */

import {styled, theme} from 'stitches.config'
export const Card = styled('div', {
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  lineHeight: '1',
  outline: 'none',
  padding: 0,
  textAlign: 'inherit',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  display: 'flex',
  flexWrap: 'wrap',
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  borderRadius: 'inherit',
  position: 'relative',

  '&::before': {
    boxSizing: 'border-box',
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    pointerEvents: 'none'
  },

  variants: {
    variant: {
      /**
       *
       *
       *
       * @INTERACTIVE
       *
       *
       *
       */
      interactive: {
        borderRadius: '1.4rem',
        border: `1px solid ${theme.colors.chxn2}`,
        '&::before': {
          // border: `1px solid ${theme.colors.chxn3}`
        },
        '&:hover': {
          // borderColor: theme.colors.chxn4
        },
        '@hover': {
          borderColor: theme.colors.chxn2,
          '&:hover': {
            borderColor: theme.colors.chxn3,

            tranlate3d: 'translate3d(0px, 1px, 0px)',
            scale3d: 'scale3d(1, 1, 2)',
            rotateX: 'rotateX(0deg)',
            rotateY: 'rotateY(0deg)',
            rotateZ: 'rotateZ(0deg)',
            skew: 'skew(0deg, 0deg)',
            '&::before': {}
          }
        },
        '&:focus': {
          '&::before': {}
        }
      },
      /**
       *
       *
       *
       * @ACTIVE
       *
       *
       *
       */
      active: {
        transform: 'translateY(0)',
        transition: 'none',
        '&::before': {
          boxShadow: '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
          opacity: '1'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8'
        }
      }
    }
  },
  defaultVarianst: {
    variant: 'interactive'
  }
})
