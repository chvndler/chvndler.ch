import React from 'react';

const BadgeDefault = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className='font-archivo items-center whitespace-nowrap rounded-full bg-blackA4 px-2.5 py-0.5 text-[11px] font-[580] leading-4 text-grayscale-700 dark:bg-whiteA4 dark:text-grayscale-800'>
    {children}
  </span>
);

export {
  //
  BadgeDefault,
};
