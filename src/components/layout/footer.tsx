import Link from 'next/link';
import { AriePosition, CommitSha } from '../shared';

// server

export const Footer = () => (
  <footer className='relative w-full px-3'>
    <div className='mx-auto mt-3 flex max-w-[620px] items-end pb-6 pt-3 text-center'>
      <div className='my-auto flex flex-col items-start justify-start gap-y-1'>
        <span className='text-left font-ibmMono text-[13px] font-[680] uppercase leading-4 tracking-wide'>
          <CommitSha />
        </span>
        <span className='text-left font-ibmMono text-[13px] font-normal uppercase leading-4 tracking-wide text-carbon-500 dark:text-carbon-400'>
          <AriePosition />
        </span>
        <span className='text-left font-ibmMono text-[13px] font-normal uppercase leading-4 tracking-wide text-carbon-500 dark:text-carbon-400'>
          © {new Date().getFullYear()} Chandler®
        </span>
      </div>

      <div className='grow text-right font-archivo text-[13px] font-normal text-carbon-500 hover:text-carbon-700 dark:text-carbon-400 dark:hover:text-carbon-600'>
        <Link target='_blank' href='https://twitter.com/chvndlerch'>
          @chvndlerch
        </Link>
      </div>
    </div>
  </footer>
);
