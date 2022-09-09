import React, { ReactNode } from 'react';
import Head from 'next/head';
import { NavBar } from '@/components/NavBar';
import { styled } from '@/lib/stitches.config';
import { ColorBar } from '@/components/ColorBar';
import { FixedFooter } from '@/components/FixedFooter';

type Props = {
  children?: ReactNode
  title?: string
}

const LayoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  margin: 'auto',
  justifyContent: 'center',
  height: 'calc(100vh - 64px)',
  backgroundColor: '$mauve1',
  maxWidth: '800px',
});

export const Layout = ({ children, title = 'Chandler Chappell®' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width, user-scalable=no' />
    </Head>
    <NavBar />
    <ColorBar />
    <LayoutContainer>
      <main>{children}</main>
    </LayoutContainer>
    <FixedFooter />
  </>
);
