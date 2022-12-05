import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled, theme } from 'stitches.config';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  boxSizing: 'border-box',
  display: 'flex',
  flexShrink: 0,
  position: 'relative',
  border: `1.5px solid ${theme.colors.honeySuckle}`,
  fontFamily: 'inherit',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  fontWeight: '500' as any,
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.12)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    boxShadow: 'inset 0px 0px 2px rgba(0, 0, 0, 0.12)'
  },

  variants: {
    size: {
      '1': {
        width: 16,
        height: 16
      },
      '2': {
        width: 20,
        height: 20
      },
      '3': {
        width: 45,
        height: 45
      },
      '4': {
        width: 60,
        height: 60
      },
      '5': {
        borderRadius: 18,
        width: 100,
        height: 100
      }
    },
    variant: {
      hiContrast: {
        backgroundColor: theme.colors.blackA10,
        color: theme.colors.chxn13
      },
      gray: {
        backgroundColor: theme.colors.slate5
      }
    },
    shape: {
      square: {
        borderRadius: 18
      },
      circle: {
        borderRadius: '50%'
      }
    },
    inactive: {
      true: {
        opacity: '.3'
      }
    },
    interactive: {
      true: {
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          opacity: '1',
          backgroundColor: 'rgba(0,0,0,.02)',
          pointerEvents: 'none',
          transition: 'opacity 25ms linear'
        },
        '@hover': {
          '&:hover': {
            '&::after': {
              opacity: '0'
            }
          }
        },
        '&[data-state="open"]': {
          '&::after': {
            backgroundColor: 'rgba(0,0,0,.2)',
            opacity: '0'
          }
        }
      }
    }
  },
  defaultVariants: {
    size: '2',
    variant: 'gray',
    shape: 'circle'
  }
});

const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  display: 'flex',
  objectFit: 'cover',
  boxSizing: 'border-box',
  height: '100%',
  verticalAlign: 'middle',
  width: '100%'
});

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: 'uppercase',

  variants: {
    size: {
      '1': {
        fontSize: '10px',
        lineHeight: '15px'
      },
      '2': {
        fontSize: '$3'
      },
      '3': {
        fontSize: '$6'
      },
      '4': {
        fontSize: '$7'
      },
      '5': {
        fontSize: '$8'
      },
      '6': {
        fontSize: '$9'
      }
    }
  },
  defaultVariants: {
    size: '2'
  }
});

export const AvatarComponent = StyledAvatar;
export const AvatarImage = StyledAvatarImage;
export const AvatarFallback = StyledAvatarFallback;
