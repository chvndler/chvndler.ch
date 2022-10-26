// eslint-disable-next-line import/no-unresolved
import { allPosts, Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import React from 'react';

import { Container, Heading, Section } from '@/components/ds';

type PostProps = {
  params: any;
  slug: any;
  url: any;
  html: any;
};

export const getStaticPaths = async () => {
  const paths = allPosts.map(({ url }) => {
    return { params: { url } };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: PostProps) => {
  const Post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  const post = Post;

  // const post: Post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { props: { post } };
};

const PostLayout = ({ post }: { post: Post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Section size="2">
        <Container size="3">
          <time dateTime={post.date} className="text-xs text-gray-600 mb-1">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <Heading size="1">{post.title}</Heading>
        </Container>

        <Container size="3">
          <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </Container>
      </Section>
    </>
  );
};

export default PostLayout;
