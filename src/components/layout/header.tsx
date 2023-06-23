import Link from 'next/link';
import Logo from '../shared/logo';
import ThemeSwitch from '../shared/theme.toggle';

import { cn } from '@/lib/utils';

// server

type Navigation = {
  name?: string;
  href?: string;
  current?: boolean;
};

const navigation = [
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Media', href: '/media', current: false },
];

export const Header = () => (
  <header
    className={cn(
      'header sticky top-0 z-50 w-full backdrop-blur-gnav backdrop-saturate-sat180',
    )}
    aria-hidden='true'
  >
    <nav className={cn('nav mx-auto w-full px-3 py-3')}>
      <div className='mx-auto flex w-full max-w-[620px] flex-row items-center justify-between px-0'>
        <div className='items-center justify-start'>
          <Logo />
        </div>
        <div className='items-center justify-end'>
          <div className='block'>
            <div className='flex flex-row gap-1'>
              <ThemeSwitch />
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

function NavLinks() {
  return (
    <>
      {navigation.map((item, it) => (
        <Link
          key={it}
          href={item.href}
          className='duration-400 font-uncut ml-2 text-[15px] font-[600] leading-[20px] text-carbon-500 transition-colors ease-in-out hover:text-carbon-700 dark:text-carbon-400 dark:hover:text-carbon-600'
          aria-current='page'
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
