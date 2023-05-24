import {notFound} from 'next/navigation'
import {allProjects} from 'contentlayer/generated'
import type {Metadata} from 'next'
import type {Projects} from 'contentlayer/generated'

import {formatDateTime} from '../../../components/hooks/use-date-time'
import {MDX} from '../../../components/core'
import {BadgeDefault} from '../../../components/ui/badge'

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
      <span className=''>
        {post.tags.map((tag, index) => (
          <span key={post._id}>
            <BadgeDefault>
              {post.tags.length - 1 === index ? tag : `${tag}, `}
            </BadgeDefault>
          </span>
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
    <>
      <article key={post._id} className='prose dark:prose-invert'>
        <section className='font-inter'>
          <small className='flex flex-row items-center gap-1'>
            <time>
              <FormattedDate post={post} />
            </time>{' '}
            · <ProjectTags post={post} />
          </small>

          <h3 className='font-inter text-grayscale-900'>
            <span className='font-extrabold'>{post.title}</span>
          </h3>
          {post.description && (
            <p className='text-md text-sage9 dark:text-sage3'>
              {post.description}
            </p>
          )}
        </section>

        <section className='prose text-grayscale-800 dark:text-grayscale-300 font-atkinson'>
          <MDX code={post.body.code} />
        </section>
      </article>
      <StatCards />
    </>
  )
}

function StatCards() {
  return (
    <>
      <article className='py-3 bg-white border border-grayscale-400 rounded-xl'>
        <ul className='flex flex-col items-start justify-between gap-2 divide-y divide-grayscale-400'>
          <li className='items-start justify-between w-full px-4'>
            <div className=''>
              <p className='text-[10px] text-left font-semibold uppercase font-sfmono text-grayscale-700'>
                arweave ⌝
              </p>
              <small className='text-[12px] text-left truncate font-semibold font-sfmono text-grayscale-700'>
                GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw
              </small>
            </div>
          </li>

          <li className='items-start justify-between w-full px-4 pt-2'>
            <div className=''>
              <p className='text-[10px] text-left font-semibold uppercase font-sfmono text-grayscale-700'>
                arweave ⌝
              </p>
              <small className='text-[12px] text-left truncate font-semibold font-sfmono text-grayscale-700'>
                GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw
              </small>
            </div>
          </li>
        </ul>
      </article>
    </>
  )
}
