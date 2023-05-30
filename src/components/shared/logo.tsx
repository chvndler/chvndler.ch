import Link from 'next/link';

import { CDCLogo } from './svg/cdc';

export function Logo() {
  return (
    <>
      <div className='block'>
        <Link
          href='/'
          className='h-auto w-auto items-center leading-[20px] text-grey-400 transition-colors duration-300 ease-in-out hover:text-grey-600 dark:text-grey-300 dark:hover:text-grey-500'
        >
          <CDCLogo width={'58'} height={'20'} />
        </Link>
      </div>
    </>
  );
}
