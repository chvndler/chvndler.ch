import React from 'react';
import { cn } from '../../lib/utils';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id='wrap-three' className={cn(`wrap-layer1`)}>
      <div id='wrap-two' className={cn(`wrap-layer2 max-h-fit flex-1 px-3 pt-16`)}>
        <div
          id='wrap-one'
          className='container mx-auto h-auto min-h-screen w-full max-w-[620px] items-center'
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const UIWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='mx-auto flex w-full flex-col items-center justify-center'>
      <div
        id='ui-one'
        className='mx-auto w-full max-w-[620px] items-center justify-center px-3 pt-1'
      >
        {children}
      </div>
    </section>
  );
};
