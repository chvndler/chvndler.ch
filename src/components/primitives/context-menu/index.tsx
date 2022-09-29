import { mauve, violet } from '@radix-ui/colors';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import React, { useState } from 'react';

const contentStyles = {
  width: 200,
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  padding: 5,
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
};

const StyledContent = styled(ContextMenuPrimitive.Content, { ...contentStyles });

const Content = ({ ...props }) => {
  return (
    <ContextMenuPrimitive.Portal>
      <StyledContent {...props} />
    </ContextMenuPrimitive.Portal>
  );
};

const StyledSubContent = styled(ContextMenuPrimitive.SubContent, { ...contentStyles });

const SubContent = ({ ...props }) => {
  return (
    <ContextMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </ContextMenuPrimitive.Portal>
  );
};

const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none'
  },

  '&[data-highlighted]': {
    backgroundColor: violet.violet9,
    color: violet.violet1
  }
};

const StyledItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(ContextMenuPrimitive.RadioItem, { ...itemStyles });
const StyledSubTrigger = styled(ContextMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11
  },
  ...itemStyles
});

const StyledLabel = styled(ContextMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11
});

const StyledSeparator = styled(ContextMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5
});

const StyledItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
});

// Exports
export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuContent = Content;
export const ContextMenuItem = StyledItem;
export const ContextMenuCheckboxItem = StyledCheckboxItem;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuRadioItem = StyledRadioItem;
export const ContextMenuItemIndicator = StyledItemIndicator;
export const ContextMenuLabel = StyledLabel;
export const ContextMenuSeparator = StyledSeparator;
export const ContextMenuSub = ContextMenuPrimitive.Sub;
export const ContextMenuSubTrigger = StyledSubTrigger;
export const ContextMenuSubContent = SubContent;

// Your app...
const Box = styled('div', {});

const Instruction = styled('div', {
  border: `2px white dashed`,
  color: 'white',
  borderRadius: 4,
  fontSize: 15,
  userSelect: 'none',
  padding: '45px 0',
  width: 300,
  textAlign: 'center',
  '&:hover': {
    cursor: 'crosshair'
  }
});

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: mauve.mauve11,
  '[data-highlighted] > &': { color: 'white' },
  '[data-disabled] &': { color: mauve.mauve8 }
});

export const ContextComponent = () => {
  const [person, setPerson] = useState('pedro');

  return (
    <Box>
      <ContextMenu>
        <ContextMenuTrigger>
          <Instruction>Right click here.</Instruction>
        </ContextMenuTrigger>

        <ContextMenuContent sideOffset={5} align="end">
          <ContextMenuItem>Home</ContextMenuItem>
          <ContextMenuItem>Save Logo as .svg</ContextMenuItem>

          <ContextMenuItem>
            Reload <RightSlot>⌘+R</RightSlot>
          </ContextMenuItem>
          <ContextMenuSeparator />

          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem value="pedro">
              <ContextMenuItemIndicator>
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">
              <ContextMenuItemIndicator>
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </Box>
  );
};
