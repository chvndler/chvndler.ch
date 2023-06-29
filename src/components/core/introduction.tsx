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
      <div className='flex flex-col w-full mx-auto text-left prose-blue'>
        <div className='w-full mx-auto'>
          <NumberEmail />
          <p className='max-w-[510px] font-aro text-[15px] font-[400] leading-6 text-carbon-500 dark:text-carbon-200 md:text-[16px]'>
            Creating cool and taking notes. Enjoying the internet and
            open-source, interested in design systems, component architectures,
            TypeScript, and React. The focus in the moment is silencing the
            noise within design culture, with{' '}
            <Link
              href={altrdsgn}
              target='_blank'
              className='text-carbon dark:text-carbon font-[500] hover:opacity-80 dark:hover:opacity-80'>
              atlrdsgn⌝
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);
