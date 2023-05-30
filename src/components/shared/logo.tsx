import Link from 'next/link';

import { CDCLogo } from './svg/cdc';

export function Logo() {
  return (
    <>
      <div className='block'>
        <Link
          href='/'
          className='h-auto w-auto items-center leading-[20px] text-carbon-400 transition-colors duration-300 ease-in-out hover:text-B500 dark:text-carbon-500 dark:hover:text-B600'
        >
          <CDCLogo width={'58'} height={'20'} />
        </Link>
      </div>
    </>
  );
}
