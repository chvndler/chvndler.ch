import Link from 'next/link';
import RouterPrev from '@/components/shared/router.back';

import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import { formatDateTime } from '@/lib/hooks/use-date-time';
import { MDX } from '@/components/core';
import { AppController } from '@/components/layout';
import { GitButton, BadgeDefault } from '@/components/shared';

import type { Metadata } from 'next';
import type { Projects } from 'contentlayer/generated';

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
      <AppController>
        <article
          key={post._id}
          className='text-md prose prose-neutral mb-20 font-archivo font-medium text-blackA11 dark:prose-invert prose-h2:font-archivo prose-h2:text-4xl prose-h2:font-bold prose-h2:tracking-tight prose-h3:text-2xl prose-h3:font-[800] prose-h3:tracking-tight dark:text-whiteA10'
        >
          <section>
            <Link href=''>
              <RouterPrev />
            </Link>

            <div className='flex flex-row items-center gap-1 text-xs uppercase font-fraktion'>
              <FormattedDateString postDate={post} />
              <ProjectTags pro={post} />
            </div>

            <div className='my-6'>
              <h2 className='leading-4 tracking-tight prose-h2 font-archivo text-blackA11 dark:text-whiteA11'>
                {post.title}
              </h2>
              <p className='max-w-sm leading-6 text-md font-archivo text-carbon-800 dark:text-whiteA8'>
                {post.description}
              </p>
              {post.git && <GitButton href={post.git}>View on GitHub</GitButton>}
            </div>
          </section>

          <MDX code={post.body.code} />
        </article>
      </AppController>
    </>
  );
}

function FormattedDateString({ postDate }: { postDate: Projects }) {
  const publishedDate = formatDateTime(postDate.date);
  // const relativeDate = formatDateTime(postDate.date);

  return (
    <p className='mr-2 text-xs font-semibold text-left font-archivo text-blackA11 dark:text-whiteA10'>
      {publishedDate.asString}
    </p>
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
