import {slate, slateA} from '@radix-ui/colors'
import {styled} from 'stitches.config'

export const StyledButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 600,

  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontVariantNumeric: 'tabular-nums',

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      '1': {
        borderRadius: 8,
        fontSize: 14,

        margin: 0,
        height: 'auto',
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 6,
        paddingBottom: 6,
      },
      '2': {
        borderRadius: 50,
        fontFamily: '"Lateral Extended Medium", sans-serif',
        fontSize: 13,
        fontWeight: 500,
        margin: 0,
        height: 32,
        width: 'max-content',
        paddingLeft: 14,
        paddingRight: 14,
      },
      '3': {
        borderRadius: 50,
        fontSize: 'inherit',
        margin: 0,
        height: 22,
        paddingLeft: 14,
        paddingRight: 14,
      },
      block: {
        width: '100%',
        padding: 'auto',
        margin: 'auto',

        borderRadius: '8px',
        height: '$6',
        px: '$3',

        fontSize: '$3',
        lineHeight: '$sizes$6',
      },
    },

    color: {
      atelier: {
        backgroundColor: '$gray3',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$gray11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate2',
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slate4',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
      },
      primary: {
        backgroundColor: '$chxn4',
        color: '$chxn1',
        backdropFilter: 'blur(40px) saturate(100%)',
        WebkitBackdropFilter: 'blur(40px) saturate(100%)',
        boxShadow: `inset 0 0 2px 1px $sage8`,
        '&:hover': {
          backgroundColor: '$chxn4A',
          boxShadow: `inset 0 0 0 1px $sage9`,
        },
        '@hover': {
          '&:hover': {
            boxShadow: `inset 0 0 0 1px ${slateA.slateA8}`,
          },
        },
        '&:active': {
          backgroundColor: slate.slate2,
          boxShadow: `inset 0 0 0 1px ${slate.slate8}`,
        },
        '&:focus': {
          boxShadow: `inset 0 0 0 1px ${slate.slate8}, 0 0 0 1px ${slate.slate8}`,
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: slate.slate4,
            boxShadow: `inset 0 0 0 1px ${slate.slate8}`,
          },
      },
      secondary: {},
      gray: {
        backgroundColor: '$gray3',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$gray11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate2',
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slate4',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
      },
      ghostAtelier: {
        backgroundColor: '$mauve3',
        boxShadow: 'inset 0 0 0 1px $colors$mauve4, 0 0 0 1px $colors$mauve4',
        color: '$mauve12',
        '&:hover': {
          backgroundColor: '$mauve4',
          boxShadow: 'inset 0 0 0 1px $colors$mauve5, 0 0 0 1px $colors$mauve5',
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
        },
      },
      nothing: {
        height: 'auto',
        fontFamily: '$telegraf',
        backgroundColor: 'transparent',
        color: '$chxn3',
        '&:hover': {
          color: '$chxn6',
        },
        '&:active': {
          // backgroundColor: 'hsla(0,100%,100%,.3)'
        },
        '&:focus': {
          // boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)'
        },
      },
      clear: {
        height: 'auto',
        fontFamily: '$telegraf',
        backgroundColor: 'transparent',
        color: '$chxn3',
        '&:hover': {
          color: '$tartOrange',
          backgroundColor: '$appbarButton',
        },
        '&:active': {
          // backgroundColor: 'hsla(0,100%,100%,.3)'
        },
        '&:focus': {
          // boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)'
        },
      },
      close: {
        height: 'auto',
        fontFamily: '$telegraf',
        backgroundColor: 'transparent',
        color: '$chxn4',
        '&:hover': {
          color: '$chxn1',
        },
        '&:active': {
          // backgroundColor: 'hsla(0,100%,100%,.3)'
        },
        '&:focus': {
          // boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)'
        },
      },
    },

    // state....

    state: {
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: '$slate11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
      },

      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
      },
    },
  },

  defaultVariants: {
    size: '1',
    color: 'primary',
  },
})

export const Button = StyledButton

Button.displayName = 'Button'
