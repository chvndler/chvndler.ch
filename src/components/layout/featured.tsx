import React from 'react';
import Link from 'next/link';

import { compareDesc } from 'date-fns';
import type { Projects } from '.contentlayer/generated/types';
import { formatDateTime } from '../../lib/hooks/use-date-time';
import { cn } from '../../lib/utils';

type ListProps = {
  projects: Projects[];
};

export const FeaturedList = ({ projects }: ListProps) => {
  const sortedProjects = projects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const listItems = sortedProjects.map((project) => (
    <li
      key={project._id}
      className='bg-blackA1 transition-colors duration-300 ease-in-out hover:bg-blackA4 dark:bg-whiteA1 dark:hover:bg-whiteA4'
    >
      <div className='m-auto flex w-full flex-row items-center justify-between'>
        <Link
          href={project.url}
          className='text-md items-center justify-start py-2 font-archivo font-semibold tracking-tight text-grey-500 hover:text-grey-700 dark:hover:text-grey-300 md:text-lg'
        >
          {project.title}
        </Link>

        <div key={project.type} className='flex flex-row items-center justify-end gap-x-1'>
          <FormattedDate postDate={project} />

          {project.tags.map((tag) => (
            <TagChip
              key={tag}
              className='hidden border border-slate-400 bg-blackA3 font-archivo text-[8.5px] font-bold uppercase text-blackA9 dark:border-slate-600 dark:bg-whiteA2 dark:text-whiteA8 sm:inline'
            >
              {tag}
            </TagChip>
          ))}
        </div>
      </div>
    </li>
  ));

  return (
    <section id='proj-sect' className='py-6'>
      <div className='mx-auto w-full overflow-hidden py-6'>
        <p className='mb-2 text-[18px] font-semibold text-grey-600 dark:text-grey-400'>Projects.</p>
        <ul className='grid grid-cols-1 items-center divide-y divide-blackA6 dark:divide-whiteA4'>
          {listItems}
        </ul>
      </div>
    </section>
  );
};

function TagChip({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span
      className={cn(
        className,
        'duration-400 items-center whitespace-nowrap rounded-full px-2.5 py-0.5 leading-normal transition-all ease-in-out hover:cursor-pointer hover:rounded-md',
      )}
    >
      {children}
    </span>
  );
}

function FormattedDate({ postDate }: { postDate: Projects }) {
  const publishedDate = formatDateTime(postDate.date);

  return (
    <p className='mr-2 text-right font-archivo text-[10px] font-semibold uppercase text-grey-400 dark:text-grey-500'>
      {publishedDate.asString}
    </p>
  );
}