import React from 'react';
import Link from 'next/link';

import { compareDesc } from 'date-fns';
import type { Projects } from '.contentlayer/generated/types';
import { formatDateTime } from '@/lib/hooks/use-date-time';

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
        className='grid items-start grid-cols-1 text-carbon-400 md:grid-cols-3'>
        <>
          <ProjectDateFormat postDate={prxjxct} />
        </>

        <div
          key={z}
          className='w-full md:col-span-2'>
          <p className='font-sohne text-[16px] font-[600] text-carbon-600 dark:text-carbon-400'>
            <Link
              key={z}
              href={prxjxct.slug}
              className='leading-6 tracking-normal transition-all duration-400 hover:underline md:leading-4'>
              {prxjxct.title}
            </Link>
          </p>
          <p className='text-[14px] font-[400] text-carbon-400 dark:text-carbon-400'>
            {prxjxct.excerpt}
          </p>
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
  ));

  return (
    <>
      <div className='text-sm font-sohne'>
        <p className='pb-4 text-[16px] font-[500] leading-6 text-[#00C454]'>
          Projects
        </p>

        <div className='grid gap-6 mt-3'>{list}</div>
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

  return (
    <p className='font-mono text-xs font-semibold text-carbon-300 dark:text-carbon-600'>
      {formattedDate}
    </p>
  );
}
