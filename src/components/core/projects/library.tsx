import React from 'react';
import Link from 'next/link';

/**
 *
 * this source code is for the project index page
 * it includes all projects in the collection library.
 *
 * ./src/app/projects/[index]
 */

import { compareDesc } from 'date-fns';
import type { Projects } from '.contentlayer/generated/types';
import { formatDateTime } from '@/lib/hooks/use-date-time';
import { cn } from '@/lib/utils';

type ListProps = {
  projects: Projects[];
};

export const ProjectLibrary = ({ projects }: ListProps) => {
  const sortedProjects = projects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  const listItems = sortedProjects.map((project, i) => (
    <li
      key={i}
      className='bg-blackA1 transition-colors duration-300 ease-in-out hover:bg-blackA4 dark:bg-whiteA1 dark:hover:bg-whiteA4'>
      <div
        key={i}
        className='m-auto flex w-full flex-row items-center justify-between'>
        <Link
          href={project.url}
          className='items-center justify-start py-2 font-twk text-[15px] font-[500] uppercase text-carbon-600 hover:text-carbon-700 dark:hover:text-carbon-300 md:font-[600]'>
          {project.title}
        </Link>

        <div
          key={i}
          className='flex flex-row items-center justify-end gap-x-1'>
          <FormattedDate postDate={project} />

          {project.tags.map((tag, ti) => (
            <TagChip
              key={ti}
              className='border-slate-400 dark:border-slate-600 hidden border bg-blackA3 font-mono text-[9px] font-[600] uppercase leading-3 text-blackA9 dark:bg-whiteA2 dark:text-whiteA8 sm:inline'>
              {tag}
            </TagChip>
          ))}
        </div>
      </div>
    </li>
  ));

  return (
    <>
      <section
        id='proj-sect'
        className='py-6'>
        <div className='mx-auto w-full overflow-hidden py-6'>
          <ul className='grid grid-cols-1 items-center divide-y divide-blackA6 dark:divide-whiteA4'>
            {listItems}
          </ul>
        </div>
      </section>
    </>
  );
};

function TagChip({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      className={cn(
        className,
        'duration-400 items-center whitespace-nowrap rounded-full px-2.5 py-0.5 leading-normal transition-all ease-in-out hover:cursor-pointer hover:rounded-md',
      )}>
      {children}
    </span>
  );
}

function FormattedDate({ postDate }: { postDate: Projects }) {
  const publishedDate = formatDateTime(postDate.date);

  return (
    <p className='mr-2 text-right font-mono text-[10px] font-[600] uppercase text-blackA10 dark:text-whiteA8'>
      {publishedDate.asString}
    </p>
  );
}
