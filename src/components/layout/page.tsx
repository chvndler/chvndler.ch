import { AtlrNavbar } from '@/components/layout/atlr.navbar';

import { Meta } from '../common/meta';
import { RelativeFooter } from './app-footer/relative-footer';
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
      <AtlrNavbar />
      <BodyContainer>
        <main>{children}</main>
      </BodyContainer>
      <RelativeFooter />
    </>
  );
};
