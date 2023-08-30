import React from 'react';
import { AppController } from '@/components/layout';
import { allProjects } from '@/contentlayer/generated';
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

import {
  Connect,
  Introduction,
  ProjectHighlights,
  Section,
} from '@/components/core';

export default function Index() {
  return (
    <>
      <AppController>
        <Section>
          <Introduction />
          <Connect />
          <ProjectHighlights projects={...allProjects.slice(0, 5)} />
        </Section>
      </AppController>
    </>
  );
}
