import { format, parseISO } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import React from 'react';

import { components, MDXProvider } from '@/components/common/mdxComponents';
import { Container, Text } from '@/components/ds';
import { getAllFrontmatter, getMdxBySlug } from '@/lib/mdx';

import type { Frontmatter } from '../../ts/frontmatter';

type DocumentProps = {
  frontmatter: Frontmatter;
  code: any;
};

const mdxComponents = {
  ...components
};

export default function BlogPostPage({ frontmatter, code }: DocumentProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Container size="3" css={{ maxWidth: '780px', position: 'relative' }}>
        <Text>{frontmatter.metaTitle}</Text>
        <Text as="time" size="3" css={{ color: '$chxn4', lineHeight: 0, whiteSpace: 'nowrap' }}>
          {format(parseISO('frontmatter.publishedAt'), 'MMMM yyyy')}
        </Text>

        <MDXProvider frontmatter={frontmatter}>
          <Component components={mdxComponents as any} />
        </MDXProvider>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('journal');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('journal/', '') }
    })),
    fallback: false
  };
}

export async function getStaticProps(context: { params: { slug: any } }) {
  const { frontmatter, code } = await getMdxBySlug('journal/', context.params.slug);
  return { props: { frontmatter, code } };
}
