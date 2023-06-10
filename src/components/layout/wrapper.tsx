import React from 'react';
import { cn } from '../../lib/utils';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id='wrap-three' className={cn(`wrap-layer1`)}>
      <div id='wrap-two' className={cn(`wrap-layer2 flex-1 px-3`)}>
        <div
          id='wrap-one'
          className='container mx-auto h-full w-full max-w-[620px] items-center py-20'
        >
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
