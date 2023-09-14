import React from 'react';
import Link from 'next/link';
import { TextSwitcher } from './text.switch';

import { cn } from '@/lib/utils';

export const NumberEmail = () => (
  <div className='mb-14 flex flex-col gap-1.5'>
    <TextSwitcher
      defaultText={'chandler chappell'}
      hoverText={'+1 336 244 8939'}
      href='sms:+13362448939'
      className=''
    />
    <p
      className={cn(
        'font-twk text-[16px] font-[400] lowercase leading-4',
        'text-carbon-400 dark:text-carbon-400',
      )}>
      Frontend developer, Designer
    </p>
    <Link
      href='mailto:chan@atlrdsgn.com'
      className={cn(
        'font-twk text-[16px] font-[400] lowercase leading-4 text-carbon-400',
        'hover:text-azure dark:text-carbon-400',
      )}>
      chan@atlrdsgn.com
    </Link>
  </div>
);
