// server.

import React from 'react'
import {PageSection} from '../components/core'
import {Introduction} from '../components/core/introduction'
// import {FeaturedProjects} from '../components/core/featured-projects'
import {UIProjectList} from '@/components/core/project-list'

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
      <PageSection>
        <Introduction />
        <UIProjectList />
      </PageSection>
    </>
  )
}
