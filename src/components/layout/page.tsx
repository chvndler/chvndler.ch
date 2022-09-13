import React from 'react';
import { NavBar, NavBarProps } from '@/components/NavBar';
import { Meta } from '@/components/common/meta';
import Head from 'next/head';

type Props = {
  children?: React.ReactNode;
  navbarProps?: NavBarProps;
  title?: string;
};

export const PageLayout = ({ children, title = '' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width, user-scalable=no' />
      </Head>
      <Meta />
      <NavBar />
      <main>{children}</main>
    </>
  );
};
