import { AppController } from '@/components/layout';

import type { Metadata } from 'next/types';
import {
  Connect,
  Introduction,
  ProjectHighlights,
  Section,
} from '@/components/core';
import { allProjects } from '@/contentlayer/generated';
import Leaflet from '@/components/primitives/leaflet';
import Logo from '@/components/shared/logo';

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
          <Connect />
          <ProjectHighlights projects={...allProjects.slice(0, 4)} />
        </Section>
      </AppController>
    </>
  );
}
