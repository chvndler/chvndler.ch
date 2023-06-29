import React from 'react';
import Link from 'next/link';

import { compareDesc } from 'date-fns';
import type { Projects } from '.contentlayer/generated/types';
import { formatDateTime } from '@/lib/hooks/use-date-time';
import { pages } from '@/lib/data/other';

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
      <div
        key={z}
        className='grid items-start justify-start grid-cols-1 text-carbon-400 md:grid-cols-3'>
        <p className='font-mono text-xs leading-6 text-carbon-600 dark:text-carbon-600'>
          <ProjectDateFormat postDate={prxjxct} />
        </p>

        <div
          key={z}
          className='w-full md:col-span-2'>
          <Link
            key={z}
            href={prxjxct.slug}
            className='font-sohne text-[15px] font-[600] lowercase leading-5 text-carbon-600 hover:underline dark:text-carbon-400 md:leading-normal'>
            {prxjxct.title}
          </Link>

          <p className='text-[14px] font-[400] leading-5 text-carbon-400 dark:text-carbon-400'>
            {prxjxct.excerpt}
          </p>

          <div className='hidden'>
            {prxjxct.tags.map((tag, i) => (
              <span
                key={i}
                className='mr-[2px] items-center justify-center whitespace-nowrap rounded-full border border-carbon-200 px-2 py-0.5 align-middle font-sohne text-[8px] font-[600] uppercase tracking-wide hover:cursor-not-allowed hover:rounded-md dark:border-carbon-800'>
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
      <div className='text-sm font-sohne'>
        <p className='pb-4 text-[16px] font-[500] leading-6 text-[#00C454]'>
          Projects
        </p>

        <div className='grid gap-2 gap-y-3 pb-6 mt-3 mb-3 border-b border-carbon-100 dark:border-carbon-800'>
          {pages.map((arch, i) => (
            <>
              <div
                key={i}
                className='grid items-start grid-cols-1 gap-y-0 md:grid-cols-3'>
                <div key={i}>
                  <Link
                    href={arch.url}
                    key={i}
                    className='font-sohne text-[15px] font-[500] leading-5 text-carbon-600 dark:text-carbon-400'>
                    {arch.type}
                  </Link>
                </div>

                <div className='w-full md:col-span-2'>
                  <p className='font-sohne text-[15px] font-[400] leading-5 text-carbon-500 transition-all duration-200 dark:text-carbon-600'>
                    {arch.content}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className='grid gap-6 pt-2 mt-3'>{list}</div>
      </div>

      <div className='flex justify-start'>
        <Link
          href='/projects'
          className='text-left font-sohne text-sm font-[500] text-carbon-500 hover:text-carbon-700 dark:hover:text-carbon-300'>
          view all projects →
        </Link>
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
