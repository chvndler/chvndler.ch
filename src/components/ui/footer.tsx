import Link from 'next/link'
import {CommitSha} from './git-sha'

// server

export const Footer = () => (
  <footer className='relative w-full px-3'>
    <div className='mx-auto mt-3 flex max-w-[620px] items-end pb-6 pt-3 text-center'>
      <div className='flex flex-col items-start justify-start my-auto gap-y-1'>
        <span className='text-left font-fraktion text-[13px] font-[680] uppercase leading-4 tracking-wide'>
          <CommitSha />
        </span>
        <span className='text-left font-fraktion text-[13px] font-[680] uppercase leading-4 tracking-wide text-blackA9 dark:text-whiteA7'>
          © {new Date().getFullYear()} Chandler®
        </span>
      </div>

      <div className='grow text-right font-fraktion text-[13px] font-[680] uppercase tracking-wide text-blackA9 dark:text-whiteA7'>
        <Link target='_blank' href='https://twitter.com/chvndlerch'>
          ( @chvndlerch )
        </Link>
      </div>
    </div>
  </footer>
)
