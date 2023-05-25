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

function ProjectTags({pro}: {pro: Projects}) {
  return (
    <>
      {pro.tags.map((tag, index) => (
        <BadgeDefault key={pro._id}>{pro.tags.length - 1 === index ? tag : `${tag} `}</BadgeDefault>
      ))}
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
      <article
        key={post._id}
        className='prose prose-neutral mb-20 dark:prose-invert prose-h3:font-inter prose-h3:font-bold prose-h3:tracking-tight'
      >
        <section className=''>
          <small className='flex flex-row items-center gap-1'>
            <time className='font-fraktion text-xs uppercase'>
              <FormattedDate post={post} />
            </time>{' '}
            <span className='uppercase'>
              <span aria-hidden='true'>&middot;</span> <ProjectTags pro={post} />
            </span>
          </small>

          <h3 className='font-inter text-grayscale-800 dark:text-grayscale-700'>
            <span className='font-extrabold'>{post.title}</span>
          </h3>
          {post.description && (
            <p className='text-md text-grayscale-700 dark:text-grayscale-600'>{post.description}</p>
          )}
        </section>

        <section className='prose prose-neutral font-atkinson dark:prose-invert'>
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
      <div className='pb-20'>
        <article className='rounded-xl border border-grayscale-400 py-3 dark:border-grayscale-900'>
          <ul className='flex flex-col items-start justify-between gap-2 divide-y divide-grayscale-400 py-2 dark:divide-grayscale-900'>
            <li className='w-full items-start justify-between px-4'>
              <p className='text-left font-fraktion text-[10px] font-semibold uppercase text-grayscale-700'>
                arweave ⌝
              </p>
              <small className='truncate text-left font-fraktion text-[13px] font-[450] text-grayscale-700'>
                GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw
              </small>
            </li>

            <li className='w-full items-start justify-between px-4'>
              <p className='text-left font-fraktion text-[10px] font-semibold uppercase text-grayscale-700'>
                arweave ⌝
              </p>
              <small className='truncate text-left font-fraktion text-[13px] font-[450] text-grayscale-700'>
                GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw
              </small>
            </li>
          </ul>
        </article>
      </div>
    </>
  )
}
