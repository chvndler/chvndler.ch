import Link from 'next/link';
import { Logo } from '../shared';
import ThemeSwitch from '../shared/theme.toggle';

// server

const navigation = [
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Media', href: '/media', current: false },
];

export const Header = () => (
  <header className='fixed top-0 z-50 main-header backdrop-blur-md'>
    <nav className='w-full px-3 py-1 mx-auto'>
      <div className='mx-auto flex w-full max-w-[620px] flex-row items-center justify-between px-0 py-3'>
        <span className='items-center justify-start'>
          <Logo />
        </span>
        <span className='items-center justify-end'>
          <div className='block'>
            <div className='flex flex-row gap-1'>
              <ThemeSwitch />
              {navigation.map((item) => (
                <>
                  <Link
                    key={item.name}
                    href={item.href}
                    className='duration-400 font-uncut ml-2 text-[15px] font-[600] leading-[20px] text-carbon-500 transition-colors ease-in-out hover:text-carbon-700 dark:text-carbon-400 dark:hover:text-carbon-600'
                    aria-current='page'
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
