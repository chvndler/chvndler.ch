import Link from 'next/link';
import type { Component } from '@/lib/components';

type ARProps = {
  component: Component[];
};

export const ComponentList = ({ component }: ARProps) => {
  const allComponents = component;

  return (
    <>
      {allComponents.map((compo) => (
        <div
          key={compo.slugAsParams}
          className='rounded-lg border-b border-carbon-100 bg-transparent px-4 py-6 shadow-sm hover:bg-carbon-100 dark:border-carbon-800 dark:bg-carbon-900 dark:hover:bg-carbon-800 md:border-0 md:py-4 md:shadow-none'>
          <Link
            href={compo.url}
            className='underline-offset-2'>
            <h2 className='pb-2 font-favorit text-[16px] font-[500] leading-4 tracking-tight text-carbon-800 hover:text-carbon-700 dark:text-carbon-100 dark:hover:text-carbon-50'>
              {compo.title}
            </h2>
          </Link>

          <p className='font-favorit text-[13px] font-normal leading-5 text-carbon-600 dark:text-carbon-300'>
            {compo.excerpt}
          </p>
        </div>
      ))}
    </>
  );
};
