'use client';

import * as React from 'react';
import * as ReactMenu from '@ark-ui/react';
import { cn } from '@/lib/utils';

const Dropdown = ReactMenu.Menu;
const DropdownTrigger = ReactMenu.MenuTrigger;
const DropdownItem = ReactMenu.MenuItem;

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
    <div className='flex items-end justify-end'>
      <Dropdown
        id='react-menu'
        onSelect={(id) => console.log(id)}>
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
            <MenuContent className='min-w-[200px] rounded-[12px] bg-carbon-50 p-[2px] shadow-lg dark:bg-carbon-800'>
              <DropdownMenuItem id='edit'>Edit</DropdownMenuItem>
              <DropdownMenuItem id='delete'>Delete</DropdownMenuItem>
            </MenuContent>
          </MenuPositioner>
        </Portal>
      </Dropdown>
    </div>
  );
};

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownItem>,
  React.ComponentPropsWithoutRef<typeof DropdownItem> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownItem
    ref={ref}
    className={cn(
      'rounded-[9px] bg-transparent dark:hover:bg-carbon-900',
      'px-3 py-1.5 text-left text-sm transition-colors hover:bg-carbon-100',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownItem.displayName;
