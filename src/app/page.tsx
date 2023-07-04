import React from 'react';
import { Memoji, MemojiBlur } from '@/components/shared/memoji';
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
  Connect,
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
          <Connect />
          <ProjectHighlights projects={...allProjects.slice(0, 5)} />
        </Section>

        <Section>
          <Memoji />

          <MemojiBlur
            src='https://cdn.chvndler.ch/assets/other/chan.memoji.gif'
            alt={'memoji'}
          />
        </Section>
      </AppController>
    </>
  );
}
