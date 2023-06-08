import { allProjects } from 'contentlayer/generated';
import { AppWrapper, ProjectList } from '../../components/layout';

import type { Metadata } from 'next/types';
import { content } from '../../lib/website.config';

export const metadata: Metadata = {
  title: 'Chandler Ch - Projects',
  description: 'Projects I have worked on, and am currently working on.',
};

export default function ProjectsIndex() {
  const copy = content.projects;

  return (
    <>
      <AppWrapper>
        <section className='py-10'>
          <h3 className='mb-2 font-archivo text-2xl font-normal tracking-tight text-carbon-700 dark:text-carbon-300 lg:text-3xl'>
            {copy.heading.partial} <span className='font-bold'>{copy.heading.bold}</span>
          </h3>
          <p className='max-w-md font-archivo text-[9px] font-medium text-carbon-400 dark:text-carbon-300'>
            <span className='font-semibold'>{copy.copyright.tag}</span>
          </p>
        </section>
        <ProjectList projects={allProjects} />
      </AppWrapper>
    </>
  );
}
