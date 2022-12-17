/** @format */

import {format, parseISO} from 'date-fns'
import type {GetStaticProps} from 'next'
import Link from 'next/link'
import React from 'react'
import {styled, theme} from 'stitches.config'

import {Space} from '@/components/ds'
import {ArchiveLayout} from '@/components/layout/archive-page'
import {getAllPosts} from '@/lib/api'
import type {PostType} from '@/lib/types/post'

type IndexProps = {
 posts: PostType[]
}

export const ArchiveIndex = ({posts}: IndexProps): JSX.Element => {
 return (
  <ArchiveLayout>
   <>
    {posts.map((post) => (
     <article key={post.slug}>
      <ArchivePostContainer>
       <ArchivePostTitle>
        <Link as={`archive/posts/${post.slug}`} href={`archive/posts/[slug]`}>
         {post.title}
        </Link>
       </ArchivePostTitle>
       <PostDate>{format(parseISO(post.date), 'MMMM dd, yyyy')}</PostDate>
       <PostSummary>{post.description}</PostSummary>
       <Space size={1} />
       <PostLink>
        <Link as={`archive/posts/${post.slug}`} href={`archive/posts/[slug]`}>
         Read More
        </Link>
       </PostLink>
      </ArchivePostContainer>
     </article>
    ))}
   </>
  </ArchiveLayout>
 )
}

export const getStaticProps: GetStaticProps = async () => {
 const posts = getAllPosts(['date', 'description', 'slug', 'title'])

 return {
  props: {posts}
 }
}

export default ArchiveIndex

const ArchivePostContainer = styled('div', {
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'left',
 justifyContent: 'center',
 width: '100%',
 padding: '1rem',
 marginBottom: '1rem',
 paddingRight: '6rem',
 paddingBottom: '2rem',
 border: `1px solid ${theme.colors.chxn3}`,
 borderTopWidth: 0,
 borderLeftWidth: 0,
 borderRightWidth: 0,
 borderBottomWidth: 1,
 '@md': {
  paddingRight: '1rem'
 }
})

const ArchivePostTitle = styled('h2', {
 fontSize: '1.5rem',
 fontFamily: theme.fonts.latMedStd,
 color: theme.colors.slate11,

 '&:hover': {
  color: theme.colors.slate10
 }
})

const PostDate = styled('p', {
 fontFamily: theme.fonts.latRegStd,
 fontSize: 12,
 color: theme.colors.chxn3
})

const PostSummary = styled('p', {
 fontFamily: theme.fonts.mono,
 fontSize: 13,
 color: theme.colors.chxn4,
 paddingTop: 8
})

const PostLink = styled('a', {
 fontFamily: theme.fonts.latMedStd,
 fontSize: 14,
 paddingTop: 12,
 color: theme.colors.heliotrope,
 '&:hover': {
  color: theme.colors.slate11
 }
})
