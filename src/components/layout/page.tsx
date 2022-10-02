import { UseFullViewport } from '@/components/common/viewport/alt';
import { AppBar } from '@/components/layout/app-bar';

import { AppFooter } from './app-footer';

type LayoutProps = {
  children?: React.ReactNode;

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
};

export const PageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <UseFullViewport>
        <AppBar />
        <main>{children}</main>
        <AppFooter />
      </UseFullViewport>
    </>
  );
};
