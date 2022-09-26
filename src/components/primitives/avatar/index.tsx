import React from 'react';
import { styled, VariantProps, CSS } from 'stitches.config';
import { Box } from '@/components/ds';
import { violet } from '@radix-ui/colors';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

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
  border: '1px solid $chxn2',
  fontFamily: 'inherit',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  fontWeight: '500' as any,
  color: '$hiContrast',

  '&:hover': {
    border: '1px solid $chxn3'
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)'
  },

  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3'
      },
      '2': {
        width: 46,
        height: 46
      },
      '3': {
        width: '$6',
        height: '$6'
      },
      '4': {
        width: '$7',
        height: '$7'
      },
      '5': {
        width: '$8',
        height: '$8'
      },
      '6': {
        width: '$9',
        height: '$9'
      }
    },
    variant: {
      gray: {
        backgroundColor: '$slate5'
      }
    },
    shape: {
      square: {
        borderRadius: '$2'
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
          backgroundColor: 'rgba(0,0,0,.08)',
          opacity: '0',
          pointerEvents: 'none',
          transition: 'opacity 25ms linear'
        },
        '@hover': {
          '&:hover': {
            '&::after': {
              opacity: '1'
            }
          }
        },
        '&[data-state="open"]': {
          '&::after': {
            backgroundColor: 'rgba(0,0,0,.12)',
            opacity: '1'
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
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit'
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,

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

// Exports
type AvatarVariants = VariantProps<typeof StyledAvatar>;
type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarOwnProps = AvatarPrimitiveProps &
  AvatarVariants & {
    css?: CSS;
    alt?: string;
    src?: string;
    fallback?: React.ReactNode;
  };

export const Avatar = React.forwardRef<React.ElementRef<typeof StyledAvatar>, AvatarOwnProps>(
  ({ alt, src, fallback, size, variant, shape, css, ...props }, forwardedRef) => {
    return (
      <Box
        css={{
          position: 'relative',
          height: 'fit-content',
          width: 'fit-content'
        }}
      >
        <StyledAvatar {...props} ref={forwardedRef} size={size} variant={variant} shape={shape}>
          <StyledAvatarImage alt={alt} src={src} />
          <StyledFallback size={size}>{fallback}</StyledFallback>
        </StyledAvatar>
      </Box>
    );
  }
);
/*
// Your app...
const Flex = styled('div', { display: 'flex' });

const AvatarDemo = () => (
  <Flex css={{ gap: 20 }}>
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <AvatarFallback delayMs={600}>CT</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <AvatarFallback delayMs={600}>JD</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>PD</AvatarFallback>
    </Avatar>
  </Flex>
);

export default AvatarDemo;
*/
