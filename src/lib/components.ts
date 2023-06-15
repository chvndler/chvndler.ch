import type { ComponentType } from 'react';

// import all components..

import {
  //
  MenuContext,
  SpotifyContext,
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
    excerpt: 'Display the currently playing song on a user(s) Spotify account.',
    slug: '/archive/spotify',
    url: '/archive/spotify',
    component: SpotifyContext,
  },
];

export type Component = (typeof allComponents)[number];
export type ComponentSlug = Component['slugAsParams'];
export type Components = keyof typeof allComponents;
