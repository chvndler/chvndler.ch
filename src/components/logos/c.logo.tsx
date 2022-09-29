import type { LxgoProps } from './types';

export const CLogo = ({ ...props }: LxgoProps) => {
  return (
    <>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 38" width="50" height="32" {...props}>
        <path
          d="M44.5,20.6c-0.6,2-1.5,3.5-3.6,4.6c-2.1,1.1-5.4,1.7-10.6,1.7c-5.2,0-14.8-0.2-14.8-7.9c0-7.6,9.6-7.9,14.8-7.9
			c5.1,0,13.1,0.4,14.2,6.3h-9.7c-0.2-1.1-1.3-2.6-4.6-2.6c-3.5,0-5.7,1.2-5.7,4.2s2.1,4.2,5.3,4.2c2.7,0,4.3-0.7,5-2.5H44.5z"
        />
        <path
          d="M57.1,2.8l-3.5,3.5c-0.4,0.4-1,0.4-1.4,0l-0.3-0.3c-0.4-0.4-0.4-1,0-1.4l3.5-3.5c0.4-0.4,1-0.4,1.4,0l0.3,0.3
			C57.5,1.8,57.5,2.4,57.1,2.8z"
        />
        <path
          d="M57.1,35.2l-3.5-3.5c-0.4-0.4-1-0.4-1.4,0l-0.3,0.3c-0.4,0.4-0.4,1,0,1.4l3.5,3.5c0.4,0.4,1,0.4,1.4,0l0.3-0.3
			C57.5,36.2,57.5,35.6,57.1,35.2z"
        />
        <path
          d="M2.9,2.8l3.5,3.5c0.4,0.4,1,0.4,1.4,0l0.3-0.3c0.4-0.4,0.4-1,0-1.4L4.6,1.2c-0.4-0.4-1-0.4-1.4,0L2.9,1.4
			C2.5,1.8,2.5,2.4,2.9,2.8z"
        />
        <path
          d="M2.9,35.2l3.5-3.5c0.4-0.4,1-0.4,1.4,0l0.3,0.3c0.4,0.4,0.4,1,0,1.4l-3.5,3.5c-0.4,0.4-1,0.4-1.4,0l-0.3-0.3
			C2.5,36.2,2.5,35.6,2.9,35.2z"
        />
      </svg>
    </>
  );
};