export interface Template {
  link: string;
  type: string;
  title: string;
}

const one: Template = {
  link: 'mailto:chan@chvndler.ch',
  type: 'email',
  title: 'chan@chvndler.ch',
};

const two: Template = {
  link: 'https://twitter.com/chvndlerch',
  type: 'twitter',
  title: '@chvndlerch',
};

const three: Template = {
  link: 'https://github.com/chvndler',
  type: 'github',
  title: 'gh.com/chvndler',
};

const four: Template = {
  link: 'https://read.cv/chvndler',
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
