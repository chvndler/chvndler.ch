'use client'

import {CDCLogo} from './cdc'
import {usePathname} from 'next/navigation'
import Link from 'next/link'

export function Logo() {
  const pathname = usePathname()
  return (
    <span className='max-h-[22px]'>
      {pathname === '/' ? (
        <span className='text-gray10 block dark:text-gray10 font-bold uppercase leading-5 text-[13px] font-sfmono'>
          Chandler®
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
