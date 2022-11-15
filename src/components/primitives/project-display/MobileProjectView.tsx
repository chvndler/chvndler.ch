import React from 'react';

import { Section } from '@/components/ds';

import { ProjectEntry } from './ProjectEntry';

export const MobileProjectView = () => {
  return (
    <>
      <Section size={'3'} css={{ '@initial': { display: 'block' }, '@lg': { display: 'none' } }}>
        <ProjectEntry
          pRepository="https://github.com/chvndler"
          pTitle="atlr.typesxript"
          pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
      </Section>
    </>
  );
};
