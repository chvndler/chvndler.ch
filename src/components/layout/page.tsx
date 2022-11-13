import { AppBar } from '@/components/layout/app-bar';

import { Meta } from '../common/meta';
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
      <AppBar />
      <BodyContainer>
        <main>{children}</main>
      </BodyContainer>
    </>
  );
};
