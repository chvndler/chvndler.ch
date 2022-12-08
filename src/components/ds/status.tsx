import {css, keyframes, styled, theme} from 'stitches.config'

const pulse = keyframes({
  '0%': {opacity: '0%'},
  '100%': {opacity: '100%'},
})

const StatusStyles = css({
  borderRadius: '30%',
  flexShrink: 0,

  '&::before': {
    borderRadius: 'inherit',
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  '&::after': {
    animationName: `${pulse}`,
    animationDuration: '500ms',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: theme.colors.slate6,
    borderRadius: 'inherit',
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  variants: {
    size: {
      '1': {
        width: 5,
        height: 5,
      },
      '2': {
        width: 9,
        height: 9,
      },
    },
    variant: {
      gray: {
        backgroundColor: '$slate7',
      },
      blue: {
        backgroundColor: '$blue9',
      },
      green: {
        backgroundColor: '$chxn13',
      },
      yellow: {
        backgroundColor: '$yellow9',
      },
      red: {
        backgroundColor: '$red9',
      },
    },
  },
  defaultVariants: {
    size: '2',
    variant: 'gray',
  },
})

export const Status = styled('div', StatusStyles)
