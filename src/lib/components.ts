import type { ComponentType } from 'react';

// import all components..

import {
  //
  MenuContext,
  SpotifyContext,
  GitColourContext,
  SelectContext,
  TimeContext,
} from '@/components/shared/archive';

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
    title: 'Menu Bar',
    excerpt: 'Provides a set of navigation options for the user.',
    slug: '/archive/menubar',
    url: '/archive/menubar',
    component: MenuContext,
  },
  {
    type: 'Archive',
    slugAsParams: 'spotify',
    title: 'Spotify Now',
    excerpt: 'Display the currently streaming track of a Spotify account(s) or user(s).',
    slug: '/archive/spotify',
    url: '/archive/spotify',
    component: SpotifyContext,
  },
  {
    type: 'Archive',
    slugAsParams: 'git-colour',
    title: 'Git Colour',
    excerpt: 'Transform your commit SHA (GitHub) into a #HEX value.',
    slug: '/archive/git-colour',
    url: '/archive/git-colour',
    component: GitColourContext,
  },
  {
    type: 'Archive',
    slugAsParams: 'kit-select',
    title: 'Select Kit',
    excerpt:
      'UI Element that allows users to choose one or more options from a dropdown list.',
    slug: '/archive/kit-select',
    url: '/archive/kit-select',
    component: SelectContext,
  },
  {
    type: 'Archive',
    slugAsParams: 'time',
    title: 'Current Time',
    excerpt: 'UI Element that displays the current time.',
    slug: '/archive/time',
    url: '/archive/time',
    component: TimeContext,
  },
];

export type Component = (typeof allComponents)[number];
export type ComponentSlug = Component['slugAsParams'];
export type Components = keyof typeof allComponents;
