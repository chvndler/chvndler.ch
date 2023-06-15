import React from 'react';

import { cn } from '@/lib/utils';

export const ComponentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section id='comp-contain' className='w-full p-2 m-auto border my-18 border-carbon-800'>
        {children}
      </section>
    </>
  );
};

export const PrimitiveWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        id='primitive-x'
        className='mx-auto w-full rounded-md bg-carbon-50 px-4 py-14 shadow-sminner dark:bg-carbon-900 md:px-[92px]'
      >
        <div className={cn('primitive_inner px-0 py-3')}>{children}</div>
      </div>
    </>
  );
};

/*
.craft_inner__kCT4a {
  position: relative;
  z-index: 1;
  overflow: hidden;
  isolation: isolate;
  padding: 10%;
  background: var(--mono2);
  border: 1px solid var(--mono4);
  border-radius: var(--radius-l);
}
*/
