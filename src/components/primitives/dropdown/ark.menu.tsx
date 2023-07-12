'use client';

import {
  Menu,
  MenuArrow,
  MenuArrowTip,
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuOptionItem,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  Portal,
} from '@ark-ui/react';
import clsx from 'clsx';

export const MobileArkMenu = () => {
  return (
    <Menu>
      <MenuTrigger asChild>
        <p
          className={clsx(
            'pt-0.5 text-right font-favorit text-[10px] font-[500] hover:cursor-pointer',
            'uppercase leading-[20px] text-carbon-800 dark:text-carbon-200',
          )}>
          MENU
        </p>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent className='rounded-md bg-carbon-50 p-2 shadow-lg'>
            <MenuItem
              id='edit'
              className='bg-transparent hover:bg-carbon-100 dark:hover:bg-carbon-900'>
              Edit
            </MenuItem>
            <MenuItem id='delete'>Delete</MenuItem>
            <MenuItem id='export'>Export</MenuItem>
            <MenuItem id='duplicate'>Duplicate</MenuItem>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu>
  );
};
