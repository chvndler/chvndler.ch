import Link from 'next/link';

// import { CLogo } from './svg/c';
import { CDCPill } from './svg/pill.cdc';

export default function Logo() {
  return (
    <>
      <div className='block'>
        <Link
          href='/'
          className='h-auto w-auto items-center leading-[20px] transition-all duration-200 ease-in-out hover:text-jade hover:blur-[2px] dark:hover:text-jade'>
          <CDCPill
            height='22'
            width='60'
          />

          {/* <!--
          <CLogo />
          --> */}
        </Link>
      </div>
    </>
  );
}
