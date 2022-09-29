import { styled } from 'stitches.config';

import { AppBar } from '@/components/layout/app-bar';
import { AppFooter } from '@/components/layout/app-footer';

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
      <AppBar />
      <AppBox>{children}</AppBox>
      <AppFooter />
    </>
  );
};
