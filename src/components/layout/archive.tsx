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
        <div key={compo.slugAsParams}>
          <Link href={compo.url} className='underline-offset-2 hover:underline'>
            <h2 className='pb-2 font-medium leading-6 text-md font-ibmSans text-carbon-800 dark:text-carbon-100'>
              {compo.title}
            </h2>
          </Link>

          <p className='text-sm font-normal leading-5 font-ibmSans text-carbon-600 dark:text-carbon-300'>
            {compo.excerpt}
          </p>
        </div>
      ))}
    </>
  );
};
