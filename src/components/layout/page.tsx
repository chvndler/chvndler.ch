import { styled } from 'stitches.config';

import { AppFooter } from '@/components/layout/app-footer';
import { AppNavbar } from '@/components/layout/app-navbar';

type LayoutProps = {
  children?: React.ReactNode;

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
};

const AppBox = styled('div', {
  zIndex: '1',
  height: 'auto',
  width: '100vw',
  padding: 0,
  margin: 0
});

export const PageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBox>
        <AppNavbar />
        {/* TODO Header */}
        {/* <Header /> */}
        <main>{children}</main>
        {/* TODO Footer */}
        {/* <Footer /> */}
        <AppFooter />
      </AppBox>
    </>
  );
};
