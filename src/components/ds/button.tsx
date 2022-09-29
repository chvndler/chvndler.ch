import { styled } from 'stitches.config';

export const Button = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },

  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none'
  },

  variants: {
    size: {
      '1': {
        margin: 0,
        borderRadius: 11,
        paddingLeft: '20px',
        paddingRight: '20px',
        height: 'auto',
        fontSize: 13,
        lineHeight: '40px'
      },
      '2': {
        borderRadius: '8px',
        height: '$6',
        px: '$3',
        fontSize: '$3',
        lineHeight: '$sizes$6'
      },
      '3': {
        borderRadius: '9px',
        height: '$7',
        px: '$4',
        fontSize: '$4',
        lineHeight: '$sizes$7'
      },
      block: {
        width: '100%',
        padding: 'auto',
        margin: 'auto',

        borderRadius: '8px',
        height: '$6',
        px: '$3',

        fontSize: '$3',
        lineHeight: '$sizes$6'
      }
    },

    color: {
      atelier: {
        backgroundColor: '$gray3',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$gray11',
        '@hover': {
          '&:hover': {
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
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slate4',
          boxShadow: 'inset 0 0 0 1px $colors$slate8'
        }
      },
      primary: {
        backgroundColor: '$air5',
        boxShadow: 'inset 0 0 0 1px $colors$air5',
        color: '$mauve2',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$air6'
          }
        },
        '&:active': {
          backgroundColor: '$slate2',
          boxShadow: 'inset 0 0 0 1px $colors$air7'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$air6'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$air4',
          boxShadow: 'inset 0 0 0 1px $colors$air6'
        }
      },
      secondary: {},
      gray: {
        backgroundColor: '$gray3',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$gray11',
        '@hover': {
          '&:hover': {
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
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slate4',
          boxShadow: 'inset 0 0 0 1px $colors$slate8'
        }
      },

      ghostAtelier: {
        backgroundColor: '$mauve3',
        boxShadow: 'inset 0 0 0 1px $colors$mauve4, 0 0 0 1px $colors$mauve4',
        color: '$mauve12',
        '&:hover': {
          backgroundColor: '$mauve4',
          boxShadow: 'inset 0 0 0 1px $colors$mauve5, 0 0 0 1px $colors$mauve5'
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)'
        }
      },
      nothing: {
        height: 'auto',
        fontFamily: '$telegraf',
        backgroundColor: 'transparent',
        color: '$chxn3',
        '&:hover': {
          color: '$chxn6'
        },
        '&:active': {
          // backgroundColor: 'hsla(0,100%,100%,.3)'
        },
        '&:focus': {
          // boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)'
        }
      },
      clear: {
        height: 'auto',
        fontFamily: '$telegraf',
        backgroundColor: 'transparent',
        color: '$chxn3',
        '&:hover': {
          color: '$tartOrange',
          backgroundColor: '$blur'
        },
        '&:active': {
          // backgroundColor: 'hsla(0,100%,100%,.3)'
        },
        '&:focus': {
          // boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)'
        }
      },
      close: {
        height: 'auto',
        fontFamily: '$telegraf',
        backgroundColor: 'transparent',
        color: '$chxn4',
        '&:hover': {
          color: '$chxn1'
        },
        '&:active': {
          // backgroundColor: 'hsla(0,100%,100%,.3)'
        },
        '&:focus': {
          // boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)'
        }
      }
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
            boxShadow: 'inset 0 0 0 1px $colors$slate8'
          }
        },
        '&:active': {
          backgroundColor: '$slate5'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
        }
      },

      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8'
          }
        },
        '&:active': {
          backgroundColor: '$slate5'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8'
        }
      }
    }
  },

  defaultVariants: {
    size: '1',
    color: 'atelier'
  }
});
