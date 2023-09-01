'use client';

import React from 'react';

export const Section = ({ children }: { children: React.ReactNode }) => (
  <section>
    <div className='mx-auto py-12'>
      <div className='grid w-full gap-12 md:gap-24'>{children}</div>
    </div>
  </section>
);

export const ColumnSection = ({ children }: { children: React.ReactNode }) => (
  <section>
    <div className='mx-auto py-12'>
      <div className='grid w-full gap-12 md:gap-24'>{children}</div>
    </div>
  </section>
);
