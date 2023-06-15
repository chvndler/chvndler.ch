import Link from 'next/link';
import { AppController } from '@/components/layout';
import { content } from '@/lib/website.config';

import { allComponents } from '@/lib/components';
import { PrimitiveList } from '@/components/layout';

export default function ArchiveIndex() {
  const copy = content.archive;
  const components = allComponents;

  return (
    <>
      <AppController>
        <section className='py-10'>
          <h3 className='text-2xl font-normal tracking-tight font-archivo text-carbon-700 dark:text-carbon-300'>
            {copy.heading.partial}{' '}
            <span className='font-bold font-archivo'>{copy.heading.bold}</span>
          </h3>

          <p className='mb-6 text-md font-ibmSans text-carbon-500 dark:text-carbon-400'>
            Implementing interfaces and interactions.
          </p>
        </section>

        <section className='py-10'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <PrimitiveList component={...components.slice(0, 4)} />
          </div>
        </section>
      </AppController>
    </>
  );
}
