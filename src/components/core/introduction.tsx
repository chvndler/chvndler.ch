import React from 'react';
import Link from 'next/link';
import { NumberEmail } from './number.email';

// server

const altrdsgn = 'https://www.atlrdsgn.com/';

export const Introduction = () => (
  <section
    id='intro-sect'
    className=''>
    <div className='flex flex-col items-center mx-auto'>
      <div className='flex flex-col w-full mx-auto text-left'>
        <div className='w-full mx-auto'>
          <NumberEmail />
          <p className='max-w-[510px] font-sohne text-[16px] font-[400] leading-6 text-carbon-600 dark:text-carbon-400'>
            Creating cool and taking notes, enjoying the internet and
            open-source. Interested in design systems, component architectures,
            TypeScript, and React. The focus in the moment is silencing the
            noise surrounding design, with{' '}
            <Link
              href={altrdsgn}
              target='_blank'
              className='text-carbon font-[500] hover:opacity-70 dark:text-carbon-500 dark:hover:opacity-70'>
              atlrdsgn®⌝
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);
