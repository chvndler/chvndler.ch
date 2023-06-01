'use client';

import React from 'react';
import { useTheme } from 'next-themes';

import { SunFilled } from '../shared/svg/sun';
import { MoonOutlined } from '../shared/svg/moon';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {isHovering && (
        <span className='text-gray-400 my-auto mr-1 hidden items-center font-fraktion text-[9px] font-semibold uppercase transition-all duration-150 ease-linear md:inline'>
          {theme === null ? 'Theme' : theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}

      <button
        id='theme-toggle'
        className='h-auto w-auto bg-transparent text-grayscale-700 transition-colors duration-300 ease-in-out dark:text-grayscale-600'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        onClick={(ev) => {
          ev.preventDefault(), setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        <span className='sr-only'>Toggle mode</span>

        <span>
          {theme !== 'dark' ? (
            <>
              <MoonOutlined />
            </>
          ) : (
            <>
              <SunFilled />
            </>
          )}
        </span>
      </button>
    </>
  );
}
