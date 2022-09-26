import { mauve, violet } from '@radix-ui/colors';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import React from 'react';
import { CSS, keyframes, styled } from 'stitches.config';

import { Button } from '@/components/ds';

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

const contentStyles = {
  zIndex: '9999',
  minWidth: '100vw',
  minHeight: '80vh',
  width: '100%',
  backgroundColor: '$chxn1',
  border: '1px solid $chxn2',
  borderRadius: 10,
  padding: 5,
  marginTop: 10,
  paddingBottom: 55,
  boxShadow: '0px 5px 28px -15px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
};

const StyledContent = styled(DropdownMenuPrimitive.Content, { ...contentStyles });

type DropContentPrimitiveProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>;
type DropContentProps = DropContentPrimitiveProps & { css?: CSS };
const Content = ({ children, ...props }: DropContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </DropdownMenuPrimitive.Portal>
  );
};

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent, { ...contentStyles });

type SubContentPrimitiveProps = React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>;
type SubContentProps = SubContentPrimitiveProps & { css?: CSS };
const SubContent = (props: SubContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </DropdownMenuPrimitive.Portal>
  );
};

const itemStyles = {
  all: 'unset',
  fontFamily: '$neueMontreal',
  fontWeight: '600',
  fontSize: 34,
  textTransform: 'uppercase',
  lineHeight: 1,
  color: '$chxn4',
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  height: 45,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 12,
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none'
  },

  '&[data-highlighted]': {
    backgroundColor: '$colors$chxn2',
    color: '$tartOrange'
  }
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11
  },
  ...itemStyles
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 12,
  fontFamily: '$telegraf',
  fontSize: 16,
  fontWeight: '400',
  lineHeight: '25px',
  color: '$tartOrange'
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: '$chxn6',
  margin: 5
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
});

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubTrigger = StyledSubTrigger;
export const DropdownMenuSubContent = SubContent;

// Your app...
const Box = styled('div', {});

export const MenuComponent = () => {
  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="1"
            color="nothing"
            css={{ fontFamily: '$telegraf', fontSize: 14, fontWeight: 'bold', textAlign: 'right' }}
          >
            MENU
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuLabel>index</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href="/">INDEX</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/projects">PROJECTS</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/notes">NOTES</Link>
          </DropdownMenuItem>
          <DropdownMenuLabel>settings</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href="/enter">ENTER</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/color">COLOR</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/developing">DEVELOPING</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};
