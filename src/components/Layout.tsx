import React, { ReactNode } from 'react';
import Head from 'next/head';
import { NavBar } from '@/components/NavBar';
import { styled } from '@/lib/stitches.config';

type Props = {
  children?: ReactNode
  title?: string
}


const LayoutContainer = styled('div', {
  display: 'flex',
  height: 'calc(100vh - 64px)',
  backgroundColor: '$mauve2',
});


const Layout = ({ children, title = 'Chandler Chappell®' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width, user-scalable=no' />
    </Head>
    <NavBar />
    <LayoutContainer>
      <main>{children}</main>
    </LayoutContainer>
  </>
);
