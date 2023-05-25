import Link from 'next/link'

import {CDCLogo} from '../svg/cdc'

export function Logo() {
  return (
    <>
      <div className='block'>
        <Link
          href='/'
          className='items-center w-auto h-auto leading-[20px] transition-colors duration-300 ease-in-out text-grayscale-600 hover:text-grayscale-700'
        >
          <CDCLogo width={'56'} height={'20'} />
        </Link>
      </div>
    </>
  )
}
