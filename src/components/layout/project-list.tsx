import React from 'react';
import Link from 'next/link';

import { useColorGenerator, matchColors } from '../../lib/hooks/use-color-gen';
import { compareDesc } from 'date-fns';

const projects = [
  {
    _id: 'projects/atelierkit.mdx',
    title: 'atelier® kit',
    description: 'Occaecat consectetur cillum amet pariatur et.',
    excerpt: 'Tempor anim consequat qui minim elit velit esse.',
    date: '2023-05-18T00:00:00.000Z',
    url: '/projects/atelierkit',
    tags: ['design system'],
    //
    name: 'Atelier® Kit.',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    imageUrl: useColorGenerator('atelierkit', matchColors),
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
    name: 'Personal.',
    // eslint-disable-next-line react-hooks/rules-of-hooks
    imageUrl: useColorGenerator('personalsite', matchColors),
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    imageUrl: useColorGenerator('arie.js', matchColors),
  },
];

const allProjects = projects;

function ComponentSection({ children }: { children: React.ReactNode }) {
  return <section className="pt-8">{children}</section>;
}

export const UIProjectList = () => {
  return (
    <>
      <div className="mx-auto w-full overflow-hidden py-6">
        <p className="mb-2 text-[18px] font-semibold text-cdsbx-600">Projects.</p>
        <ListComponent />
      </div>
    </>
  );
};

const ListComponent = () => {
  const featured = allProjects;
  featured.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  featured.splice(4);

  const listItems = featured.map((project) => (
    <li
      key={project._id}
      className="duration-400 flex gap-y-1 bg-blackA1 py-2 transition-all ease-out hover:bg-blackA3 dark:bg-whiteA1 dark:hover:bg-whiteA3"
    >
      <Link
        href={project.url}
        className="font-archivo text-lg font-semibold tracking-tight text-blackA10 dark:text-whiteA10"
      >
        {project.title}
      </Link>
    </li>
  ));

  return (
    <ul role="list" className="w-full divide-y divide-blackA4 dark:divide-whiteA3 ">
      {listItems}
    </ul>
  );
};
