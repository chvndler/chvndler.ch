import { styled } from 'stitches.config';

export const Text = styled('span', {
  lineHeight: '1.5',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      '1': {
        fontSize: '$1'
      },
      '2': {
        fontSize: '$2'
      },
      '3': {
        fontSize: '$3'
      },
      '4': {
        fontSize: '$4'
      },
      '5': {
        fontSize: '$5',
        letterSpacing: '-.015em'
      },
      '6': {
        fontSize: '$6',
        letterSpacing: '-.016em'
      },
      '7': {
        fontSize: '$7',
        letterSpacing: '-.031em',
        textIndent: '-.005em'
      },
      '8': {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em'
      },
      '9': {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em'
      }
    },
    variant: {
      red: {
        color: '$red11'
      },
      crimson: {
        color: '$crimson11'
      },
      pink: {
        color: '$pink11'
      },
      purple: {
        color: '$purple11'
      },
      violet: {
        color: '$violet11'
      },
      indigo: {
        color: '$indigo11'
      },
      blue: {
        color: '$blue11'
      },
      cyan: {
        color: '$cyan11'
      },
      teal: {
        color: '$teal11'
      },
      green: {
        color: '$green11'
      },
      lime: {
        color: '$lime11'
      },
      yellow: {
        color: '$yellow11'
      },
      orange: {
        color: '$orange11'
      },
      gold: {
        color: '$gold11'
      },
      bronze: {
        color: '$bronze11'
      },
      gray: {
        color: '$slate11'
      },
      contrast: {
        color: '$chxn4'
      }
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    }
  },
  defaultVariants: {
    size: '3',
    variant: 'contrast'
  }
});

export const Code = styled(Text, {
  fontFamily: '$antarcticanMono'
});
