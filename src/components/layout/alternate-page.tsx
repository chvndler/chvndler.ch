import { styled } from 'stitches.config';

import { AppFooter } from '@/components/layout/app-footer';
import { AltAppNavbar } from '@/components/layout/app-navbar/alternate';

type LayoutProps = {
  children?: React.ReactNode;

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
};

const AppBox = styled('div', {
  zIndex: '1',
  height: '100vh',
  width: '100vw',
  padding: 0,
  margin: 0
});

export const AltPageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBox>
        <AltAppNavbar />
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
