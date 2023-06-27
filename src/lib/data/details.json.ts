export interface Template {
  link: string;
  title: string;
  location: string;
  date: string;
}

const one: Template = {
  link: 'https://lexingtonthemes.com',
  title: 'Working on Lexington Themes',
  location: 'Åland Islands, Finland',
  date: '13.02.2023',
};

const two: Template = {
  link: 'https://unwrapped.design',
  title: 'Built Unwrapped',
  location: 'Åland Islands, Finland',
  date: '10.02.2022',
};

const three: Template = {
  link: 'https://colorsandfonts.com',
  title: 'Created Colors & fonts',
  location: 'Åland Islands, Finland',
  date: '10.02.2022',
};

const four = {
  link: 'https://example.com',
  title: 'New Product Launch',
  location: 'San Francisco, CA',
  date: '01.05.2022',
};

export const bytitle = {
  one,
  two,
  three,
  four,
};
export const details = Object.values(bytitle);
