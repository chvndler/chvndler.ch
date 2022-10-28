import Head from 'next/head';
import { styled } from 'stitches.config';

import { AppBar } from '@/components/layout/app-bar';

import { Meta } from '../common/meta';
import { CommandK } from '../primitives/cmdk';

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

export const WEBSITE_HOST_URL = 'https://chvndler.ch';

export const PageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <AppBar />
      <AppBox>
        <main>{children}</main>
      </AppBox>
      <CommandK />
    </>
  );
};
