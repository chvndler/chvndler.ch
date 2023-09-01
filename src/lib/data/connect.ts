import { type ConnectTemplate } from './types';

const one: ConnectTemplate = {
  url: 'mailto:chan@chvndler.ch',
  target: '_blank',
  type: 'email',
  title: 'chan@chvndler.ch',
};

const two: ConnectTemplate = {
  url: 'https://x.com/chvndlerch',
  target: '_blank',
  type: 'x',
  title: '@chvndlerch',
};

const three: ConnectTemplate = {
  url: 'https://github.com/chvndler',
  target: '_blank',
  type: 'github',
  title: 'gh.com/chvndler',
};

const four: ConnectTemplate = {
  url: 'https://codesandbox.io/u/chvndler',
  target: '_blank',
  type: 'codesandbox',
  title: 'codesandbox.io',
};

const five: ConnectTemplate = {
  url: 'https://read.cv/chvndler',
  target: '_blank',
  type: 'read.cv',
  title: 'read.cv/chvndler',
};

export const bytype = {
  one,
  two,
  three,
  four,
  five,
};

export const connects = Object.values(bytype);
