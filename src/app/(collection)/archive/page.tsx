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
          <h3 className='font-favorit text-2xl font-[400] uppercase tracking-tight text-carbon-700 dark:text-carbon-300'>
            {copy.heading.partial}{' '}
            <span className='font-favorit font-[600]'>{copy.heading.bold}</span>
          </h3>

          <p className='text-md mb-6 font-favorit text-carbon-500 dark:text-carbon-400'>
            Implementing interfaces and interactions.
          </p>
        </section>

        <section className='py-10'>
          <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-2 md:gap-y-2'>
            <PrimitiveList component={...components.slice(0, 6)} />
          </div>
        </section>
      </AppController>
    </>
  );
}
