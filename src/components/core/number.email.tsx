import React from 'react';

export const NumberEmail = () => (
  <div className='mb-14 flex flex-col gap-1.5'>
    <p className='font-sohne text-[16px] font-[600] leading-4 text-charcoal dark:text-carbon-50'>
      Chandler Chappell
    </p>

    <p className='font-sohne text-[16px] font-[400] leading-4 text-carbon-500 dark:text-carbon-100'>
      Frontend Developer, Designer
    </p>
    <p className='font-sohne text-[16px] font-[400] leading-4 text-carbon-500 dark:text-carbon-100'>
      Charlotte, N. Carolina
    </p>
  </div>
);

function Links() {
  return (
    <>
      <a
        href='tel:3362448939'
        className='font-mono text-xs font-medium leading-3 max-w-fit text-carbon-700 dark:text-carbon-50'>
        +33 62 44 89 39
      </a>
      <a
        href='mailto:chan@atlrdsgn.com'
        className='font-mono text-xs font-medium leading-3 lowercase max-w-fit text-carbon-700 dark:text-carbon-50'>
        CHAN@ATLRDSGN.COM
      </a>
    </>
  );
}
