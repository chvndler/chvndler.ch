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
  zIndex: '9',
  height: '100vh',
  width: '100vw',
  padding: 0,
  margin: 0
});

export const PageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppNavbar />
      <AppBox>{children}</AppBox>
      <AppFooter />
    </>
  );
};
