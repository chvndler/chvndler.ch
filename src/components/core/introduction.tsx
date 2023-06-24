import React from 'react';
import Link from 'next/link';
import { NumberEmail } from './number.email';

// server

const altrdsgn = 'https://www.atlrdsgn.com/';

export const Introduction = () => (
  <section id='intro-sect' className='py-6'>
    <div className='flex flex-col items-center py-6 mx-auto'>
      <div className='flex flex-col w-full mx-auto text-left prose-blue'>
        <div className='w-full mx-auto'>
          <NumberEmail />
          <p className='max-w-[510px] font-unica text-[15px] font-[500] leading-5 text-carbon-500 dark:text-carbon-200'>
            Creating cool and taking notes. Enjoying the internet and open-source,
            interested in design systems, component architectures, TypeScript, and React.
            The focus in the moment is silencing the noise within design culture, with{' '}
            <Link
              href={altrdsgn}
              target='_blank'
              className='font-semibold text-B500 hover:opacity-80 dark:text-B600 dark:hover:opacity-80'
            >
              atlrdsgn
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);
