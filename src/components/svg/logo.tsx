'use client'

import {CDCLogo} from './cdc'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {CursorPosition} from '../slices'

export function Logo() {
  const pathname = usePathname()
  return (
    <span className='max-h-[22px]'>
      {pathname === '/' ? (
        <span className='font-[640] text-grayscale-800 dark:text-gray10 hover:text-grayA8 uppercase leading-5 text-[14px] font-fraktion transition-colors ease-in-out duration-400'>
          {/* <!-- <span className='text-stone-800 block dark:text-gray10 font-extrabold uppercase leading-5 text-[15px] font-tstar tracking-wide'> --> */}
          <CursorPosition />
        </span>
      ) : (
        <Link
          href='/'
          className='items-center leading-5 transition-opacity duration-300 ease-in-out text-hypergrape hover:opacity-70'
        >
          <CDCLogo width={'56'} height={'20'} />
        </Link>
      )}
    </span>
  )
}
