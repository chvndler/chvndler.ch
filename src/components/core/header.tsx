import Link from 'next/link'
import {Logo} from '../svg/logo'

// server

const links = {
  projects: '/projects',
  archive: '/archive',
  index: '/',
} as const

export const Header = () => {
  return (
    <>
      <header className='pv3 ph3 app_header'>
        <div className='f-inline v-mid tween w-100'>
          <div className='f-start'>
            <Logo />
          </div>
          <div className='f-center v-mid tween'>
            <Link
              className='link fw5 ttu dim f-center dark-gray f6 dib ml3 ml3-l font-mono'
              href={links.index}
              title='Home'
            >
              Index
            </Link>
            <Link
              className='link fw5 ttu dim f-center dark-gray f6 dib ml3 ml3-l font-mono'
              href={links.projects}
              title='Projects'
            >
              Projects
            </Link>
            <Link
              className='link fw5 ttu dim f-center dark-gray f6 dib ml3 ml3-l font-mono'
              href={links.archive}
              title='Archive'
            >
              Archive
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
