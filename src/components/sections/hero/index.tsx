import { styled } from 'stitches.config';

export const HeroSection = styled('div', {
  boxSizing: 'border-box',
  zIndex: '1',
  margin: 'auto',
  width: '100vw',
  flexShrink: 0,
  verticalAlign: 'middle',
  horizontalAlign: 'middle',
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
      1: {
        height: 'auto',
        paddingTop: '30px',
        paddingBottom: '30px'
      },
      2: {
        height: 'auto',
        paddingTop: '50px',
        paddingBottom: '50px'
      },
      3: {
        height: 'auto',
        paddingTop: '80px',
        paddingBottom: '80px'
      }
    },
    color: {
      loContrast: {
        backgroundColor: '$loContrast'
      },
      accent: {
        backgroundColor: '$chxn3'
      },
      gray: {
        backgroundColor: '$chxn1'
      },
      default: {
        backgroundColor: '$chxn1'
      },
      clear: {
        backgroundColor: 'transparent'
      }
    },
    alignment: {
      responsiveLeft: {
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        horizontalAlign: 'middle',
        '@sm': {
          textAlign: 'left',
          alignItems: 'left',
          justifyContent: 'start'
        },
        '@md': {
          textAlign: 'left',
          alignItems: 'left',
          justifyContent: 'start'
        }
      },
      responsiveRight: {
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        horizontalAlign: 'middle',
        '@sm': {
          textAlign: 'right',
          alignItems: 'right',
          justifyContent: 'end'
        },
        '@md': {
          textAlign: 'right',
          alignItems: 'right',
          justifyContent: 'end'
        }
      },
      center: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        horizontalAlign: 'middle'
      }
    },

    border: {
      true: {
        borderBottom: '1px solid'
      }
    }
  },

  defaultVariants: {
    size: '1',
    color: 'loContrast'
  }
});
