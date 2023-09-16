import React from 'react';
import { RouterPrev } from '@/components/primitives';

import { notFound } from 'next/navigation';
import { allProjects, type Projects } from 'contentlayer/generated';

import { formatDateTime } from '@/lib/hooks/use-date-time';
import { MDX } from '@/components/core';
import { AppController } from '@/components/layout';
import { GitButton, BadgeDefault } from '@/components/shared';

import { type Metadata } from 'next';
import { cn } from '@/lib/utils';

interface PostProps {
  params: {
    slug: string[]; // Make sure slug is an array
  };
}

export async function generateStaticParams() {
  return allProjects.map((project: Projects) => ({
    slug: [project.slugAsParams], // Convert the slug to an array
  }));
}

function getProjects(params: PostProps['params']) {
  const slug = params?.slug?.join('/'); // Use join to convert array to string
  const post = allProjects.find((post: Projects) => post.slugAsParams === slug);

  if (!post) {
    return null; // Explicitly return null when post is not found
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = getProjects(params);

  if (!post) {
    return Promise.resolve({
      title: '404',
      description: '404',

      openGraph: {
        title: '404',
      },
    });
  }

  return Promise.resolve({
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
    },
  });
}

function FormattedDateString({ postDate }: { postDate: Projects }) {
  const publishedDate = formatDateTime(postDate.date);

  return (
    <span className='not-prose mr-2 text-left font-mono text-[11px] font-semibold uppercase text-blackA11 dark:text-whiteA10'>
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

export default async function PostPage({ params }: PostProps) {
  const slug = params?.slug?.join('/'); // Correct usage of join
  const post = allProjects.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  return (
    <AppController>
      <article
        key={post._id}
        className={cn(
          'md:w-[95%]',
          'text-md prose prose-neutral mb-20 py-10 leading-5 text-blackA11 dark:prose-invert dark:text-whiteA9',
          'prose-h2:font-inter prose-h2:text-3xl prose-h2:font-[700] prose-h2:tracking-tight',
          'prose-h3:font-inter prose-h3:text-2xl prose-h3:font-bold prose-h3:tracking-tight prose-h3:text-carbon-900 prose-h3:dark:text-carbon-50',
          'prose-h4:font-inter prose-h4:text-[20px] prose-h4:font-bold prose-h4:tracking-tight prose-h4:text-carbon-900 prose-h4:dark:text-carbon-50',
          'prose-p:font-twk prose-p:font-[500] prose-p:leading-6',
        )}>
        <RouterPrev />

        <section>
          <h2 className='prose-h2 font-bold leading-4 tracking-tight'>
            {post.title}
          </h2>
          <p className='text-md max-w-lg pb-6 text-carbon-600 dark:text-whiteA8'>
            {post.description}
          </p>
          {post.git && <GitButton href={post.git}>View on GitHub</GitButton>}
        </section>

        <MDX code={post.body.code} />

        <div className='mt-4 flex flex-row items-center gap-1 font-mono uppercase'>
          <FormattedDateString postDate={post} />
          <ProjectTags pro={post} />
        </div>
      </article>
    </AppController>
  );
}
