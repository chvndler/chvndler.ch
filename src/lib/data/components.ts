import type { ComponentBase } from './types';
import {
  //
  MenuContext,
  SpotifyContext,
  GitColourContext,
  SelectContext,
  TimeContext,
  AriePositionContext,
} from '@/components/core/interact/archive';

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
  {
    slug: 'buttons',
    title: 'Buttons',
    excerpt:
      'A variety of styled buttons, each designed to enhance user interactions within applications.',
    url: '/interact/buttons',
    component: TimeContext,
  },
  {
    slug: 'navigation',
    title: 'Navigation',
    excerpt:
      'Selected navigation components that I have built and collected over time.',
    url: '/interact/navigation',
    component: TimeContext,
  },
];

export type ComponentSlug = ComponentBase['slug'];
