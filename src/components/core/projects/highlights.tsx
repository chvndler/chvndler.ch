import React from 'react';
import Link from 'next/link';

import { compareDesc } from 'date-fns';
import type { Projects } from '.contentlayer/generated/types';
import { formatDateTime } from '@/lib/hooks/use-date-time';
import { cn } from '@/lib/utils';

type ListProps = {
  projects: Projects[];
};

export const ProjectHighlights = ({ projects }: ListProps) => {
  const sortedProjects = projects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  const list = sortedProjects.map((prxjxct, z) => (
    <li key={z}>
      <div key={z} className='grid gap-6 mt-3'>
        <div className='grid items-start grid-cols-1 text-carbon-500 md:grid-cols-3'>
          <div>
            <FormattedDate postDate={prxjxct} />
          </div>

          <div className='w-full md:col-span-2'>
            <p className='font-mono text-xs font-semibold text-carbon-500 dark:text-carbon-600'>
              <Link href={prxjxct.slug} className='tracking-normal'>
                {prxjxct.title}
              </Link>
            </p>
            <p className='text-[14px] font-[400] text-carbon-400 dark:text-carbon-400'>
              {prxjxct.tags.map((tag, i) => (
                <span key={i}>
                  <Link href={`/tags/${tag}`}>{tag}</Link>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <section>
      <div className='text-sm font-sohne'>
        <p className='pb-4 text-[16px] font-[500] leading-6 text-carbon-700 dark:text-carbon-50'>
          Projects
        </p>
        <ul className=''>{list}</ul>
      </div>

      <div className='flex justify-start'>
        <Link
          href='/projects'
          className='text-left font-sohne text-sm font-[500] text-carbon-500 hover:text-carbon-700 dark:hover:text-carbon-300'>
          view all projects →
        </Link>
      </div>
    </section>
  );
};

function TagChip({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span
      className={cn(
        className,
        'duration-400 mr-1 items-center justify-center whitespace-nowrap rounded-full px-2.5 py-0.5 align-middle transition-all ease-in-out hover:cursor-pointer hover:rounded-md'
      )}>
      {children}
    </span>
  );
}

function FormattedDate({ postDate }: { postDate: Projects }) {
  const publishedDate = formatDateTime(postDate.date);

  return (
    <p className='font-mono text-xs font-semibold text-carbon-500 dark:text-carbon-600'>
      {publishedDate.asString}
    </p>
  );
}
