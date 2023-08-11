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
      <div className='p-4 md:w-1/2'>..</div>
      <div className='pb-20 pl-4 pr-4 pt-4 md:w-1/2'>
        <h3
          className={cn(
            'pb-4 font-baikal text-[14px] font-[400]',
            'lowercase leading-6 text-jade',
          )}>
          information
        </h3>

        <p
          className={cn(
            'max-w-[510px] font-sohne text-[16px] font-[400] lowercase leading-5 text-carbon-600',
            'dark:text-carbon-400 md:text-[18px] md:leading-6',
          )}>
          Creating cool and taking notes, enjoying the internet and open-source.
          Interested in design systems, component architectures, TypeScript, and
          React. The focus in the moment is silencing the noise surrounding
          design, with{' '}
          <Link
            href={altrdsgn}
            target='_blank'
            className='text-carbon font-[500] hover:opacity-70 dark:text-carbon-500 dark:hover:opacity-70'>
            atlrdsgn⌝
          </Link>
          .
        </p>
      </div>
    </>
  );
}

/*
<div class="grid grid-cols-3 gap-4">
  <div class="...">Info</div>
  <div class="col-span-2">
  Anim voluptate consectetur esse esse magna. Occaecat velit eiusmod minim. 
  Consequat ut sunt esse velit culpa. Mollit duis eiusmod laborum incididunt esse in eiusmod. 
  Mollit magna culpa do dolor ullamco in est in magna cupidatat aliquip aute quis do id.
  </div>
</div>
*/
