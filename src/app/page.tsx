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

import { Introduction, Connect, ConnectAlternateView, MediaLine } from '../components/core';
import { AppController, FeaturedList } from '../components/layout';
import { allProjects } from '@/contentlayer/generated';

export default function Index() {
  return (
    <>
      <AppController>
        <Introduction />
        <ConnectAlternateView />
        <MediaLine />

        <FeaturedList projects={...allProjects.slice(0, 4)} />
      </AppController>
    </>
  );
}
