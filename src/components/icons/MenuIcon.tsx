import * as React from 'react';
import { IconProps } from '@/components/logo/types';

export const MenuIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.766,3.75c0-0.243,0.199-0.441,0.442-0.441h10.584c0.244,0,0.442,0.195,0.442,0.441v0.442
	c0,0.243-0.199,0.441-0.442,0.441H2.208c-0.244,0-0.442-0.195-0.442-0.441L1.766,3.75z M1.766,7.279
	c0-0.243,0.199-0.441,0.442-0.441h10.584c0.244,0,0.442,0.195,0.442,0.441v0.442c0,0.243-0.199,0.441-0.442,0.441H2.208
	c-0.244,0-0.442-0.195-0.442-0.441L1.766,7.279z M1.766,10.808c0-0.243,0.199-0.441,0.442-0.441h10.584
	c0.244,0,0.442,0.195,0.442,0.441v0.442c0,0.243-0.199,0.441-0.442,0.441H2.208c-0.244,0-0.442-0.195-0.442-0.441L1.766,10.808z' />
      </svg>
    );
  },
);

MenuIcon.displayName = 'menu-icon';
