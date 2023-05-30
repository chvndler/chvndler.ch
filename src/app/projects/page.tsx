import { allProjects } from 'contentlayer/generated';
import { ProjectList } from '../../components/layout';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Chandler Ch - Projects',
  description: 'Projects I have worked on, and am currently working on.',
};

export default function ProjectsIndex() {
  return (
    <>
      <ProjectList projects={allProjects} />
    </>
  );
}
