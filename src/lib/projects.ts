export const projects = [
  {
    _id: 'projects/atelierkit.mdx',
    title: 'Atelier® Kit©',
    description: 'Occaecat consectetur cillum amet pariatur et.',
    excerpt: 'Tempor anim consequat qui minim elit velit esse.',
    date: '2023-05-18T00:00:00.000Z',
    url: '/projects/atelierkit',
    tags: ['design system'],
    //
    name: 'Atelier® Kit',
    // imageUrl: useColorGenerator('atelierkit', matchColors),
  },
  {
    _id: 'projects/personal-site.mdx',
    title: 'personal site',
    description: 'Occaecat consectetur cillum amet pariatur et.',
    excerpt: 'Tempor anim consequat qui minim elit velit esse.',
    date: '2023-05-08T00:00:00.000Z',
    url: 'https://github.com/chvndler/chvndler.ch',
    tags: ['frameworks'],
    //
    name: 'Personal',
    // imageUrl: useColorGenerator('personalsite', matchColors),
  },
  {
    _id: 'projects/arie.mdx',
    title: 'arie.js',
    description: 'Occaecat consectetur cillum amet pariatur et.',
    excerpt: 'Tempor anim consequat qui minim elit velit esse.',
    date: '2023-04-02T00:00:00.000Z',
    url: '/projects/arie',
    tags: ['design', 'scripts'],
    //
    name: 'Arie.js',
    // imageUrl: useColorGenerator('arie.js', matchColors),
  },
];

export const projectsSorted = projects.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
