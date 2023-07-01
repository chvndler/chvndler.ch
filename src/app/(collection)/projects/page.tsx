import { allProjects } from 'contentlayer/generated';
import { AppController } from '@/components/layout';
import { ProjectLibrary } from '@/components/core/projects';

import type { Metadata } from 'next/types';
import { content } from '@/lib/website.config';

export const metadata: Metadata = {
  title: 'All Projects',
  description:
    'Internet projects that I have completed or are currently in progress.',
};

export default function ProjectsIndex() {
  const copy = content.projects;

  return (
    <>
      <AppController>
        <section className='py-10'>
          <h3 className='mb-2 font-favorit text-2xl font-[400] uppercase tracking-tight text-carbon-700 dark:text-carbon-100 lg:text-3xl'>
            {copy.heading.partial}{' '}
            <span className='font-[600]'>{copy.heading.bold}</span>
          </h3>
          <p className='max-w-md font-favorit text-[9px] font-medium text-carbon-400 dark:text-carbon-300'>
            <span className='font-[500]'>{copy.copyright.tag}</span>
          </p>
        </section>
        <ProjectLibrary projects={allProjects} />
      </AppController>
    </>
  );
}
