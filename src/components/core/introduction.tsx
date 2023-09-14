import React from 'react';
import Link from 'next/link';
import { NumberEmail } from './number.email';
import { cn } from '@/lib/utils';

// server

const altrdsgn = 'https://www.atlrdsgn.com/';

export const Introduction = () => (
  <section
    id='intro-sect'
    className=''>
    <div className='mx-auto flex flex-col items-center'>
      <div className='mx-auto flex w-full flex-col text-left'>
        <div className='mx-auto w-full'>
          <NumberEmail />
          <p
            className={cn(
              'max-w-[560px] font-twk text-[16px] font-[400] lowercase leading-normal text-carbon-400',
              'dark:text-carbon-400 md:text-[16px] md:leading-normal',
            )}>
            creating cool and taking notes, enjoying the internet and
            open-source. passionate about systems, component architectures,
            TypeScript, and React. exploring ideas and practicing design with{' '}
            <Link
              href={altrdsgn}
              target='_blank'
              className='text-carbon font-[600] hover:text-azure hover:opacity-70 dark:text-carbon-500 dark:hover:opacity-70'>
              atlrdsgn⌝
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);
