import { styled } from '@/lib/stitches.config';

export const Badge = styled('span', {
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: '$pragmaticaExtended',
  fontWeight: 'normal',
  justifyContent: 'center',
  lineHeight: '1',
  verticalAlign: 'middle',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&:disabled': {
    backgroundColor: '$slate3',
    pointerEvents: 'none',
    color: '$slate8',
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

// customs...
  backgroundColor: '$slate3',
  // borderRadius: '12px',
  color: '$slate11',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',

  variants: {
    size: {
      '1': {
        borderRadius: '6px',
        height: '$4',
        px: '$2',
        fontSize: '$1',
      },
      '2': {
        height: '$5',
        px: '$2',
        fontSize: '$2',
      },
    },
    variant: {
      gray: {
        backgroundColor: '$gray3',
        border: '1px solid $gray5',
        borderRadius: '8px',
        color: '$slate11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8',
        },
      },
      red: {
        backgroundColor: '$red3',
        color: '$red11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8',
        },
      },
      crimson: {
        backgroundColor: '$crimson3',
        border: '1px solid $crimson5',
        borderRadius: '8px',
        color: '$crimson11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$crimson8, 0 0 0 1px $colors$crimson8',
        },
      },
      pink: {
        backgroundColor: '$pink3',
        border: '1px solid $pink5',
        borderRadius: '8px',
        color: '$pink11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$pink8, 0 0 0 1px $colors$pink8',
        },
      },
      purple: {
        backgroundColor: '$purple3',
        border: '1px solid $purple5',
        borderRadius: '8px',
        color: '$purple11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$purple8, 0 0 0 1px $colors$purple8',
        },
      },
      sky: {
        backgroundColor: '$sky3',
        border: '1px solid $sky5',
        borderRadius: '8px',
        color: '$sky11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$sky8, 0 0 0 1px $colors$sky8',
        },
      },
      violet: {
        backgroundColor: '$violet3',
        color: '$violet11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$violet8, 0 0 0 1px $colors$violet8',
        },
      },
      indigo: {
        backgroundColor: '$indigo3',
        border: '1px solid $indigo5',
        borderRadius: '8px',
        color: '$indigo11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$indigo8, 0 0 0 1px $colors$indigo8',
        },
      },
      blue: {
        backgroundColor: '$blue3',
        border: '1px solid $blue5',
        borderRadius: '8px',
        color: '$blue11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
        },
      },
      cyan: {
        backgroundColor: '$cyan3',
        border: '1px solid $cyan5',
        borderRadius: '8px',
        color: '$cyan11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$cyan8, 0 0 0 1px $colors$cyan8',
        },
      },
      teal: {
        backgroundColor: '$teal3',
        border: '1px solid $teal5',
        borderRadius: '8px',
        color: '$teal11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$teal8, 0 0 0 1px $colors$teal8',
        },
      },
      green: {
        backgroundColor: '$green3',
        border: '1px solid $green5',
        borderRadius: '8px',
        color: '$green11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8',
        },
      },
      lime: {
        backgroundColor: '$lime3',
        border: '1px solid $lime5',
        borderRadius: '8px',
        color: '$lime11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$lime8, 0 0 0 1px $colors$lime8',
        },
      },
      yellow: {
        backgroundColor: '$yellow3',
        border: '1px solid $yellow5',
        borderRadius: '8px',
        color: '$yellow11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$yellow8, 0 0 0 1px $colors$yellow8',
        },
      },
      orange: {
        backgroundColor: '$orange3',
        border: '1px solid $orange5',
        borderRadius: '8px',
        color: '$orange11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$orange8, 0 0 0 1px $colors$orange8',
        },
      },
      gold: {
        backgroundColor: '$gold3',
        border: '1px solid $gold5',
        borderRadius: '8px',
        color: '$gold11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gold8, 0 0 0 1px $colors$gold8',
        },
      },
      bronze: {
        backgroundColor: '$bronze3',
        border: '1px solid $bronze5',
        borderRadius: '8px',
        color: '$bronze11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$bronze8, 0 0 0 1px $colors$bronze8',
        },
      },

      tartOrange: {
        color: '$tartOrange',
        backgroundColor: '$gray3',
        border: '1px solid $gray5',
        borderRadius: '8px',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8',
        },
      },
    },
    interactive: {
      true: {},
    },
  },

  compoundVariants: [
    {
      interactive: true,
      variant: 'red',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$red4',
          },
        },
        '&:active': {
          backgroundColor: '$red5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$red5',
        },
      },
    },
    {
      interactive: true,
      variant: 'crimson',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$crimson4',
          },
        },
        '&:active': {
          backgroundColor: '$crimson5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$crimson5',
        },
      },
    },
    {
      interactive: true,
      variant: 'pink',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$pink4',
          },
        },
        '&:active': {
          backgroundColor: '$pink5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$pink5',
        },
      },
    },
    {
      interactive: true,
      variant: 'purple',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$purple4',
          },
        },
        '&:active': {
          backgroundColor: '$purple5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$purple5',
        },
      },
    },
    {
      interactive: true,
      variant: 'violet',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$violet4',
          },
        },
        '&:active': {
          backgroundColor: '$violet5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$violet5',
        },
      },
    },
    {
      interactive: true,
      variant: 'indigo',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$indigo4',
          },
        },
        '&:active': {
          backgroundColor: '$indigo5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$indigo5',
        },
      },
    },
    {
      interactive: true,
      variant: 'blue',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$blue4',
          },
        },
        '&:active': {
          backgroundColor: '$blue5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$blue5',
        },
      },
    },
    {
      interactive: true,
      variant: 'cyan',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$cyan4',
          },
        },
        '&:active': {
          backgroundColor: '$cyan5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$cyan5',
        },
      },
    },
    {
      interactive: true,
      variant: 'teal',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$teal4',
          },
        },
        '&:active': {
          backgroundColor: '$teal5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$teal5',
        },
      },
    },
    {
      interactive: true,
      variant: 'green',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$green4',
          },
        },
        '&:active': {
          backgroundColor: '$green5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$green5',
        },
      },
    },
    {
      interactive: true,
      variant: 'lime',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$lime4',
          },
        },
        '&:active': {
          backgroundColor: '$lime5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$lime5',
        },
      },
    },
    {
      interactive: true,
      variant: 'yellow',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$yellow4',
          },
        },
        '&:active': {
          backgroundColor: '$yellow5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$yellow5',
        },
      },
    },
    {
      interactive: true,
      variant: 'orange',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$orange4',
          },
        },
        '&:active': {
          backgroundColor: '$orange5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$orange5',
        },
      },
    },
    {
      interactive: true,
      variant: 'gold',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$gold4',
          },
        },
        '&:active': {
          backgroundColor: '$gold5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$gold5',
        },
      },
    },
    {
      interactive: true,
      variant: 'bronze',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$bronze4',
          },
        },
        '&:active': {
          backgroundColor: '$bronze5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$bronze5',
        },
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
});
