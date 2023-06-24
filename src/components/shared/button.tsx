'use client';

import React from 'react';

type ButtonProps = {
  href?: string;
  children?: React.ReactNode;
};

export const DesignerButton = (props: ButtonProps) => {
  return (
    <>
      <div className='flex flex-col gap-8'>
        <a
          className='super-title pointer-events-auto transition-opacity hover:opacity-80'
          href='/login'
          rel='noopener noreferrer'>
          <button className='btn is-primary pointer-events-auto w-[150px] rounded-full bg-carbon-200 px-6 py-2 text-sm font-semibold text-carbon-800 shadow-lg hover:shadow-md dark:bg-carbon-300 dark:text-carbon-900'>
            {props.children}
          </button>
        </a>
        <a
          className='btn is-secondary pointer-events-auto relative mb-4 flex w-[150px] items-center gap-8 text-center hover:opacity-80 sm:hidden sm:px-12'
          href='https://testflight.apple.com/join/0QyaAkxq'
          rel='noopener noreferrer'
          target='_blank'>
          <svg width='20' height='19' viewBox='0 0 20 19' xmlns='http://www.w3.org/2000/svg'>
            <path d='M9.99121 18.7598C14.9746 18.7598 19.0879 14.6465 19.0879 9.66309C19.0879 4.68848 14.9658 0.575195 9.98242 0.575195C5.00781 0.575195 0.90332 4.68848 0.90332 9.66309C0.90332 14.6465 5.0166 18.7598 9.99121 18.7598ZM15.8623 9.67188C15.8623 10.2959 15.0449 10.7793 14.0605 10.7793H12.127C11.9072 10.7793 11.8457 10.8145 11.6963 10.9639L8.51465 14.4004C8.40039 14.5322 8.24219 14.6113 8.0752 14.6113H7.47754C7.2666 14.6113 7.14355 14.4092 7.23145 14.1982L8.81348 10.7617L6.65137 10.5156L5.8252 11.9834C5.7373 12.1416 5.59668 12.2119 5.41211 12.2119H5.19238C4.99902 12.2119 4.86719 12.0801 4.86719 11.8867V7.45703C4.86719 7.26367 4.99902 7.13184 5.19238 7.13184H5.41211C5.59668 7.13184 5.7373 7.21094 5.8252 7.36035L6.65137 8.82812L8.81348 8.58203L7.23145 5.14551C7.14355 4.94336 7.2666 4.74121 7.47754 4.74121H8.0752C8.24219 4.74121 8.40039 4.82031 8.51465 4.94336L11.6963 8.37988C11.8457 8.53809 11.9072 8.56445 12.127 8.56445H14.0605C15.0449 8.56445 15.8623 9.04785 15.8623 9.67188Z'></path>
          </svg>
          <span className='w-full'>iOS Beta</span>
        </a>
      </div>
    </>
  );
};

export const GitButton = ({ children, href, ...props }: ButtonProps) => (
  <>
    <div>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <button
          {...props}
          className='rounded-lg border border-carbon-200 bg-carbon-50 px-4 py-1 font-archivo text-xs text-carbon-700 hover:opacity-80 hover:shadow-sm dark:border-carbon-700 dark:bg-carbon-800 dark:text-carbon-100'>
          {children}
        </button>
      </a>
    </div>
  </>
);
