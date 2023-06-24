import React from 'react';
import type { SVGLogoProps } from './svg';

/**
 * CDC© Logo
 *
 * copyright © 2023 CDC. All rights reserved.
 */
const logoColor = 'currentColor';
export const CDCLogo = React.forwardRef<SVGSVGElement, SVGLogoProps>(
  ({ color = logoColor, width = 'auto', height = 'auto', ...props }, forwardedRef) => {
    return (
      <svg
        {...props}
        ref={forwardedRef}
        width={width}
        height={height}
        viewBox='0 0 140 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M106.59 12.24C111.44 12.24 112.95 15.08 113.31 17.04H127.46C126.71 12.08 123.87 9.21001 120.29 7.56001L128.16 5.33001H108.19C108.19 5.33001 108.14 5.33001 108.11 5.34001C107.59 5.34001 107.08 5.33001 106.59 5.33001C99.72 5.33001 87.56 5.71001 85.26 16.23C84.74 12.59 83.29 9.99001 80.96 8.25001L91.3 5.32001H26.13C26.06 5.33001 25.99 5.33001 25.92 5.34001C25.79 5.34001 25.66 5.34001 25.54 5.34001C25.07 5.34001 24.6 5.33001 24.16 5.33001C16.55 5.33001 2.45001 5.79001 2.45001 20C2.45001 34.21 16.55 34.67 24.16 34.67C31.77 34.67 36.62 33.56 39.69 31.56C42.32 29.87 43.75 27.52 44.61 24.65V33.71H69.3C78.4 33.71 83.86 30.57 85.18 23.29C87.21 34.29 99.63 34.67 106.6 34.67C114.25 34.67 119.06 33.56 122.13 31.56C125.24 29.56 126.67 26.65 127.47 23.04H113.32C112.3 26.34 109.94 27.76 105.98 27.76C101.4 27.76 98.24 25.57 98.24 20C98.24 14.43 101.49 12.24 106.6 12.24H106.59ZM44.6 5.57001V15.13C43.47 11.28 40.89 8.94001 37.75 7.51001L44.6 5.57001ZM30.87 23.03C29.85 26.33 27.49 27.75 23.53 27.75C18.95 27.75 15.79 25.56 15.79 19.99C15.79 14.42 19.04 12.23 24.15 12.23C29 12.23 30.51 15.07 30.87 17.03H44.6V23.02H30.87V23.03ZM64.35 26.55H57.14V12.48H64.35C70.09 12.48 72.4 15.02 72.4 19.51C72.4 24 70.09 26.54 64.35 26.54V26.55Z'
          fill={color}
        />
        <path
          d='M127.93 29.82C127.93 27.05 129.94 25.04 132.71 25.04H132.78C135.55 25.04 137.56 27.05 137.56 29.82V29.89C137.56 32.66 135.55 34.67 132.78 34.67H132.71C129.94 34.67 127.93 32.66 127.93 29.89V29.82ZM132.71 33.65H132.78C134.91 33.65 136.47 32.02 136.47 29.89V29.82C136.47 27.69 134.91 26.06 132.78 26.06H132.71C130.57 26.06 129.03 27.67 129.03 29.82V29.89C129.03 32.02 130.58 33.65 132.71 33.65ZM130.17 29.9V29.79C130.17 27.92 131.02 27.04 132.74 27.04H132.85C134.78 27.04 135.17 28.22 135.17 28.95V29.02H133.59V28.95C133.59 28.63 133.39 28.2 132.84 28.2H132.75C132.1 28.2 131.77 28.66 131.77 29.8V29.91C131.77 31.05 132.1 31.51 132.75 31.51H132.84C133.38 31.51 133.59 31.07 133.59 30.76V30.69H135.15V30.76C135.15 31.49 134.77 32.67 132.83 32.67H132.74C131.02 32.67 130.17 31.78 130.17 29.92V29.9Z'
          fill={color}
        />
      </svg>
    );
  }
);

CDCLogo.displayName = 'CDCLogo';
