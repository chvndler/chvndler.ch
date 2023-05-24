import Link from 'next/link'
import {CursorPosition} from '../slices/user-position'
import {GitSha} from '../slices/git-sha'

// server

export const Footer = () => (
  <footer className='absolute bottom-0 left-0 right-0'>
    <div className='flex items-end max-w-xl px-3 pt-3 pb-6 mx-auto mt-3 font-mono text-xs text-center'>
      <span className='text-[11px] font-semibold font-aspekta text-left uppercase'>
        <span className='font-extrabold'>
          © CHANDLER CH. {new Date().getFullYear()}
        </span>
        .
        <br />
        SOMETHING LIKE THIS BUT NOT THIS (
        <Link
          href='https://github.com/chvndler/chvndler.ch'
          rel='noopener noreferrer'
          target='_blank'
        >
          view source
        </Link>
        ).
      </span>

      <div className='font-extrabold text-[12px] tracking-wide text-right grow font-tstar uppercase text-grayA10 dark:text-whiteA10'>
        <Link target='_blank' href='https://twitter.com/chvndlerch'>
          – @chvndlerch
        </Link>
      </div>
    </div>
  </footer>
)

export const AltFooter = () => (
  <footer className='flex pb3 pt5 ph3 mt6 mb3 app_footer tween baseline w-100'>
    <div className='flex f-inline baseline'>
      <small className='font-mono f7 db tl ttu pr3 gray'>
        © 2023 <b className='gravel'>CDC®</b>
      </small>
      <CursorPosition />
    </div>
    <small>
      <GitSha />
    </small>
  </footer>
)
