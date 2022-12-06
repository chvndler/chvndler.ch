import * as HoverCard from '@radix-ui/react-hover-card';
import { keyframes, styled } from 'stitches.config';

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

const PortalStyles = styled(HoverCard.Portal, {
  backgroundImage: `linear-gradient(330deg, hsl(272, 53%, 50%) 0%, hsl(226, 68%, 56%) 100%)`,
  border: '1px solid red',
  maxWidth: 600,
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
});

const RootStyles = styled(HoverCard.Root, {
  backgroundImage: `linear-gradient(330deg, hsl(272, 53%, 50%) 0%, hsl(226, 68%, 56%) 100%)`,
  border: '1px solid red',
  maxWidth: 600,
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
});

const HoverCardContentStyles = styled(HoverCard.Content, {
  borderRadius: 16,
  padding: 20,
  width: 300,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 13px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '600ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade }
  }
});

const ArrowStyles = styled(HoverCard.Arrow, {
  fill: 'white'
});

const ImageTriggerStyles = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px white` }
});

const StyledImg = styled('img', {
  display: 'block',
  borderRadius: '100%',
  variants: {
    size: {
      normal: { width: 45, height: 45 },
      large: { width: 60, height: 60 }
    }
  },
  defaultVariants: {
    size: 'normal'
  }
});

export const HoverCardRoot = RootStyles;
export const HoverCardPortal = PortalStyles;
export const HoverCardContent = HoverCardContentStyles;
export const ImageTrigger = ImageTriggerStyles;
export const HoverCardArrow = ArrowStyles;

export const HoverImg = StyledImg;
