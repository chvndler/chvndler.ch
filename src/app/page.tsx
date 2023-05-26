// server.

import React from 'react';
import { Introduction, Connect } from '../components/core';
import { UIProjectList } from '../components/layout';

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
      <UIProjectList />
    </>
  );
}
