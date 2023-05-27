import React from 'react';
import Link from 'next/link';

import { compareDesc } from 'date-fns';
import type { Projects } from '.contentlayer/generated/types';
import { cn } from '@/lib/utils';

type ListProps = {
  projects: Projects[];
};

export const FeaturedList = ({ projects }: ListProps) => {
  const sortedProjects = projects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  const listItems = sortedProjects.map((project) => (
    <li key={project._id} className=''>
      <div className='flex flex-row items-center justify-between w-full m-auto'>
        <Link
          href={project.url}
          className='items-center justify-start py-2 text-lg font-semibold tracking-tight font-archivo text-blackA10 dark:text-whiteA10'
        >
          {project.title}
        </Link>

        <div className='flex flex-row items-center justify-end gap-x-1'>
          {project.tags.map((tag) => (
            <TagChip
              key={tag}
              className='border border-slate-800 bg-blackA1 font-archivo text-[9px] font-medium uppercase text-slate-600 dark:bg-whiteA2 dark:text-slate-600'
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
      <div className='w-full py-6 mx-auto overflow-hidden'>
        <p className='mb-2 font-semibold text-18 text-cdsbx-600'>Projects.</p>
        <ul className='grid items-center grid-cols-1 divide-y gap-y-2 divide-blackA6 dark:divide-whiteA4'>
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
        'items-center whitespace-nowrap rounded-full px-2.5 py-0.5 leading-normal',
      )}
    >
      {children}
    </span>
  );
}
