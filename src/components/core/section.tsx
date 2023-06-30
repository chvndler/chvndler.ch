'use client';

import React from 'react';

export const Section = ({ children }: { children: React.ReactNode }) => (
  <section>
    <div className='mx-auto py-12'>
      <div className='mx-auto'>
        <div className='grid w-full gap-12 md:gap-24'>{children}</div>
      </div>
    </div>
  </section>
);

export const TestSection = ({ children }: { children: React.ReactNode }) => (
  <section>
    <div className='mx-auto py-12'>
      <div className='mx-auto'>
        <div className='grid w-full gap-12 md:gap-10'>{children}</div>
      </div>
    </div>
  </section>
);
