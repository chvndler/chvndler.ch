export interface OtherPage {
  url: string;
  target?: string;
  type: string;
  title: string;
  content: string;
}

const arch001: OtherPage = {
  url: '/archive',
  target: '_self',
  type: 'Primitives',
  title: 'primitives',
  content: 'implementing interfaces and interactions',
};

const arch002: OtherPage = {
  url: '/media',
  target: '_self',
  type: 'Motion',
  title: 'media',
  content: 'some of my films',
};

const arch003: OtherPage = {
  url: '/projects',
  target: '_self',
  type: 'Internet Projects',
  title: 'internet projects',
  content: 'complete list of all active web projects',
};

export const bytype = {
  arch001,
  arch002,
  arch003,
};

export const pages = Object.values(bytype);
