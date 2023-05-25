import Link from 'next/link'
import {CommitSha} from './git-sha'

// server

export const Footer = () => (
  <footer className='relative w-full'>
    <div className='flex items-end max-w-xl px-3 pt-3 pb-6 mx-auto mt-3 text-center'>
      <div className='flex flex-col items-start justify-start my-auto gap-y-1'>
        <span className='text-[13px] font-[680] tracking-wide font-fraktion leading-4 text-left uppercase'>
          <CommitSha />
        </span>
        <span className='text-[13px] font-[680] tracking-wide font-fraktion text-left leading-4 uppercase text-blackA9 dark:text-whiteA7'>
          © {new Date().getFullYear()} Chandler®
        </span>
      </div>

      <div className='font-[680] text-[13px] tracking-wide text-right grow font-fraktion uppercase text-blackA9 dark:text-whiteA7'>
        <Link target='_blank' href='https://twitter.com/chvndlerch'>
          ( @chvndlerch )
        </Link>
      </div>
    </div>
  </footer>
)
