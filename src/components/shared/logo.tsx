import Link from 'next/link';

import { CDCLogo } from './svg/cdc';

export function Logo() {
  return (
    <>
      <div className="block">
        <Link
          href="/"
          className="h-auto w-auto items-center leading-[20px] text-blackA11 transition-colors duration-300 ease-in-out hover:text-blackA9 dark:text-whiteA11 dark:hover:text-whiteA9"
        >
          <CDCLogo width={'58'} height={'20'} />
        </Link>
      </div>
    </>
  );
}
