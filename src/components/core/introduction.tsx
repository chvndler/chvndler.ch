import React from 'react';
import Link from 'next/link';

// server

const altrdsgn = 'https://www.atlrdsgn.com/';

export const Introduction = () => (
  <section id='intro-sect' className='py-6 border-b border-blackA4 dark:border-whiteA4'>
    <div className='flex flex-col items-center py-6 mx-auto'>
      <div className='flex flex-col w-full mx-auto text-left prose-blue'>
        <div className='w-full mx-auto'>
          <h3 className='font-archivo text-[20px] font-semibold leading-10 tracking-tight text-carbon-700 dark:text-carbon-50'>
            Chandler Chappell.
          </h3>
          <p className='max-w-lg font-normal leading-6 text-md font-ibmSans text-carbon-500 dark:text-carbon-200'>
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
