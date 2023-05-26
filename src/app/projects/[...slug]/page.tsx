import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import type { Metadata } from 'next';
import type { Projects } from 'contentlayer/generated';

import { formatDateTime } from '../../../lib/hooks/use-date-time';
import { MDX } from '../../../components/core';
import { BadgeDefault } from '../../../components/shared/badge';

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

function FormattedDate({ post }: { post: Projects }) {
  const publishedDate = formatDateTime(post.date);

  return <>{publishedDate.asRelativeTimeString}</>;
}

function ProjectTags({ pro }: { pro: Projects }) {
  return (
    <>
      {pro.tags.map((tag, index) => (
        <BadgeDefault key={pro._id}>{pro.tags.length - 1 === index ? tag : `${tag} `}</BadgeDefault>
      ))}
    </>
  );
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
        className="text-md prose prose-neutral mb-20 font-uncut font-medium text-grayscale-800 dark:prose-invert prose-h2:text-4xl prose-h2:font-extrabold prose-h3:text-2xl prose-h3:font-bold prose-h3:tracking-tight"
      >
        <section>
          <div className="flex flex-row items-center gap-1 font-fraktion text-xs uppercase">
            <FormattedDate post={post} />
            <ProjectTags pro={post} />
          </div>

          <div className="mt-4">
            <h2 className="font-uncut text-grayscale-800 dark:text-grayscale-700">{post.title}</h2>
            <p className="text-md text-grayscale-700 dark:text-grayscale-600">{post.description}</p>
          </div>
        </section>

        <MDX code={post.body.code} />
      </article>
    </>
  );
}

function StatCards() {
  return (
    <>
      <div className="pb-20">
        <article className="rounded-xl border border-grayscale-400 py-3 dark:border-grayscale-900">
          <ul className="flex flex-col items-start justify-between gap-2 divide-y divide-grayscale-400 py-2 dark:divide-grayscale-900">
            <li className="w-full items-start justify-between px-4">
              <p className="text-left font-fraktion text-[10px] font-semibold uppercase text-grayscale-700">
                arweave ⌝
              </p>
              <small className="truncate text-left font-fraktion text-[13px] font-[450] text-grayscale-700">
                GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw
              </small>
            </li>

            <li className="w-full items-start justify-between px-4">
              <p className="text-left font-fraktion text-[10px] font-semibold uppercase text-grayscale-700">
                arweave ⌝
              </p>
              <small className="truncate text-left font-fraktion text-[13px] font-[450] text-grayscale-700">
                GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw
              </small>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
