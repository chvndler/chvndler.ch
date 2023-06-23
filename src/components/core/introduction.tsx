import React from 'react';
import Link from 'next/link';
import { NumberEmail } from './number.email';

// server

const altrdsgn = 'https://www.atlrdsgn.com/';

export const Introduction = () => (
  <section id='intro-sect' className='py-6'>
    <div className='mx-auto flex flex-col items-center py-6'>
      <div className='prose-blue mx-auto flex w-full flex-col text-left'>
        <div className='mx-auto w-full'>
          <NumberEmail />
          <p className='max-w-lg font-ibmSans text-[15px] font-normal leading-5 text-carbon-500 dark:text-carbon-200'>
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
