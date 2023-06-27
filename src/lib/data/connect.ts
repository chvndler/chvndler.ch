export interface Template {
  url: string;
  target?: string;
  type: string;
  title: string;
}

const one: Template = {
  url: 'mailto:chan@chvndler.ch',
  target: '_blank',
  type: 'email',
  title: 'chan@chvndler.ch',
};

const two: Template = {
  url: 'https://twitter.com/chvndlerch',
  target: '_blank',
  type: 'twitter',
  title: '@chvndlerch',
};

const three: Template = {
  url: 'https://github.com/chvndler',
  target: '_blank',
  type: 'github',
  title: 'gh.com/chvndler',
};

const four: Template = {
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
};

export const connects = Object.values(bytype);
