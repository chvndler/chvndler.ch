'use client';

import Logo from '../shared/logo';
import ThemeSwitch from '../shared/theme.toggle';
import useWindowSize from '@/lib/hooks/use-window-size';
import clsx from 'clsx';

// client

export const Header = () => (
  <header
    className={clsx('header relative z-50 w-full')}
    aria-hidden='true'>
    <nav className={clsx('nav mx-auto w-full px-3 py-3')}>
      <div className='mx-auto flex w-full max-w-[620px] flex-row items-center justify-between px-0'>
        <div className='items-center justify-start text-carbon-400 dark:text-carbon-500'>
          <Logo />
        </div>
        <div className='items-center justify-end'>
          <div className='block'>
            <div className='flex flex-row items-center justify-center gap-2'>
              <ThemeSwitch />
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

const Navigation = () => {
  const windowSize = useWindowSize();

  if (windowSize.isMobile) {
    return (
      <p
        className={clsx(
          'pt-0.5 text-right font-favorit text-[10px] font-[500]',
          'uppercase leading-[20px] text-carbon-800 dark:text-carbon-200',
        )}>
        {/* <!-- we'll add a menu drop here --> */}
        mobile
      </p>
    );
  } else {
    return (
      <p
        className={clsx(
          'pt-0.5 text-right font-favorit text-[10px] font-[500]',
          'uppercase leading-[20px] text-carbon-800 dark:text-carbon-200',
        )}>
        use ⌘ K to navigate
      </p>
    );
  }
};

/*
type Navigation = {
  name?: string;
  href?: string;
  current?: boolean;
};

const navigation = [
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Media', href: '/media', current: false },
];


function NavLinks() {
  return (
    <>
      {navigation.map((item, it) => (
        <Link
          key={it}
          href={item.href}
          className={clsx(
            'duration-400 ml-2 font-mono text-[13px] font-normal lowercase leading-[20px] tracking-tight',
            'text-carbon-800 transition-colors ease-in-out hover:text-carbon-600 dark:text-carbon-200 dark:hover:text-carbon-600',
          )}
          aria-current='page'>
          {item.name}
        </Link>
      ))}
    </>
  );
}

*/
