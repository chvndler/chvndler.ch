import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { MenuIcon } from '@/components/icons/MenuIcon';
import { Box } from '@/ui';
import { styled } from '@/lib/stitches.config';
import { useTheme } from 'next-themes';


const StyledMenuButton = styled(Menu.Button, {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  borderRadius: '6px',
  height: '28px',
  width: '28px',
  paddingLeft: 0,
  paddingRight: 0,

  backgroundColor: '$voltYellow',
  color: '$mauve2',

  fontFamily: '$pragmaticaExtended',
  fontSize: 13,
});


const StyledMenuContainer = styled(Menu.Items, {
  margin: 'auto',
  marginTop: 5,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$mauve2',
  borderRadius: '12px',
  border: '1px solid $mauve6',
  minWidth: '80vw',
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: '10px',
  paddingBottom: '20px',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 0px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  outline: 'none',
});


const StyledMenuItem = styled(Menu.Item, {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  fontFamily: '$pragmaticaExtended',
  fontSize: 13,

  height: 'auto',
  paddingLeft: 10,
  paddingRight: 10,
  margin: 0,

  backgroundColor: 'transparent',
  color: '$mauve12',
});

const StyledButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  paddingLeft: 10,
  paddingRight: 10,

  height: '$5',
  fontVariantNumeric: 'tabular-nums',
  fontFamily: '$pragmaticaExtended',

  backgroundColor: 'transparent',
  color: '$mauve12',
  '&:hover': {
    color: '$mauve11',
  },
  '&:active': {
    backgroundColor: 'transparent',
  },
  '&:focus': {},
});

export const MenuButton = StyledMenuButton;
export const MenuItems = StyledMenuContainer;
export const MenuItem = StyledMenuItem;
export const SelectButton = StyledButton;


export const MenuDrop = () => {
  return (
    <Box
      css={{
        position: 'fixed',
        top: '0',
        right: '0',
        zIndex: '999',
        maxWidth: '100vw',
        width: '100%',
        padding: '9px',
        margin: 'auto',
      }}>


      <Menu as='div'>
        <MenuButton>
          <MenuIcon aria-hidden='true' />
        </MenuButton>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >

          <MenuItems>
            <Box css={{ padding: 4 }}>
              <MenuItem>
                <SelectButton>
                  blog
                </SelectButton>
              </MenuItem>
            </Box>

            <Box css={{ padding: 4 }}>
              <MenuItem>
                <SelectButton>
                  <span>projects</span>
                </SelectButton>
              </MenuItem>
            </Box>

            <Box css={{ padding: 4 }}>
              <MenuItem>
                <SelectButton>
                  <span>github</span>
                </SelectButton>
              </MenuItem>
            </Box>

            <Box css={{ padding: 4 }}>
              <MenuItem>
                <SelectButton>
                  <span>twitter</span>
                </SelectButton>
              </MenuItem>
            </Box>

            <MobileSystemAppearanceToggle />
          </MenuItems>
        </Transition>
      </Menu>
    </Box>
  );
};


const MobileSystemAppearanceToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Box css={{ padding: 4 }}>
      <MenuItem>
        <SelectButton onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}>
          <span>system appearance</span>
        </SelectButton>
      </MenuItem>
    </Box>
  );
};
