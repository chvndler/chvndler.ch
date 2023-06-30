import Link from 'next/link';

import { CLogo } from './svg/c';

export default function Logo() {
  return (
    <>
      <div className='block'>
        <Link
          href='/'
          className='h-auto w-auto items-center leading-[20px] transition-all duration-200 ease-in-out hover:text-jade hover:blur-[2px] dark:hover:text-jade'>
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
