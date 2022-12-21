/** @format */

import {styled} from 'stitches.config'

export const Section = styled('section', {
  boxSizing: 'border-box',
  flexShrink: 0,
  '&::before': {
    boxSizing: 'border-box',
    content: '""'
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""'
  },

  variants: {
    size: {
      '1': {
        py: '$3'
      },
      '2': {
        py: '$5'
      },
      '3': {
        py: '$9'
      },
      '4': {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 10,
        paddingBottom: 10
      }
    }
  },
  defaultVariants: {
    size: '3'
  }
})
