import * as PopoverPrimitive from '@radix-ui/react-popover';
import Link from 'next/link';
import React from 'react';
import { CSS, keyframes, styled } from 'stitches.config';

import { Box, Text } from '@/components/ds';

/*
const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});
*/

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
  margin: 20,
  overflow: 'hidden',
  width: '100vw',
  height: '100vh'
});

const StyledContent = styled(PopoverPrimitive.Content, {
  zIndex: '99999',
  borderRadius: 0,
  paddingTop: 40,
  paddingBottom: 40,
  paddingLeft: 18,
  paddingRight: 18,
  margin: 0,
  marginTop: 10,
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  backgroundColor: '$blur',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(40px)',
  saturate: '200%',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '900ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideDownAndFade },
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
  position: 'absolute',
  top: 25,
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
  color: '$chxn4',
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
        <ItemItem bold css={{ marginBottom: 20, fontFamily: '$neueMontreal', fontSize: '2rem' }}>
          <Link href="/projects">PROJECTS</Link>
        </ItemItem>

        <ItemItem bold css={{ marginBottom: 20, fontFamily: '$neueMontreal', fontSize: '2rem' }}>
          <Link href="/about">ABOUT</Link>
        </ItemItem>

        <ItemItem bold css={{ marginBottom: 20, fontFamily: '$neueMontreal', fontSize: '2rem' }}>
          <Link href="/notes">NOTES</Link>
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
              color: '$chxn4',
              '&:hover': {
                color: '$chxn9',
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
