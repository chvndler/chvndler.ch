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
        <span className='text-gray-400 my-auto mr-1 hidden items-center font-sohne text-[9px] font-semibold uppercase transition-all duration-150 ease-linear md:inline'>
          {theme === null ? 'Theme' : theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}

      <button
        id='theme-toggle'
        className='w-auto h-auto transition-colors duration-300 ease-in-out bg-transparent text-carbon-700 dark:text-carbon-600'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        onClick={(ev) => {
          ev.preventDefault(), setTheme(theme === 'light' ? 'dark' : 'light');
        }}>
        <span className='sr-only'>Theme mode</span>

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
