import React from 'react';

export const ComponentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section id='comp-contain' className='my-18 m-auto w-full border border-carbon-800 p-2'>
        {children}
      </section>
    </>
  );
};
