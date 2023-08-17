'use client';

import { MobileMenu } from '../primitives/drop.menu';
import Logo from '../shared/logo';
import ThemeSwitch from '../shared/theme.toggle';
import useWindowSize from '@/lib/hooks/use-window-size';
import clsx from 'clsx';

// client

export const Header = () => (
  <header
    className={clsx('header fixed top-0 z-50 w-full')}
    aria-hidden='true'>
    <nav className={clsx('nav mx-auto w-full p-3')}>
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
      <>
        <MobileMenu />
      </>
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
