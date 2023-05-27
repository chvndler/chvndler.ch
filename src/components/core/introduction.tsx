import React from 'react';
import Link from 'next/link';

// server

const altrdsgn = 'https://www.altrdsgn.com';

export const Introduction = () => (
  <section id='intro-sect' className='border-b border-blackA4 py-6 dark:border-whiteA4'>
    <div className='mx-auto flex flex-col items-center py-6'>
      <div className='prose-blue mx-auto flex w-full flex-col text-left'>
        <div className='mx-auto w-full'>
          <h3 className='font-archivo text-[22px] font-bold leading-10 text-blackA11 dark:text-whiteA8'>
            Chandler.
          </h3>
          <p className='text-md max-w-lg font-archivo font-medium leading-6 text-blackA10 dark:text-whiteA12'>
            Creating cool and taking notes. Enjoying the internet and open-source, the focus in the
            moment is silencing the noise within design culture, with{' '}
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
