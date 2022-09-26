import { mauve } from '@radix-ui/colors';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import React from 'react';
import { CSS, keyframes, styled } from 'stitches.config';

import { Box, Text } from '@/components/ds';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
});

const StyledPopover = styled(PopoverPrimitive.Root, {
  zIndex: '99999',
  borderRadius: 0,
  padding: 0,
  margin: 0,
  overflow: 'hidden',
  width: '100vw',
  height: '100vh'
});

const StyledContent = styled(PopoverPrimitive.Content, {
  zIndex: '99999',
  borderRadius: 0,
  padding: 30,
  paddingLeft: 18,
  margin: 0,
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  backgroundColor: '$chxn11',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '600ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
});

type PopContentPrimitiveProps = React.ComponentProps<typeof PopoverPrimitive.Content>;
type PopContentProps = PopContentPrimitiveProps & { css?: CSS };
function Content({ children, ...props }: PopContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </PopoverPrimitive.Portal>
  );
}

const StyledClose = styled(PopoverPrimitive.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: 0,
  height: 'auto',
  width: 'auto',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$chxn8',
  position: 'absolute',
  top: 30,
  right: 18,
  '&:hover': {
    color: '$chxn8'
  }
});

// Exports
export const Popover = StyledPopover;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = Content;
export const PopoverClose = StyledClose;

// Your app...
const Flex = styled('div', { display: 'flex' });

const ItemItem = styled('div', {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: '19px',
  variants: {
    faded: {
      true: { color: '$chxn1' }
    },
    bold: {
      true: { fontWeight: 500 }
    }
  }
});

export const PopoverComponent = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Box css={{ padding: 0 }}>
        <Text
          css={{
            fontFamily: '$telegraf',
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'right',
            color: '$chxn4',
            '&:hover': {
              color: '$chxn6',
              cursor: 'pointer'
            }
          }}
        >
          MENU
        </Text>
      </Box>
    </PopoverTrigger>
    <PopoverContent>
      <Flex css={{ flexDirection: 'column', gap: 10 }}>
        <ItemItem bold faded css={{ marginBottom: 20, fontFamily: '$neueMontreal', fontSize: '2rem' }}>
          PROJECTS©
        </ItemItem>

        <ItemItem bold faded css={{ marginBottom: 20, fontFamily: '$neueMontreal', fontSize: '2rem' }}>
          ABOUT
        </ItemItem>

        <ItemItem bold faded css={{ marginBottom: 20, fontFamily: '$neueMontreal', fontSize: '2rem' }}>
          NOTES
        </ItemItem>
      </Flex>
      <PopoverClose aria-label="Close">
        <Box css={{ padding: 0 }}>
          <Text
            css={{
              fontFamily: '$telegraf',
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'right',
              color: '$chxn1',
              '&:hover': {
                color: '$chxn4',
                cursor: 'pointer'
              }
            }}
          >
            CLOSE
          </Text>
        </Box>
      </PopoverClose>
    </PopoverContent>
  </Popover>
);
