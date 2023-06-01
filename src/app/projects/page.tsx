import { allProjects } from 'contentlayer/generated';
import { ProjectList } from '../../components/layout';

import { internet_projects } from '../../lib/copyright';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Chandler Ch - Projects',
  description: 'Projects I have worked on, and am currently working on.',
};

export default function ProjectsIndex() {
  const heading = internet_projects.heading;
  const web = internet_projects.copyright;

  return (
    <>
      <section className='py-10'>
        <h3 className='mb-2 font-archivo text-2xl font-normal tracking-tight text-carbon-700 dark:text-carbon-300'>
          {heading.partial} <span className='font-bold'>{heading.bold}</span>
        </h3>
        <p className='max-w-md font-archivo text-[9px] font-medium text-carbon-400 dark:text-carbon-300'>
          <span className='font-semibold'>{web.tag}</span>
        </p>
      </section>
      <ProjectList projects={allProjects} />
    </>
  );
}
