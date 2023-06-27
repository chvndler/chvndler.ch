'use client';

import React from 'react';

export const Section = ({ children }: { children: React.ReactNode }) => (
  <section>
    <div className='py-12 mx-auto'>
      <div className='mx-auto'>
        <div className='grid w-full gap-12 md:gap-24'>{children}</div>
      </div>
    </div>
  </section>
);
