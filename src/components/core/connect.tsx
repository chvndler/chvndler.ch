import Link from 'next/link';
import { connects } from '@/lib/data/connect';
import { te } from 'date-fns/locale';

// server

export const Connect = () => (
  <div className='font-favorit text-sm'>
    <p className='pb-4 text-[14px] font-[600] uppercase leading-6 text-jade'>
      Connect
    </p>
    <div className='mt-3 grid gap-2 gap-y-3'>
      {connects.map((template, id) => (
        <div key={id}>
          <div className='grid grid-cols-1 items-start text-carbon-500 md:grid-cols-3'>
            <p
              key={template.type}
              className='font-favorit text-[12px] font-[500] uppercase text-carbon-500 dark:text-carbon-300'>
              {template.type}
            </p>
          </div>
          <div
            key={id}
            className='w-full md:col-span-2'>
            <Link
              key={template.url}
              target={template.target}
              href={template.url}
              title={template.type}
              className='font-favorit text-[14px] font-[400] text-carbon-400 underline decoration-carbon-200 underline-offset-2 transition-all duration-300 hover:text-carbon-500 hover:decoration-azure dark:text-carbon-500 dark:decoration-carbon-700 dark:hover:text-carbon-300 dark:hover:decoration-azure'>
              {template.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);
