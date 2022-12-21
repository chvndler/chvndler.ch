/** @format */

import {styled} from 'stitches.config'

export const Heading = styled('span', {
  lineHeight: '1',
  margin: '0',
  fontWeight: 700,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      '1': {
        fontSize: '$6'
      },
      '2': {
        fontFamily: '$pragmaticaEx',
        fontSize: '$7'
      },
      '3': {
        fontSize: '$8',
        '@md': {
          fontSize: '$7'
        }
      },
      '4': {
        fontSize: '$9',
        '@md': {
          fontSize: '$8'
        }
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

    font: {
      inter: {
        fontFamily: '$inter'
      },
      pragmatica: {
        fontFamily: '$pragmatica'
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
        color: '$hiContrast'
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
})
