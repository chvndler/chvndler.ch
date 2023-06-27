import Link from 'next/link';
import type { Component } from '@/lib/components';

type ARProps = {
  component: Component[];
};

export const PrimitiveList = ({ component }: ARProps) => {
  const allComponents = component;

  return (
    <>
      {allComponents.map((compo) => (
        <div
          key={compo.slugAsParams}
          className='border-b border-carbon-100 py-6 dark:border-carbon-800 md:border-0 md:py-4'>
          <Link
            href={compo.url}
            className='underline-offset-2 hover:underline'>
            <h2 className='text-md pb-2 font-sohne font-[500] leading-4 text-carbon-800 dark:text-carbon-100'>
              {compo.title}
            </h2>
          </Link>

          <p className='font-sohne text-sm font-normal leading-5 text-carbon-600 dark:text-carbon-300'>
            {compo.excerpt}
          </p>
        </div>
      ))}
    </>
  );
};
