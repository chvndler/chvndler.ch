import React from 'react';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

import { formatDateTime } from '@/lib/hooks/use-date-time';
import { otherPages } from '@/lib/data/pages';
import { SmallArrowRight } from '@/components/shared/svg/arrows';
import { BadgeDefault } from '@/components/shared';
import type { Projects } from '.contentlayer/generated/types';

type ListProps = {
  projects: Projects[];
};

export const ProjectHighlights = ({ projects }: ListProps) => {
  const sortedProjects = projects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  const list = sortedProjects.map((prxjxct, z) => (
    <div
      key={z}
      className='grid gap-6'>
      <div className='grid items-start justify-start grid-cols-1 text-carbon-400 md:grid-cols-3'>
        <p className='font-mono text-xs font-[600] leading-4 text-carbon-600 dark:text-carbon-600'>
          <ProjectDateFormat postDate={prxjxct} />
        </p>

        <div className='w-full md:col-span-2'>
          <Link
            key={prxjxct.slug}
            href={prxjxct.slug}
            className='font-favorit text-[14px] font-[600] uppercase leading-5 text-carbon-500 transition-all duration-300 hover:text-carbon-700 hover:underline hover:decoration-azure dark:text-carbon-300 dark:hover:text-carbon-300 md:leading-normal'>
            {prxjxct.title}
          </Link>

          <p
            key={prxjxct.excerpt}
            className='text-[14px] font-[400] lowercase leading-5 text-carbon-400 dark:text-carbon-500'>
            {prxjxct.excerpt}
          </p>

          <div className='hidden'>
            {prxjxct.tags.map((tag, i) => (
              <span
                key={i}
                className='mr-[2px] items-center justify-center whitespace-nowrap rounded-full border border-carbon-200 px-2 py-0.5 align-middle font-favorit text-[8px] font-[600] uppercase tracking-wide hover:cursor-not-allowed hover:rounded-md dark:border-carbon-800'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className='text-sm font-favorit'>
        <p className='pb-4 text-[14px] font-[600] uppercase leading-6 text-jade'>
          Projects
        </p>

        <div className='grid gap-2 pb-8 mt-3 border-b gap-y-3 border-carbon-100 dark:border-carbon-800'>
          {otherPages.map((page, i) => (
            <>
              <div
                key={i}
                className='grid items-start grid-cols-1 gap-y-0 md:grid-cols-3'>
                <div className='flex flex-row items-center justify-start w-full mx-auto leading-5 gap-x-1'>
                  <Link
                    href={page.url}
                    key={page.url}
                    className='text-left font-favorit text-[12px] font-[600] uppercase leading-5 text-carbon-500 hover:text-carbon-700 dark:text-carbon-300 dark:hover:text-carbon-300'>
                    {page.type}
                  </Link>
                  <SmallArrowRight />
                </div>

                <div className='w-full md:col-span-2'>
                  <p
                    key={page.content}
                    className='font-favorit text-[14px] font-[400] lowercase leading-5 text-carbon-400 transition-all duration-200 dark:text-carbon-500'>
                    {page.content}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>

        {/* <!-- RENDERED PROJECT LIST --> */}
        <div className='grid gap-6 pt-8'>{list}</div>
        {/* <!-- END RENDERED PROJECT LIST --> */}
      </div>

      <div className='flex justify-start'>
        <BadgeDefault>
          <Link
            href='/projects'
            className='text-left font-twk text-sm font-[500] text-carbon-500 hover:text-carbon-700 dark:hover:text-carbon-300'>
            view all projects →
          </Link>
        </BadgeDefault>
      </div>
    </>
  );
};

function ProjectDateFormat({ postDate }: { postDate: Projects }) {
  const dateString = formatDateTime(postDate.date).asString;
  const date = new Date(dateString);
  const formattedDate = date
    .toLocaleDateString()
    .split('/')
    .reverse()
    .join('.');

  return <>{formattedDate}</>;
}
