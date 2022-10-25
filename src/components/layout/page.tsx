import { styled } from 'stitches.config';

import { AppBar } from '@/components/layout/app-bar';

import { Meta } from '../common/meta';

type LayoutProps = {
  children?: React.ReactNode;

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
};

const AppBox = styled('div', {
  zIndex: '1',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100vw',
  overflow: 'auto',
  paddingTop: '100px',
  paddingBottom: '100px',
  paddingLeft: 0,
  paddingRight: 0,
  margin: 0
});

export const PageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <AppBar />
      <AppBox>
        <main>{children}</main>
      </AppBox>
    </>
  );
};
