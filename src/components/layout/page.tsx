// import { AppBar } from '@/components/layout/app-bar';

import { Meta } from '../common/meta';
import { MenuOnHoverComponent } from '../primitives/popover/menu-on-hover';
import { BodyContainer } from './body-container';

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

      {/* <!--
      <AppBar />
      --> */}
      <MenuOnHoverComponent />
      <BodyContainer>
        <main>{children}</main>
      </BodyContainer>
    </>
  );
};
