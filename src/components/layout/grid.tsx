'use client';

import React from 'react';

export const TopLevelGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section>
        <div className='relative mx-auto w-full items-center pt-12'>
          <div className='mx-auto grid w-full grid-cols-1 gap-[4px]'>
            {children}
          </div>
        </div>
      </section>
    </>
  );
};
