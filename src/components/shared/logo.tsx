import Link from 'next/link';

import { CDCLogo } from './svg/cdc';

export default function Logo() {
  return (
    <>
      <div className='block'>
        <Link
          href='/'
          className='h-auto w-auto items-center leading-[20px] text-carbon-400 transition-all duration-500 ease-in-out hover:text-B500 hover:blur-[2.8px] dark:text-carbon-500 dark:hover:text-B600'>
          <CDCLogo
            width={'58'}
            height={'20'}
          />
        </Link>
      </div>
    </>
  );
}
