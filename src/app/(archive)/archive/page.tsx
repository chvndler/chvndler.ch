import Link from 'next/link';
import { AppController } from '@/components/layout';
import { content } from '@/lib/website.config';

import { allComponents } from '@/lib/components';
import type { Component } from '@/lib/components';

type ARProps = {
  component: Component[];
};

export default function ArchiveIndex() {
  const copy = content.archive;

  return (
    <>
      <AppController>
        <section className='py-10'>
          <h3 className='font-archivo text-2xl font-normal tracking-tight text-carbon-700 dark:text-carbon-300'>
            {copy.heading.partial}{' '}
            <span className='font-archivo font-bold'>{copy.heading.bold}</span>
          </h3>

          <p className='text-md mb-6 font-ibmSans text-carbon-500 dark:text-carbon-400'>
            Implementing interfaces and interactions.
          </p>
        </section>

        <section className='py-10'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <PrimitiveList component={...allComponents.slice(0, 4)} />
          </div>
        </section>
      </AppController>
    </>
  );
}

export const PrimitiveList = ({ component }: ARProps) => {
  const allComponents = component;

  return (
    <>
      {allComponents.map((compo) => (
        <div key={compo.slugAsParams}>
          <Link href={compo.url} className='underline-offset-2 hover:underline'>
            <h2 className='text-md pb-2 font-ibmSans font-medium leading-6 text-carbon-800 dark:text-carbon-100'>
              {compo.title}
            </h2>
          </Link>

          <p className='font-ibmSans text-sm font-normal leading-5 text-carbon-600 dark:text-carbon-300'>
            {compo.excerpt}
          </p>
        </div>
      ))}
    </>
  );
};
