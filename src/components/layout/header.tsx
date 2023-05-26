import Link from 'next/link';
import { Logo, ThemeSwitch } from '../shared';

// server

const navigation = [
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Archive', href: '/archive', current: false },
];

export const Header = () => (
  <header className="main-header sticky top-0 backdrop-blur-md">
    <nav className="mx-auto w-full px-3 py-1">
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
                    className="duration-400 font-uncut ml-2 text-[15px] font-[600] leading-[20px] text-blackA11 transition-colors ease-in-out hover:text-blackA9 dark:text-whiteA11 dark:hover:text-whiteA9"
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
