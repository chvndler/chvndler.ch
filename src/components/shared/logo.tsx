import Link from 'next/link';

import { CLogo } from './svg/c';

export default function Logo() {
  return (
    <>
      <div className='block'>
        <Link
          href='/'
          className='h-auto w-auto items-center leading-[20px] transition-all duration-500 ease-in-out hover:text-B500 hover:blur-[2.8px] dark:hover:text-B600'>
          {/* <!--
          <CDCLogo
            width={'58'}
            height={'20'}
          />
          --> */}

          <CLogo />
        </Link>
      </div>
    </>
  );
}
