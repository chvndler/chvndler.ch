'use client'

import {CDCLogo} from './cdc'
import {usePathname} from 'next/navigation'
import Link from 'next/link'

export function Logo() {
  const pathname = usePathname()
  return (
    <span className='link'>
      {pathname === '/' ? (
        <span className='link fw7 ttu dim f-center dark-gray f6 dib mr3 mr3-l hauss-mono'>
          Chandler®
        </span>
      ) : (
        <Link href='/'>
          <CDCLogo width={'60'} height={'22'} />
        </Link>
      )}
    </span>
  )
}
