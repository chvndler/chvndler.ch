import {format, parseISO} from 'date-fns'
import type {GetStaticProps} from 'next'
import Link from 'next/link'
import React from 'react'

import {Heading} from '@/components/ds'
import {ArchiveLayout} from '@/components/layout/archive-page'
import {getAllPosts} from '@/lib/api'

import type {PostType} from './archive/post'

type IndexProps = {
  posts: PostType[]
}

export const ArchiveIndex = ({posts}: IndexProps): JSX.Element => {
  return (
    <ArchiveLayout>
      <Heading css={{textAlign: 'center'}}>LogoArchive.</Heading>
      <>
        {posts.map((post) => (
          <article key={post.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`archive/posts/${post.slug}`} href={`archive/posts/[slug]`}>
                {post.title}
              </Link>
            </h1>
            <p className="mb-3">{post.description}</p>
            <p>
              <Link as={`archive/posts/${post.slug}`} href={`archive/posts/[slug]`}>
                Read More
              </Link>
            </p>
          </article>
        ))}
      </>
    </ArchiveLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title'])

  return {
    props: {posts},
  }
}

export default ArchiveIndex
