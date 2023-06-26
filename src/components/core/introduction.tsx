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
          <p className='max-w-[510px] font-sohne text-[16px] font-[400] leading-6 text-carbon-500 dark:text-carbon-200'>
            Creating cool and taking notes. Enjoying the internet and open-source, interested in
            design systems, component architectures, TypeScript, and React. The focus in the moment
            is silencing the noise within design culture, with{' '}
            <Link
              href={altrdsgn}
              target='_blank'
              className='font-[500] text-B500 hover:opacity-80 dark:text-B600 dark:hover:opacity-80'>
              atlrdsgn⌝
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);

function TestType() {
  return (
    <>
      <p className='font-sohne text-[16px] font-[200] leading-4 tracking-normal text-carbon-700 dark:text-carbon-50'>
        Lorem ipsum dolor sit amet.
      </p>
      <p className='font-sohne text-[16px] font-[300] leading-4 tracking-normal text-carbon-700 dark:text-carbon-50'>
        Lorem ipsum dolor sit amet.
      </p>
      <p className='font-sohne text-[16px] font-[400] leading-4 tracking-normal text-carbon-700 dark:text-carbon-50'>
        Lorem ipsum dolor sit amet.
      </p>
      <p className='font-sohne text-[16px] font-[500] leading-4 tracking-normal text-carbon-700 dark:text-carbon-50'>
        Lorem ipsum dolor sit amet.
      </p>
      <p className='font-sohne text-[16px] font-[600] leading-4 tracking-normal text-carbon-700 dark:text-carbon-50'>
        Lorem ipsum dolor sit amet.
      </p>
      <p className='font-sohne text-[16px] font-[700] leading-4 tracking-normal text-carbon-700 dark:text-carbon-50'>
        Lorem ipsum dolor sit amet.
      </p>
      <p className='font-sohne text-[16px] font-[800] leading-4 tracking-normal text-carbon-700 dark:text-carbon-50'>
        Lorem ipsum dolor sit amet.
      </p>
      <p className='font-sohne text-[16px] font-[900] leading-4 tracking-normal text-carbon-700 dark:text-carbon-50'>
        Lorem ipsum dolor sit amet.
      </p>
    </>
  );
}
