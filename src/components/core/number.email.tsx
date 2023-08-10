import React from 'react';
import Link from 'next/link';
import { TextSwitcher } from '@/components/primitives/hover.switch';

import { cn } from '@/lib/utils';

export const NumberEmail = () => (
  <div className='mb-14 flex flex-col gap-1.5'>
    <TextSwitcher
      defaultText={'chandler chappell'}
      hoverText={'+33 62 44 89 39'}
      href='tel:3362448939'
      className=''
    />
    <p
      className={cn(
        'font-baikal text-[16px] font-[400] lowercase leading-4 md:text-[18px]',
        'text-carbon-400 dark:text-carbon-400',
      )}>
      Frontend developer, Designer
    </p>
    <Link
      href='mailto:chan@atlrdsgn.com'
      className='font-baikal text-[16px] font-[400] lowercase leading-4 text-carbon-400 dark:text-carbon-400 md:text-[18px]'>
      chan@atlrdsgn.com
    </Link>
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
