'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './dropdown';

import clsx from 'clsx';

export const MobileMenu = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div className='flex items-end justify-end'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <p
              className={clsx(
                'pt-0.5 text-right font-favorit text-[10px] font-[500] hover:cursor-pointer',
                'uppercase leading-[20px] text-carbon-800 ring-1 dark:text-carbon-200',
                'ring-transparent',
              )}>
              MENU
            </p>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href='mailto:chan@atlrdsgn.com'>Contact</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/projects'>Internet Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/media'>Film Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/interact'>Interactions</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
