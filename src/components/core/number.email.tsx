import React from 'react';
import { TextSwitcher } from '@/components/primitives/hover.switch';

export const NumberEmail = () => (
  <div className='mb-14 flex flex-col gap-1.5'>
    <TextSwitcher
      defaultText={'Chandler Chappell'}
      hoverText={'+33 62 44 89 39'}
      className=''
    />

    <p className='font-favorit text-[16px] font-normal leading-4 text-carbon-500 dark:text-carbon-100'>
      frontend developer, designer
    </p>
    <p className='font-favorit text-[16px] font-normal leading-4 text-carbon-500 dark:text-carbon-100'>
      chan@atlrdsgn.com
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
