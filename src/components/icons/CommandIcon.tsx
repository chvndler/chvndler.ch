import * as React from 'react';
import { IconProps } from '@/components/logo/types';

const CommandIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d='M3.762,13.5H1.234l2.553-12h2.528L5.176,6.822h0.05L10.781,1.5h2.985L8.12,7.014l3.252,6.486H8.569L6.057,8.519
		l-1.53,1.447L3.762,13.5z' />
      </svg>
    );
  },
);

export default CommandIcon;
CommandIcon.displayName = 'cmdk-icon';
