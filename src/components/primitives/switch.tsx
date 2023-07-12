'use client';

import * as React from 'react';
import * as SWITCH from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SWITCH.Root>,
  React.ComponentPropsWithoutRef<typeof SWITCH.Root>
>(({ className, ...props }, ref) => (
  <SWITCH.Root
    className={cn(
      'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center',
      'rounded-full border-2 border-transparent transition-colors focus-visible:outline-none',
      'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2',
      'focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className,
    )}
    {...props}
    ref={ref}>
    <SWITCH.Thumb
      className={cn(
        'bg-background pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      )}
    />
  </SWITCH.Root>
));
Switch.displayName = SWITCH.Root.displayName;

export { Switch };
