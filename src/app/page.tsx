// server.

import React from 'react';
import { Introduction, Connect } from '../components/core';
import { FeaturedList } from '../components/layout';
import { allProjects } from '@/contentlayer/generated';

/*
 * Copyright (C) 2023 @chvndler
 * All Rights Reserved.
 *
 * You may use, distribute and modify this code under the
 * terms of the MIT license. You should have received a
 * copy of the MIT license with this repository.
 *
 * See https://github.com/chvndler/chvndler.ch
 */

export default function Index() {
  return (
    <>
      <Introduction />
      <Connect />
      <FeaturedList projects={...allProjects.slice(0, 4)} />

      {/* <!--
      <FeaturedList
        projects={[
          //..
          allProjects[1],
          allProjects[2],
          allProjects[3],
          // ...allProjects.slice(1, 4)
        ]}
      />
      --> */}
    </>
  );
}
