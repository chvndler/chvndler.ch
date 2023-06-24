import React from 'react';

export const TopLevelGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section>
        <div className='relative mx-auto w-full items-center py-12'>
          <div className='mx-auto grid w-full grid-cols-1 gap-2 lg:grid-cols-2'>{children}</div>
        </div>
      </section>
    </>
  );
};
