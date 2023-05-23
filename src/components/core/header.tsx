import Link from 'next/link'
import {Logo} from '../svg/logo'
import {ThemeToggle} from '../theme-mode'

// server

const navigation = [
  {name: 'Projects', href: '/projects', current: false},
  {name: 'Archive', href: '/archive', current: false},
]

const links = {
  projects: '/projects',
  archive: '/archive',
  index: '/',
} as const

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Header = () => (
  <nav className='absolute top-0 left-0 right-0 w-full px-2 py-0 mx-auto'>
    <div className='flex flex-row items-center justify-between w-full max-w-lg px-0 py-4 mx-auto'>
      <span className='items-start justify-start'>
        <Logo />
      </span>

      <span className='items-start justify-end'>
        <div className='block'>
          <div className='flex space-x-1'>
            <ThemeToggle />
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'text-stone-700 dark:text-gray10 hover:text-grayA8 font-semibold leading-5 text-[14px] font-inter transition-colors ease-in-out duration-400'
                    : 'text-stone-700 dark:text-gray10 hover:text-gray8 dark:hover:text-whiteA9 font-semibold leading-5 text-[14px] font-inter transition-colors ease-in-out duration-400',
                  'text-[14px] pl-3 font-medium leading-5'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </span>
    </div>
  </nav>
)

export const Nav = () => {
  return (
    <>
      <header className='pv3 ph3 app_header'>
        <div className='f-inline v-mid tween w-100'>
          <div className='f-start'>
            <Logo />
          </div>
          <div className='f-center v-mid tween'>
            <Link
              className='link fw5 dim f-center black-60 f6 dib ml3 ml3-l aspekta'
              href={links.index}
              title='Home'
            >
              Index
            </Link>
            <Link
              className='link fw5 dim f-center black-60 f6 dib ml3 ml3-l aspekta'
              href={links.projects}
              title='Projects'
            >
              Projects
            </Link>
            <Link
              className='link fw5 dim f-center black-60 f6 dib ml3 ml3-l aspekta'
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
