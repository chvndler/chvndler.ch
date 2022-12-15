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
import {styled, theme} from 'stitches.config'

import type {ArchiveMetaProps} from '@/components/common/archiveMeta'
import {Heading, Space} from '@/components/ds'
import {ArchiveLayout, WEBSITE_HOST_URL} from '@/components/layout/archive-page'
import type {PostType} from '@/lib/types/post'
import {postFilePaths, POSTS_PATH} from '@/lib/utils/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
  Space,
  Heading
}

type PostPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: PostType
}

const PostPage = ({source, frontMatter}: PostPageProps): JSX.Element => {
  const customMeta: ArchiveMetaProps = {
    title: `${frontMatter.title} - Chandler.`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  }
  return (
    <ArchiveLayout customMeta={customMeta}>
      <article>
        <ArchivePostTitle>{frontMatter.title}</ArchivePostTitle>
        <PostDate>{format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}</PostDate>
        <Space size={2} />
        <ArchiveContent>
          <MDXRemote {...source} components={components} />
        </ArchiveContent>
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

const ArchivePostTitle = styled('h2', {
  fontSize: '1.5rem',
  fontFamily: theme.fonts.latMedStd,
  color: theme.colors.slate11,

  '&:hover': {
    color: theme.colors.slate10,
  },
})

const PostDate = styled('p', {
  fontFamily: theme.fonts.latRegStd,
  fontSize: 12,
  color: theme.colors.chxn3,
})

const ArchiveContent = styled('div', {
  fontFamily: theme.fonts.system,
})