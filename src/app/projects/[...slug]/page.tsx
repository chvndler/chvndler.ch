import {notFound} from 'next/navigation'
import {allProjects} from 'contentlayer/generated'
import type {Metadata} from 'next'
import type {Projects} from 'contentlayer/generated'

import {formatDateTime} from '../../../components/hooks/use-date-time'
import {MDX} from '../../../components/core'

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allProjects.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({params}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allProjects.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }))
}

function FormattedDate({post}: {post: Projects}) {
  const publishedDate = formatDateTime(post.date)

  return <>{publishedDate.asRelativeTimeString}</>
}

function ProjectTags({post}: {post: Projects}) {
  return (
    <>
      <span className='lh-copy gray'>
        {post.tags.map((tag, index) => (
          <span key={post._id}>{post.tags.length - 1 === index ? tag : `${tag}, `}</span>
        ))}
      </span>
    </>
  )
}

export default async function PostPage({params}: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article key={post._id} className='project__page'>
      <section className='mv4'>
        <time className='f6 b mb2 dib zorba'>
          <small>
            <FormattedDate post={post} /> · <ProjectTags post={post} />
          </small>
        </time>
        <h3 className='f2 f1-m f-headline-3 measure-narrow lh-title mv0'>
          <span className='bg-black-90 lh-copy white b pa1 ttu tracked-tight'>{post.title}</span>
        </h3>
        {post.description && <p className='pl1 pr1 lh-title fw5 f5 mt0 black-80 w-max'>{post.description}</p>}
      </section>

      <section className='center pa3'>
        <MDX code={post.body.code} />
      </section>
    </article>
  )
}
