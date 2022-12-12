import {format, parseISO} from 'date-fns'
import fs from 'fs'
import matter from 'gray-matter'
import type {GetStaticPaths, GetStaticProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import {theme} from 'stitches.config'

import type {ArchiveMetaProps} from '@/components/common/archiveMeta'
import {Box, Heading, Paragraph, Space} from '@/components/ds'
import {ArchiveLayout, WEBSITE_HOST_URL} from '@/components/layout/archive-page'
import {postFilePaths, POSTS_PATH} from '@/lib/utils/mdxUtils'

import type {PostType} from '../post'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
}

type PostPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: PostType
}

const PostPage = ({source, frontMatter}: PostPageProps): JSX.Element => {
  const customMeta: ArchiveMetaProps = {
    title: `${frontMatter.title} - Hunter Chang`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  }
  return (
    <ArchiveLayout customMeta={customMeta}>
      <article>
        <Heading css={{fontFamily: theme.fonts.latBoldStd}}>{frontMatter.title}</Heading>
        <Space size={1} />
        <Paragraph>{format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}</Paragraph>
        <Space size={2} />
        <Box>
          <MDXRemote {...source} components={components} />
        </Box>
      </article>
    </ArchiveLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const {content, data} = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path: string) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug: any) => ({params: {slug}}))

  return {
    paths,
    fallback: false,
  }
}

export default PostPage
