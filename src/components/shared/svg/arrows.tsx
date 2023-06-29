import React from 'react';
import type { SVGLogoProps } from './svg';

/**
 * CDC© Logo
 *
 * copyright © 2023 CDC. All rights reserved.
 */
const iconColor = '#6A7280';
export const SmallArrowRight = React.forwardRef<SVGSVGElement, SVGLogoProps>(
  (
    { color = iconColor, width = 'auto', height = 'auto', ...props },
    forwardedRef,
  ) => {
    return (
      <svg
        {...props}
        ref={forwardedRef}
        width='12'
        height='12'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          width='16'
          height='16'
          fill='none'
        />
        <path
          d='M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z'
          fill={color}
        />
      </svg>
    );
  },
);

SmallArrowRight.displayName = 'SmallArrowRight';
