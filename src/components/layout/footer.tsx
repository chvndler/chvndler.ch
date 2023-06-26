import React from 'react';
import Link from 'next/link';
import { ModularTime } from '../primitives/modul.ar';

export const Footer = () => {
  return (
    <footer className='relative w-full border-t border-carbon-100 px-3 dark:border-carbon-800'>
      <div className='mx-auto my-2 flex max-w-[620px] items-center justify-center py-2 text-center'>
        <span className='text-left font-mono text-[13px] font-[600] uppercase leading-4 tracking-wide text-carbon-500 dark:text-carbon-600'>
          <ModularTime />
        </span>

        <div className='grow text-right font-sohne text-[14px] font-medium text-carbon-500 hover:text-carbon-700 dark:text-carbon-600 dark:hover:text-carbon-600'>
          <Link target='_blank' href='https://twitter.com/chvndlerch'>
            @chvndlerch
          </Link>
        </div>
      </div>
    </footer>
  );
};
