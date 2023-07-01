import Link from 'next/link';
import Tooltip from '@/components/primitives/tooltip';
import { connects } from '@/lib/data/connect';

// server

export const Connect = () => (
  <>
    {/* <!-- Connect --> */}
    <div className='text-sm font-favorit'>
      <p className='pb-4 text-[14px] font-[600] uppercase leading-6 text-jade'>
        Connect
      </p>
      <div className='grid gap-2 mt-3 gap-y-3'>
        {connects.map((template) => (
          <>
            <div className='grid items-start grid-cols-1 text-carbon-500 md:grid-cols-3'>
              <div>
                <p className='font-favorit text-[12px] font-[500] uppercase text-carbon-500 dark:text-carbon-300'>
                  {template.type}
                </p>
              </div>
              <div className='w-full md:col-span-2'>
                <Link
                  target={template.target}
                  href={template.url}
                  title={template.type}
                  className='font-favorit text-[14px] font-[400] text-carbon-400 underline decoration-carbon-200 underline-offset-2 transition-all duration-300 hover:text-carbon-500 hover:decoration-azure dark:text-carbon-500 dark:decoration-carbon-700 dark:hover:text-carbon-300 dark:hover:decoration-azure'>
                  {template.title}
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  </>
);

