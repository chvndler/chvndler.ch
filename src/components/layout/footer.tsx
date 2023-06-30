import React from 'react';
import Link from 'next/link';
// import ModularTime from '../primitives/modul.ar';

export const Footer = () => {
  return (
    <footer className='relative w-full border-t border-carbon-100 px-3 dark:border-carbon-800'>
      <div className='mx-auto my-2 flex max-w-[620px] items-center justify-center py-2 text-center'>
        <span className='text-left font-sohne text-[10px] font-[400] uppercase leading-4 tracking-wide text-carbon-300 dark:text-carbon-600'>
          {/* <!-- hold <ModularTime /> in state --> */}© something like this
          but not this
        </span>

        <div className='app-gray grow text-right font-sohne text-[13px] font-[500] hover:text-carbon-700 dark:text-carbon-600 dark:hover:text-carbon-600'>
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
