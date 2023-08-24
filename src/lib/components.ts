import type { ComponentType } from 'react';
import {
  //
  MenuContext,
  SpotifyContext,
  GitColourContext,
  SelectContext,
  TimeContext,
  AriePositionContext,
} from '@/components/core/interact/archive';

export interface ComponentBase {
  slug: string;
  title: string;
  excerpt: string;
  url: string;
  component: ComponentType<any>;
}

export const allComponents: ComponentBase[] = [
  {
    slug: 'menubar',
    title: 'Menu bar',
    excerpt: 'Provides a set of navigation options for the user.',
    url: '/interact/menubar',
    component: MenuContext,
  },
  {
    slug: 'spotify',
    title: 'Spotify now',
    excerpt:
      'Display the currently streaming track of a Spotify account(s) or user(s).',
    url: '/interact/spotify',
    component: SpotifyContext,
  },
  {
    slug: 'git-colour',
    title: 'Git colour',
    excerpt: 'Transform your commit SHA (GitHub) into a #HEX value.',
    url: '/interact/git-colour',
    component: GitColourContext,
  },
  {
    slug: 'kit-select',
    title: 'Select kit',
    excerpt:
      'UI Element that allows users to choose one or more options from a dropdown list.',
    url: '/interact/kit-select',
    component: SelectContext,
  },
  {
    slug: 'time',
    title: 'Modul.ar time',
    excerpt: 'UI Element that displays the current time.',
    url: '/interact/time',
    component: TimeContext,
  },
  {
    slug: 'position',
    title: 'Arie position',
    excerpt:
      'Small component that returns a string of information based on users cursor position.',
    url: '/interact/position',
    component: AriePositionContext,
  },
];

export type ComponentSlug = ComponentBase['slug'];
