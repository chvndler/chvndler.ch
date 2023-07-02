import type { ComponentType } from 'react';

// import all components..

import {
  //
  MenuContext,
  SpotifyContext,
  GitColourContext,
  SelectContext,
  TimeContext,
  AriePositionContext,
} from '@/components/core/interact/archive';

interface ComponentBase {
  type: string;
  slugAsParams: string;
  title: string;
  excerpt: string;
  slug: string;
  url: string;
  component: ComponentType<any>;
}

export const allComponents: ComponentBase[] = [
  {
    type: 'Archive',
    slugAsParams: 'menubar',
    title: 'Menu bar',
    excerpt: 'Provides a set of navigation options for the user.',
    slug: '/interact/menubar',
    url: '/interact/menubar',
    component: MenuContext,
  },
  {
    type: 'Archive',
    slugAsParams: 'spotify',
    title: 'Spotify now',
    excerpt:
      'Display the currently streaming track of a Spotify account(s) or user(s).',
    slug: '/interact/spotify',
    url: '/interact/spotify',
    component: SpotifyContext,
  },
  {
    type: 'Archive',
    slugAsParams: 'git-colour',
    title: 'Git colour',
    excerpt: 'Transform your commit SHA (GitHub) into a #HEX value.',
    slug: '/interact/git-colour',
    url: '/interact/git-colour',
    component: GitColourContext,
  },
  {
    type: 'Archive',
    slugAsParams: 'kit-select',
    title: 'Select kit',
    excerpt:
      'UI Element that allows users to choose one or more options from a dropdown list.',
    slug: '/interact/kit-select',
    url: '/interact/kit-select',
    component: SelectContext,
  },
  {
    type: 'Archive',
    slugAsParams: 'time',
    title: 'Modul.ar time',
    excerpt: 'UI Element that displays the current time.',
    slug: '/interact/time',
    url: '/interact/time',
    component: TimeContext,
  },
  {
    type: 'Archive',
    slugAsParams: 'position',
    title: 'Arie position',
    excerpt:
      'Small component that returns a string of information based on users cursor position.',
    slug: '/interact/postion',
    url: '/interact/position',
    component: AriePositionContext,
  },
];

export type Component = (typeof allComponents)[number];
export type ComponentSlug = Component['slugAsParams'];
export type Components = keyof typeof allComponents;
