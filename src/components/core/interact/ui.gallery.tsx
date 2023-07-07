import Link from 'next/link';
import type { Component } from '@/lib/components';
import { cn } from '@/lib/utils';

type ARProps = {
  component: Component[];
};

export const ComponentList = ({ component }: ARProps) => {
  const allComponents = component;

  return (
    <>
      {allComponents.map((compo, comp) => (
        <Link
          key={comp}
          href={compo.url}
          className='h-full'>
          <div
            key={comp}
            className={cn(
              'rounded-lg bg-transparent px-4 py-6 hover:bg-carbon-100 hover:shadow-sm',
              'dark:border-carbon-800 dark:bg-carbon-900 dark:hover:bg-carbon-800 md:py-4 md:shadow-none',
            )}>
            <h2
              className={cn(
                'pb-2 font-favorit text-[16px] font-[500] leading-4 tracking-tight text-carbon-800',
                'hover:text-carbon-700 dark:text-carbon-100 dark:hover:text-carbon-50',
              )}>
              {compo.title}
            </h2>
            <p
              key={comp}
              className='font-favorit text-[13px] font-normal leading-5 text-carbon-600 dark:text-carbon-300'>
              {compo.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};
