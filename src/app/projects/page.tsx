import { allProjects } from 'contentlayer/generated';
import { ProjectList } from '../../components/layout';

import { internet_projects } from '../../lib/copyright';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Chandler Ch - Projects',
  description: 'Projects I have worked on, and am currently working on.',
};

export default function ProjectsIndex() {
  const web = internet_projects.copyright;

  return (
    <>
      <section className='py-10'>
        <h3 className='mb-2 font-archivo text-2xl font-normal tracking-tight text-grey-500 dark:text-grey-400'>
          Internet <span className='font-bold'>projects</span>.
        </h3>
        <p className='max-w-md font-archivo text-[9px] font-medium text-grey-400 dark:text-grey-500'>
          <span className='font-semibold text-grey-500'>{web.tag}</span>
        </p>
      </section>
      <ProjectList projects={allProjects} />
    </>
  );
}
