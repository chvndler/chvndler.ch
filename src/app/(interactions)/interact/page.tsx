import { AppController } from '@/components/layout';

import { allComponents } from '@/lib/data/components';
import { ComponentList } from '@/components/core/interact';

export default function InteractPage() {
  const components = allComponents;

  return (
    <>
      <AppController>
        <section className='py-10'>
          <h3 className='font-favorit text-xl font-[400] uppercase text-carbon-700 dark:text-carbon-300 md:text-2xl'>
            INTERACTIONS{' '}
            <span className='font-favorit font-[600]'>ARCHIVE</span>
          </h3>

          <p className='text-md mb-6 mt-2 font-twk leading-normal text-carbon-500 dark:text-carbon-400'>
            an endlessly growing archive of user interface designs and patterns.
          </p>
        </section>

        <section className='py-10'>
          <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-2'>
            <ComponentList component={components} />
          </div>
        </section>
      </AppController>
    </>
  );
}
