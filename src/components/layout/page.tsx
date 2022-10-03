import { AppBar } from '@/components/layout/app-bar';

import { Meta } from '../common/meta';

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
      <AppBar />
      <main>{children}</main>
    </>
  );
};
