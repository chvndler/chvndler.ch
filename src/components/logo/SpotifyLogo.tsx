import * as React from 'react';
import { IconProps } from './types';

export const SpotifyLogo = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#1ed760', ...props },
   forwardedRef) => {
    return (
      <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}
           ref={forwardedRef}>
        <path
          d='M7.5,0.3c-4,0-7.2,3.2-7.2,7.2c0,4,3.2,7.2,7.2,7.2c4,0,7.2-3.2,7.2-7.2C14.7,3.5,11.5,0.3,7.5,0.3z
  			 M10.8,10.7c-0.1,0.2-0.4,0.3-0.6,0.1c-1.7-1-3.8-1.3-6.3-0.7C3.6,10.2,3.4,10,3.3,9.8C3.3,9.6,3.4,9.3,3.7,9.3
  			c2.7-0.6,5.1-0.4,7,0.8C10.9,10.2,10.9,10.5,10.8,10.7z M11.7,8.7c-0.2,0.3-0.5,0.3-0.8,0.2C9,7.7,6,7.4,3.7,8.1
  			C3.4,8.2,3.1,8,3,7.7C3,7.4,3.1,7.1,3.4,7C6,6.2,9.3,6.6,11.5,8C11.8,8.1,11.8,8.5,11.7,8.7z M11.8,6.7C9.4,5.3,5.6,5.2,3.4,5.9
  			C3,6,2.7,5.8,2.6,5.4C2.5,5,2.7,4.7,3,4.6c2.5-0.8,6.8-0.6,9.4,1c0.3,0.2,0.4,0.6,0.2,0.9C12.5,6.8,12.1,6.9,11.8,6.7z'
          fill={color}
          fillRule='evenodd'
          clipRule='evenodd'
        />
      </svg>
    );
  });

export default SpotifyLogo;
