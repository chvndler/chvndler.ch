import { type OtherPagesProps } from './types';

const interact: OtherPagesProps = {
  url: '/interact',
  target: '_self',
  type: 'Interactions',
  title: 'interactions',
  content: 'implementing interfaces and interactions',
};

const media: OtherPagesProps = {
  url: '/media',
  target: '_self',
  type: 'Motion',
  title: 'media',
  content: 'visual design and communication',
};

const projects: OtherPagesProps = {
  url: '/projects',
  target: '_self',
  type: 'Internet Projects',
  title: 'internet projects',
  content: 'various internet projects, libraries and experiments',
};

export const pageTypes: Record<string, OtherPagesProps> = {
  interact,
  media,
  projects,
};

export const otherPages = Object.values(pageTypes);
