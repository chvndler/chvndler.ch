import type React from 'react';

import type { IcxnProps } from './types';

export type IcxnVariant = 'C Logo' | 'Project' | 'Twitter' | 'GitHub' | 'Are.na';

export const Icxn = ({ variant, ...props }: IcxnProps) => {
  if (variant === 'C Logo') {
    return (
      <>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          {...props}
        >
          <path
            d="M12,0H4C1.8,0,0,1.8,0,4v8c0,2.2,1.8,4,4,4h8c2.2,0,4-1.8,4-4V4C16,1.8,14.2,0,12,0z M7.9,9.8c1.2,0,1.8-0.3,2.1-1.1h4.1
	c-0.2,0.8-0.6,1.5-1.6,2c-0.9,0.5-2.3,0.7-4.5,0.7c-2.2,0-6.3-0.1-6.3-3.4c0-3.3,4.1-3.4,6.3-3.4c2.2,0,5.6,0.2,6.1,2.7h-4.1
	c-0.1-0.4-0.5-1.1-2-1.1C6.6,6.2,5.7,6.7,5.7,8S6.6,9.8,7.9,9.8z"
          />
        </svg>
      </>
    );
  }

  if (variant === 'Project') {
    return (
      <>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          {...props}
        >
          <path d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
        </svg>
      </>
    );
  }

  if (variant === 'Twitter') {
    return (
      <>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          {...props}
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          ;
        </svg>
      </>
    );
  }

  if (variant === 'GitHub') {
    return (
      <>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          {...props}
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          ;
        </svg>
      </>
    );
  }

  if (variant === 'Are.na') {
    return (
      <>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          {...props}
        >
          <path
            d="M4.9,6.6c0.2,0,0.3-0.1,0.4-0.1C6,6.3,6.6,6,7.2,5.8c0.1-0.1,0.3-0.1,0.4-0.2c0.3-0.2,0.6-0.1,1,0c0.7,0.3,1.3,0.5,2,0.8
		c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1,0.4,0.1,0.5-0.3c0.1-0.8,0.2-1.5,0.3-2.3c0-0.1,0-0.3,0.1-0.4c0-0.1,0.1-0.2,0.3-0.2
		c0.1,0,0.2,0.1,0.3,0.2c0,0.2,0.1,0.5,0.1,0.7c0.1,0.6,0.2,1.3,0.3,1.9c0,0.1,0.1,0.3,0.1,0.4c0.2,0.1,0.4,0,0.6-0.1
		c0.7-0.3,1.4-0.6,2.1-0.8c0.2-0.1,0.3-0.2,0.5,0c0,0.1,0,0.3,0,0.4c-0.8,0.7-1.6,1.2-2.4,1.9c0,0.2,0.1,0.3,0.2,0.4
		c0.6,0.4,1.1,0.9,1.7,1.3c0.1,0.1,0.3,0.2,0.4,0.3c0,0.2,0,0.3,0,0.4c-0.1,0.2-0.3,0.1-0.5,0c-0.8-0.3-1.5-0.6-2.3-0.9
		c-0.1,0-0.1,0-0.1-0.1c-0.3-0.1-0.4,0-0.4,0.2c-0.1,0.6-0.2,1.1-0.2,1.7c0,0.3-0.1,0.6-0.1,0.9c0,0,0,0.1,0,0.1
		c-0.1,0.2-0.2,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.4-0.4c-0.1-0.6-0.2-1.3-0.3-1.9c0-0.2-0.1-0.5-0.1-0.7c0-0.1,0-0.3-0.2-0.4
		c-0.4,0.2-0.9,0.3-1.3,0.5c-0.4,0.2-0.8,0.3-1.2,0.5c-0.3,0.1-0.6,0.1-0.9,0C6.9,10,6.1,9.8,5.4,9.5c-0.1,0-0.2-0.1-0.3-0.1
		c-0.2,0-0.2,0.2-0.2,0.3c-0.1,0.8-0.2,1.6-0.3,2.5c0,0.1,0,0.2-0.1,0.3c0,0.2-0.2,0.3-0.3,0.2c-0.2,0-0.3-0.1-0.3-0.3
		c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.7-0.2-1.4-0.3-2.1c0-0.2,0-0.3-0.2-0.5C3,9.4,2.8,9.5,2.5,9.6c-0.6,0.3-1.3,0.5-1.9,0.8
		c-0.3,0.1-0.4,0.1-0.5-0.2c0-0.2,0.1-0.3,0.3-0.4c0.6-0.5,1.3-1,1.9-1.5c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0-0.3
		c0,0-0.1-0.1-0.2-0.1C1.7,7.2,1,6.7,0.4,6.2C0.3,6,0.1,5.9,0.1,5.7c0.2-0.3,0.2-0.3,0.5-0.2c0.5,0.2,1,0.4,1.4,0.6
		c0.3,0.1,0.6,0.2,0.9,0.4c0.1,0,0.1,0,0.1,0.1c0.2,0.1,0.4,0,0.4-0.2c0.1-0.6,0.2-1.2,0.2-1.7c0-0.3,0.1-0.5,0.1-0.8
		c0-0.1,0-0.1,0-0.2C3.9,3.4,4,3.3,4.2,3.3c0.1,0,0.2,0.1,0.3,0.3C4.5,4,4.6,4.4,4.6,4.8c0.1,0.5,0.1,0.9,0.2,1.4
		C4.9,6.3,4.9,6.4,4.9,6.6z M5.7,8c0.1,0.1,0.1,0.2,0.2,0.2c0.6,0.5,1.2,0.9,1.8,1.4c0.3,0.2,0.4,0.2,0.7,0C9,9.1,9.5,8.7,10.1,8.3
		c0.1-0.1,0.2-0.2,0.3-0.3c-0.1-0.1-0.2-0.2-0.3-0.3C9.5,7.2,9,6.8,8.4,6.4C8.1,6.1,8,6.1,7.7,6.4C7.1,6.8,6.6,7.2,6.1,7.6
		C5.9,7.7,5.9,7.8,5.7,8z"
          />
        </svg>
      </>
    );
  }

  return null;
};
