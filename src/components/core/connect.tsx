import Link from 'next/link';
import Tooltip from '@/components/primitives/tooltip';
import { connects } from '@/lib/data/connect';

// server

export const Connect = () => (
  <>
    {/* <!-- Connect --> */}
    <div className='font-sohne text-sm'>
      <p className='pb-4 text-[16px] font-[500] leading-6 text-jade'>Connect</p>
      <div className='mt-3 grid gap-2'>
        {connects.map((template) => (
          <>
            <div className='grid grid-cols-1 items-start text-carbon-500 md:grid-cols-3'>
              <div>
                <p className='font-sohne text-[15px] font-[500] text-carbon-400 dark:text-carbon-400'>
                  {template.type}
                </p>
              </div>
              <div className='w-full md:col-span-2'>
                <p className='text-black dark:text-white'>
                  <Link
                    href={template.url}
                    title={template.type}
                    className='font-sohne text-[15px] font-[400] underline decoration-carbon-200 underline-offset-2 transition-all duration-300 hover:decoration-azure dark:decoration-carbon-700 dark:hover:decoration-azure'>
                    {template.title}
                  </Link>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  </>
);

