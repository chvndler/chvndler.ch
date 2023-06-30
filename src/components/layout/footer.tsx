import React from 'react';
import Link from 'next/link';
// import ModularTime from '../primitives/modul.ar';

export const Footer = () => {
  return (
    <footer className='relative w-full px-3 border-t border-carbon-100 dark:border-carbon-800'>
      <div className='mx-auto my-2 flex max-w-[620px] items-center justify-center py-2 text-center'>
        <span className='text-left font-helmet text-[12px] font-[600] uppercase leading-4 tracking-wide text-carbon-300 dark:text-carbon-600'>
          {/* <!-- hold <ModularTime /> in state --> */}© something like this
          but not this
        </span>

        <div className='app-gray grow text-right font-walter text-[13px] font-bold hover:text-carbon-700 dark:text-carbon-600 dark:hover:text-carbon-600'>
          <Link
            target='_blank'
            href='https://twitter.com/chvndlerch'>
            @chvndlerch
          </Link>
        </div>
      </div>
    </footer>
  );
};
