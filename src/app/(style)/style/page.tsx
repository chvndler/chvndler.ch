import React from 'react';
import { AppController } from '@/components/layout';
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

import { ColumnSection } from '@/components/core';
import { Memoji } from '@/components/shared/memoji';

export default function Index() {
  return (
    <>
      <AppController>
        <ColumnSection>
          <Memoji />
        </ColumnSection>
      </AppController>
    </>
  );
}
