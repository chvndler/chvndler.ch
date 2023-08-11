import type { Metadata } from 'next';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '(sand) Sandbox',
  description: 'Projects I have worked on, and am currently working on.',
};

const altrdsgn = 'https://www.atlrdsgn.com/';

export default function SandboxEnvironment() {
  return (
    <>
      <div className='grid grid-cols-1 gap-4 px-[12px] md:grid-cols-3 md:px-0'>
        <div className=''>
          Chandler Chappell
          <br />
          Position
        </div>
        <div className='col-span-2'>
          <p
            className={cn(
              'max-w-[510px] font-sohne text-[15px] font-[400] lowercase leading-5 text-carbon-500',
              'dark:text-carbon-400 md:text-[18px] md:leading-6',
            )}>
            Creating cool and taking notes, enjoying the internet and
            open-source. Interested in design systems, component architectures,
            TypeScript, and React. The focus in the moment is silencing the
            noise surrounding design, with{' '}
            <Link
              href={altrdsgn}
              target='_blank'
              className='font-[500] text-carbon-400 hover:opacity-70 dark:text-carbon-500 dark:hover:opacity-70'>
              atlrdsgn⌝
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
