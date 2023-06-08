import React from 'react';
import Link from 'next/link';

// server

const altrdsgn = 'https://www.atlrdsgn.com/';

export const Introduction = () => (
  <section id='intro-sect' className='border-b border-blackA4 py-6 dark:border-whiteA4'>
    <div className='mx-auto flex flex-col items-center py-6'>
      <div className='prose-blue mx-auto flex w-full flex-col text-left'>
        <div className='mx-auto w-full'>
          <h3 className='font-archivo text-[20px] font-semibold leading-10 tracking-tight text-carbon-700 dark:text-carbon-50'>
            Chandler Chappell.
          </h3>
          <p className='text-md max-w-lg font-archivo font-normal leading-6 text-carbon-500 dark:text-carbon-200'>
            Creating cool and taking notes. Enjoying the internet and open-source, interested in
            design systems, component architectures, TypeScript, and React. The focus in the moment
            is silencing the noise within design culture, with{' '}
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
