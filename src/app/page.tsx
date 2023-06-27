import React from 'react';

/*
 * Copyright (C) 2023 @chvndler
 * All Rights Reserved.
 *
 * You may use, distribute and modify this code under the
 * terms of the MIT license. You should have received a
 * copy of the MIT license with this repository.
 *
 * See https://github.com/chvndler/chvndler.ch/license
 */

import { AppController } from '@/components/layout';

import {
  ConnectDev,
  Introduction,
  ProjectHighlights,
  Section,
} from '@/components/core';
import { allProjects } from '@/contentlayer/generated';

export default function Index() {
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
