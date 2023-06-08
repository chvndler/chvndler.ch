import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import type { Metadata } from 'next';
import type { Projects } from 'contentlayer/generated';

import RouterPrev from '../../../components/shared/router.back';
import { formatDateTime } from '../../../lib/hooks/use-date-time';
import { MDX } from '../../../components/core';
import { BadgeDefault } from '../../../components/shared/badge';
import { GitButton, Space } from '@/components/shared';

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allProjects.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allProjects.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article
        key={post._id}
        className='text-md prose prose-neutral mb-20 font-archivo font-medium text-blackA11 dark:prose-invert prose-h2:font-archivo prose-h2:text-4xl prose-h2:font-bold prose-h2:tracking-tight prose-h3:text-2xl prose-h3:font-[800] prose-h3:tracking-tight dark:text-whiteA10'
      >
        <section>
          <Link href=''>
            <RouterPrev />
          </Link>

          <div className='flex flex-row items-center gap-1 font-fraktion text-xs uppercase'>
            <FormattedDateString postDate={post} />
            <ProjectTags pro={post} />
          </div>

          <div className='mt-4'>
            <h2 className='prose-h2 font-archivo leading-4 tracking-tight text-blackA11 dark:text-whiteA11'>
              {post.title}
            </h2>
            <p className='text-md max-w-sm font-archivo leading-6 text-carbon-800 dark:text-whiteA8'>
              {post.description}
            </p>
            {post.git && <GitButton href={post.git}>View on GitHub</GitButton>}
            <Space />
          </div>
        </section>

        {/**
         * <!--
         *
         * MDX Start..
         *
         * --> */}

        <MDX code={post.body.code} />
      </article>
    </>
  );
}

function FormattedDateString({ postDate }: { postDate: Projects }) {
  const publishedDate = formatDateTime(postDate.date);
  // const relativeDate = formatDateTime(postDate.date);

  return (
    <p className='mr-2 text-left font-archivo text-xs font-semibold text-blackA11 dark:text-whiteA10'>
      {publishedDate.asString}
    </p>
  );
}

function ProjectTags({ pro }: { pro: Projects }) {
  return (
    <>
      {pro.tags.map((tag, index) => (
        <BadgeDefault key={pro._id}>{pro.tags.length - 1 === index ? tag : `${tag}`}</BadgeDefault>
      ))}
    </>
  );
}
