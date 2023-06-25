'use client';

import { useRouter } from 'next/navigation';

function RouterPrev() {
  const router = useRouter();

  return (
    <button type='button' onClick={() => router.back()}>
      <BackButton />
    </button>
  );
}

function BackButton() {
  return (
    <span className='inline-flex items-center justify-center text-carbon-500 hover:text-carbon-600 dark:text-carbon-400 dark:hover:text-carbon-300'>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M7.99655 14.9931C11.8241 14.9931 14.9931 11.8173 14.9931 7.99655C14.9931 4.16903 11.8173 1 7.9897 1C4.16903 1 1 4.16903 1 7.99655C1 11.8173 4.17589 14.9931 7.99655 14.9931ZM7.99655 13.8271C4.75894 13.8271 2.17296 11.2342 2.17296 7.99655C2.17296 4.75894 4.75208 2.1661 7.9897 2.1661C11.2274 2.1661 13.8271 4.75894 13.8271 7.99655C13.8271 11.2342 11.2342 13.8271 7.99655 13.8271ZM9.34785 11.3919C9.5605 11.1793 9.55365 10.85 9.3547 10.658L6.53551 7.99655L9.3547 5.34884C9.5605 5.15678 9.55365 4.81381 9.341 4.61489C9.14895 4.42969 8.8334 4.43654 8.62075 4.63547L5.76726 7.3312C5.37628 7.6879 5.37628 8.31895 5.76726 8.67565L8.62075 11.3714C8.81285 11.5497 9.1695 11.5635 9.34785 11.3919Z'
          fill='currentColor'
        />
      </svg>
      <span className='ml-1 text-sm'></span>
    </span>
  );
}

export default RouterPrev;
