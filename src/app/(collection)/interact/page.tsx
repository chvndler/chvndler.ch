import { AppController } from '@/components/layout';

import { allComponents } from '@/lib/components';
import { ComponentList } from '@/components/core/interact';

export default function Interactive() {
  const components = allComponents;

  return (
    <>
      <AppController>
        <section className='py-10'>
          <h3 className='font-favorit text-xl font-[400] uppercase text-carbon-700 dark:text-carbon-300 md:text-2xl'>
            INTERACTIONS{' '}
            <span className='font-favorit font-[600]'>ARCHIVE</span>
          </h3>

          <p className='text-md mb-6 font-favorit text-carbon-500 dark:text-carbon-400'>
            an ever-expanding collection of archived interfaces and patterns.
          </p>
        </section>

        <section className='py-10'>
          <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-2 md:gap-y-2'>
            <ComponentList component={...components} />
          </div>
        </section>
      </AppController>
    </>
  );
}
