import { cn } from '@/lib/utils';
import React from 'react';

const BadgeDefault = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      '',
      'items-center justify-center text-center',
      'whitespace-nowrap rounded-full',
      'font-inter text-[11px] font-medium',
      'px-2.5 py-1 leading-4',

      'text-grayscale-700 bg-blackA4',
      'dark:text-grayscale-800 align-middle dark:bg-whiteA4',
    )}>
    {children}
  </span>
);

const BadgeAsButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      '',
      'items-center justify-center text-center',
      'whitespace-nowrap rounded-full',
      'font-inter text-sm font-medium',
      'px-2.5 py-1 leading-4',

      'text-grayscale-700 bg-blackA4',
      'dark:text-grayscale-800 align-middle dark:bg-whiteA4',
    )}>
    {children}
  </span>
);

export {
  //
  BadgeDefault,

  //
  BadgeAsButton,
};
