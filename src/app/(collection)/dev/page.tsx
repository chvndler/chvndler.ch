import { AppController } from '@/components/layout';

import type { Metadata } from 'next/types';
import {
  ConnectDev,
  Introduction,
  ProjectHighlights,
  Section,
} from '@/components/core';
import { allProjects } from '@/contentlayer/generated';

export const metadata: Metadata = {
  title: 'dev.chandler.',
  description: 'Projects I have worked on, and am currently working on.',
};

export default function DevIndex() {
  return (
    <>
      <AppController>
        <Section>
          <Introduction />
          <ConnectDev />
          <ProjectHighlights projects={...allProjects.slice(0, 4)} />
        </Section>
      </AppController>
    </>
  );
}
