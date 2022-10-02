import { UseFullViewport } from '@/components/common/viewport/alt';
import { AppBar } from '@/components/layout/app-bar';

import { Meta } from '../common/meta';
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
      <Meta />
      <UseFullViewport>
        <AppBar />
        <main>{children}</main>
        <AppFooter />
      </UseFullViewport>
    </>
  );
};
