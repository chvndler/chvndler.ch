'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { SunFilled } from '../shared/svg/sun';
import { MoonOutlined } from '../shared/svg/moon';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className='flex flex-row items-center justify-center gap-1'>
        {isHovering && (
          <span className='my-auto mr-1 hidden items-center pt-0.5 font-favorit text-[10px] font-semibold uppercase text-carbon-400 transition-all duration-150 ease-linear md:inline'>
            {theme === null ? 'Theme' : theme === 'dark' ? 'DARK' : 'LITE'}
          </span>
        )}

        <button
          id='theme-toggle'
          className='h-auto w-auto bg-transparent text-carbon-700 transition-colors duration-300 ease-in-out dark:text-carbon-600'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          onClick={(ev) => {
            ev.preventDefault(), setTheme(theme === 'light' ? 'dark' : 'light');
          }}>
          <span className='sr-only'>Theme mode</span>

          <span className=''>
            {theme !== 'dark' ? <MoonOutlined /> : <SunFilled />}
          </span>
        </button>
      </div>
    </>
  );
}
