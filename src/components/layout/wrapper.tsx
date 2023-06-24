import React from 'react';
import { cn } from '../../lib/utils';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id='wrap-three' className={cn(`wrap-layer1`)}>
      <div id='wrap-two' className={cn(`wrap-layer2 flex-1 px-3`)}>
        <div
          id='wrap-one'
          className='container mx-auto h-full w-full max-w-[640px] items-center py-20'>
          {children}
        </div>
      </div>
    </div>
  );
};

export const AppLiner = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={cn(`m-0 h-screen min-h-screen overflow-hidden p-0`)}>{children}</section>
  );
};

export const ComponentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section id='comp-contain' className='my-18 m-auto w-full border border-carbon-800 p-2'>
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
        className='mx-auto w-full rounded-md bg-carbon-50 px-4 py-14 shadow-sminner dark:bg-carbon-900 md:px-[92px]'>
        <div className={cn('primitive_inner px-0 py-3')}>{children}</div>
      </div>
    </>
  );
};
