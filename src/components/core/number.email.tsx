import React from 'react';

export const NumberEmail = () => (
  <div className='mb-16 flex flex-col gap-1.5'>
    <p className='font-inter text-[15px] font-semibold leading-4 text-carbon-700 dark:text-carbon-50'>
      Chandler Chappell
    </p>

    <p className='font-inter text-[15px] font-normal leading-4 text-carbon-500 dark:text-carbon-50'>
      Frontend Developer, Designer
    </p>
    <p className='font-inter text-[15px] font-normal leading-4 text-carbon-500 dark:text-carbon-50'>
      Charlotte, N. Carolina
    </p>
  </div>
);

function Links() {
  return (
    <>
      <a
        href='tel:3362448939'
        className='max-w-fit font-mono text-xs font-medium leading-3 text-carbon-700 dark:text-carbon-50'
      >
        +33 62 44 89 39
      </a>
      <a
        href='mailto:chan@atlrdsgn.com'
        className='max-w-fit font-mono text-xs font-medium lowercase leading-3 text-carbon-700 dark:text-carbon-50'
      >
        CHAN@ATLRDSGN.COM
      </a>
    </>
  );
}
