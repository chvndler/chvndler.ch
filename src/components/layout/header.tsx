import Link from 'next/link';
import { Logo, ThemeSwitch } from '../shared';

// server

const navigation = [
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Archive', href: '/archive', current: false },
];

export const Header = () => (
  <header className="main-header sticky top-0 z-10 bg-header backdrop-blur-md dark:bg-dheader">
    <nav className="mx-auto w-full px-3 py-0">
      <div className="mx-auto flex w-full max-w-[620px] flex-row items-center justify-between px-0 py-3">
        <span className="items-center justify-start">
          <Logo />
        </span>

        <span className="items-center justify-end">
          <div className="block">
            <div className="flex flex-row gap-1">
              <ThemeSwitch />
              {navigation.map((item) => (
                <>
                  <Link
                    key={item.name}
                    href={item.href}
                    className="duration-400 ml-2 font-uncut text-[15px] font-[600] leading-[20px] text-grayscale-800 transition-colors ease-in-out hover:text-blackA8 dark:text-grayscale-700 dark:hover:text-blackA9"
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </>
              ))}
            </div>
          </div>
        </span>
      </div>
    </nav>
  </header>
);

/*
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

            <div className='flex space-x-1'>
              <ThemeToggle />
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'text-grayscale-800 dark:text-gray10 hover:text-grayA8 uppercase font-[520] leading-[20px] text-[14px] font-fraktion transition-colors ease-in-out duration-400'
                      : 'text-grayscale-800 dark:text-gray10 hover:text-gray8 uppercase dark:hover:text-whiteA9 font-[520] leading-[20px] text-[14px] font-fraktion transition-colors ease-in-out duration-400',
                    'text-[14px] pl-3 font-medium leading-5'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>


*/
