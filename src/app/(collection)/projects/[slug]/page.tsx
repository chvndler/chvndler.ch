import React from 'react';
import Link from 'next/link';
import { RouterPrev } from '@/components/primitives';

import { notFound } from 'next/navigation';
import { allProjects, type Projects } from 'contentlayer/generated';

import { formatDateTime } from '@/lib/hooks/use-date-time';
import { MDX } from '@/components/core';
import { AppController } from '@/components/layout';
import { GitButton, BadgeDefault } from '@/components/shared';

import { type Metadata } from 'next';
import { cn } from '@/lib/utils';
import { ErrorComponent } from '@/components/core/error.component';

interface PostProps {
  params: {
    slug: string[];
  };
}

function getProjects(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allProjects.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null; // Explicitly return null when post is not found
  }

  return post;
}

export function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = getProjects(params);

  if (!post) {
    return Promise.resolve({
      title: '404',
      description: '404',
    });
  }

  return Promise.resolve({
    title: post.title,
    description: post.description,
  });
}

export function generateStaticParams(): PostProps['params'][] {
  return allProjects.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

function FormattedDateString({ postDate }: { postDate: Projects }) {
  const publishedDate = formatDateTime(postDate.date);

  return (
    <span className='not-prose mr-2 text-left font-mono text-[11px] font-semibold text-blackA11 dark:text-whiteA10'>
      <time>{publishedDate.asString}</time>
    </span>
  );
}

function ProjectTags({ pro }: { pro: Projects }) {
  return (
    <>
      {pro.tags.map((tag, index) => (
        <BadgeDefault key={pro._id}>
          {pro.tags.length - 1 === index ? tag : `${tag}`}
        </BadgeDefault>
      ))}
    </>
  );
}

export default function PostPage({ params }: PostProps) {
  const post = getProjects(params);

  if (!post) {
    notFound();
    return (
      <>
        <ErrorComponent
          error={Error('Post Not Found')}
          reset={() => {
            console.log('reset');
          }}
        />
      </>
    );
  }

  return (
    <AppController>
      <article
        key={post._id}
        className={cn(
          'text-md prose prose-neutral mb-20 py-10 text-blackA11 dark:prose-invert',
          'prose-h2:font-sohne prose-h2:text-4xl prose-h2:font-[600] prose-h2:tracking-tight prose-h3:text-2xl',
          'prose-h3:font-[800] prose-h3:tracking-tight prose-p:font-sohne prose-p:text-[400] dark:text-whiteA9',
        )}>
        <RouterPrev />

        <div className='mt-4 flex flex-row items-center gap-1 font-mono uppercase'>
          <FormattedDateString postDate={post} />
          <ProjectTags pro={post} />
        </div>

        <section>
          <h2 className='prose-h2 font-favorit leading-4 tracking-tight text-blackA11 dark:text-whiteA11'>
            {post.title}
          </h2>
          <p className='text-md max-w-lg font-favorit leading-6 text-carbon-800 dark:text-whiteA8'>
            {post.description}
          </p>
          {post.git && <GitButton href={post.git}>View on GitHub</GitButton>}
        </section>

        <MDX code={post.body.code} />
      </article>
    </AppController>
  );
}
