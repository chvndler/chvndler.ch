import Link from 'next/link'

import {PageSection} from './page'
import {useColorGenerator, matchColors} from '../hooks/use-color-gen'

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
]

export const UIProjectList = () => {
  return (
    <>
      <PageSection>
        <h3 className='mb-2 text-xl font-semibold font-uncut text-grayscale-800'>Projects.</h3>
        <ul role='list' className='w-full divide-y divide-blackA4 dark:divide-whiteA8'>
          {projects.map((project) => (
            <li key={project._id} className='p-0 transition-all ease-out duration-400 gap-y-2'>
              <Link
                key={project._id}
                href={project.url}
                className='block py-2 text-sm font-semibold bg-blackA1 font-uncut text-grayscale-700 hover:bg-blackA3'
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  )
}
