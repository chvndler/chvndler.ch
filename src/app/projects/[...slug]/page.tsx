import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import type { Metadata } from 'next';
import type { Projects } from 'contentlayer/generated';

import RouterPrev from '../../../components/shared/router.back';
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

          <div className='flex flex-row items-center gap-1 text-xs uppercase font-fraktion'>
            <FormattedDateString postDate={post} />
            <ProjectTags pro={post} />
          </div>

          <div className='mt-4'>
            <h2 className='leading-4 tracking-tight prose-h2 font-archivo text-blackA11 dark:text-whiteA11'>
              {post.title}
            </h2>
            <p className='text-md font-archivo text-blackA8 dark:text-whiteA8'>
              {post.description}
            </p>
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
    <p className='mr-2 text-xs font-semibold text-left font-archivo text-blackA11 dark:text-whiteA10'>
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

/*
function Card() {
  return (
    <>
      <section>
        <div className='relative items-center w-full py-12 mx-auto'>
          <div className='grid grid-cols-1'>
            <div className='mx-auto my-4 w-full rounded-[18px] bg-blackA3 dark:bg-whiteA3'>
              <div className='flex flex-col p-6 gap-y-2'>
                <span className='text-sm font-semibold leading-3'>Verification</span>
                <span className='text-xs font-medium leading-4'>
                  This entry has been permanently stored on-chain and signed by its creator.
                </span>

                <div className='flex flex-col w-full mx-auto mt-4 border divide-y rounded-lg btn-group btn-group-vertical divide-blackA6 border-blackA6 dark:divide-whiteA6 dark:border-whiteA6'>
                  <TicketItem
                    title={'arweave ⌝'}
                    address={'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw'}
                  />
                  <TicketItem
                    title={'address ⌝'}
                    address={'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw'}
                  />
                  <TicketItem
                    title={'digest ⌝'}
                    address={'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
*/

/*
function TicketItem({ title, address }: { title: string; address: string }) {
  return (
    <div className='flex flex-col w-full h-auto px-4 py-1 mx-auto text-left hover:bg-blackA6 dark:hover:bg-whiteA6'>
      <div className='py-[2px]'>
        <span className='w-full text-left font-archivo text-[10px] font-semibold uppercase leading-3 text-grayscale-700'>
          {title}
        </span>
      </div>
      <div className='py-[2px]'>
        <span className='w-full text-xs font-medium leading-3 text-left truncate wrap font-archivo text-grayscale-700'>
          {address}
        </span>
      </div>
    </div>
  );
}
*/
