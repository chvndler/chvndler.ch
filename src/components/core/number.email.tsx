import React from 'react';

export const NumberEmail = () => (
  <div className='flex flex-col gap-2 mb-8'>
    <p className='font-unica text-[15px] font-[600] leading-3 text-carbon-600 dark:text-carbon-50'>
      Chandler Chappell
    </p>

    <p className='font-unica text-[15px] font-[400] leading-3 text-carbon-400 dark:text-carbon-50'>
      Frontend Developer, Designer
    </p>
    <p className='font-unica text-[15px] font-[400] leading-3 text-carbon-400 dark:text-carbon-50'>
      Charlotte, N. Carolina
    </p>
  </div>
);

function Links() {
  return (
    <>
      <a
        href='tel:3362448939'
        className='font-mono text-xs font-medium leading-3 max-w-fit text-carbon-700 dark:text-carbon-50'
      >
        +33 62 44 89 39
      </a>
      <a
        href='mailto:chan@atlrdsgn.com'
        className='font-mono text-xs font-medium leading-3 lowercase max-w-fit text-carbon-700 dark:text-carbon-50'
      >
        CHAN@ATLRDSGN.COM
      </a>
    </>
  );
}
