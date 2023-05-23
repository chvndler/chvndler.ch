import Link from 'next/link'
import {CursorPosition} from '../slices/user-position'
import {GitSha} from '../slices/git-sha'

// server

export const Footer = () => (
  <footer className='absolute bottom-0 left-0 right-0'>
    <div className='flex items-center max-w-xl px-3 pt-3 pb-6 mx-auto mt-3 font-mono text-xs text-center'>
      <div className='font-semibold text-left uppercase grow font-sfmono text-grayA10'>
        Chandler Ch. –
        <Link target='_blank' href='https://twitter.com/chvndlerch'>
          @chvndlerch
        </Link>
      </div>
      <div className='font-semibold text-right uppercase grow font-sfmono text-grayA10'>
        <Link target='_blank' href='https://github.com/chvndler/chvndler.ch'>
          Source
        </Link>
      </div>
    </div>
  </footer>
)

export const AltFooter = () => (
  <footer className='pb3 pt5 ph3 mt6 mb3 flex app_footer tween baseline w-100'>
    <div className='f-inline baseline flex'>
      <small className='f7 db tl ttu pr3 font-mono gray'>
        © 2023 <b className='gravel'>CDC®</b>
      </small>
      <CursorPosition />
    </div>
    <small>
      <GitSha />
    </small>
  </footer>
)
