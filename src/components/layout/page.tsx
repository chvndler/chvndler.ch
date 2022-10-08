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
  paddingTop: '150px',
  paddingBottom: '200px',
  paddingLeft: 0,
  paddingRight: 0,
  margin: 0
});

const AppContent = styled('div', {
  zIndex: '2',
  backgroundColor: '$chxn6s',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: 800,
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'auto',
  padding: 0,
  margin: 'auto'
});

export const PageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <AppBox>
        <AppBar />
        <AppContent>
          <main>{children}</main>
        </AppContent>
      </AppBox>
    </>
  );
};
