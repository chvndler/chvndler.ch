import Link from 'next/link';
import { connects } from '@/lib/data/connect';
import { cn } from '@/lib/utils';

export const Connect = () => (
  <div>
    <p
      className={cn(
        'pb-4 font-twk text-[17px] font-[500]',
        'leading-6 text-jade md:mr-4',
      )}>
      Connect
    </p>

    <div className='mt-3 grid gap-2 gap-y-3 border-b border-carbon-100 pb-8 dark:border-carbon-800'>
      {connects.map((template) => (
        <>
          <div
            key={template.title}
            className='grid grid-cols-1 items-start gap-y-0 md:grid-cols-3'>
            <div className='mx-auto flex w-full flex-row items-center justify-start gap-x-1 leading-5'>
              <p className='font-twk text-[15px] font-[500] lowercase text-carbon-500 dark:text-carbon-300'>
                {template.type}
              </p>
            </div>

            <div className='w-full md:col-span-2'>
              <Link
                href={template.url}
                target={template.target}
                title={template.type}
                className={cn(
                  'font-twk text-[14px] font-[400] text-carbon-400 underline decoration-carbon-200',
                  'underline-offset-2 transition-all duration-300 hover:text-carbon-500 hover:decoration-azure',
                  'dark:text-carbon-500 dark:decoration-carbon-700 dark:hover:text-carbon-300 dark:hover:decoration-azure',
                )}>
                {template.title}
              </Link>
            </div>
          </div>
        </>
      ))}
    </div>
  </div>
);
