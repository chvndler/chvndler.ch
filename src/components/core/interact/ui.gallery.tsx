import Link from 'next/link';
import type { ComponentBase } from '@/lib/components';

type ARProps = {
  component: ComponentBase[];
};

export const ComponentList = ({ component }) => {
  const allComponents = component;

  return (
    <>
      {allComponents.map((compo, comp) => (
        <Link
          key={comp}
          href={compo.url}
          passHref>
          <div className='h-full'>
            <div className='flex h-full flex-col rounded-lg bg-carbon-50 px-4 py-6 hover:bg-carbon-100 hover:shadow-sm dark:border-carbon-800 dark:bg-carbon-900 dark:hover:bg-carbon-800 md:py-4 md:shadow-none'>
              <h2 className='pb-2 font-inter text-[16px] font-semibold leading-4 tracking-tight text-carbon-800 hover:text-carbon-700 dark:text-carbon-100 dark:hover:text-carbon-50'>
                {compo.title}
              </h2>
              <p className='font-inter text-[14px] font-medium leading-5 text-carbon-600 dark:text-carbon-300'>
                {compo.excerpt}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
