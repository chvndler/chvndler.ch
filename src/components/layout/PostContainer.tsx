import Head from 'next/head';
import React from 'react';
import { styled } from 'stitches.config';

import { Container } from '@/components/ds';

type ContainProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  date: string;
};

const PostWidthContainer = styled(Container, {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  maxWidth: '700px',
  padding: '8px',
  margin: 'auto'
});

export const PostContainer = (props: ContainProps) => {
  const { children } = props;
  const meta = {
    title: 'Chandler Chappell – Developer, writer, creator.',
    description: `Front-end developer, designer, and director.`
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>
      <PostWidthContainer>{children}</PostWidthContainer>
    </>
  );
};
