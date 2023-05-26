// server.

import React from 'react';
import { AlternateIntroduction, Connect } from '../components/core';
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
      <AlternateIntroduction />
      <Connect />
      <UIProjectList />
    </>
  );
}
/*
const features = [
  {
    title: 'Beautiful, reusable components',
    description:
      'Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)',
    large: true,
  },
  {
    title: 'Performance first',
    description:
      'Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.',
    demo: <WebVitals />,
  },
];
*/
