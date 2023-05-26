import Link from 'next/link'

import {useColorGenerator, matchColors} from '../hooks/use-color-gen'
import {compareDesc} from 'date-fns'
import {formatDateTime} from '../hooks/use-date-time'

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

const allProjects = projects

function ComponentSection({children}: {children: React.ReactNode}) {
  return <section className='pt-8'>{children}</section>
}

const ListComponent = () => {
  const featured = allProjects
  featured.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  featured.splice(4)

  const listItems = featured.map((project) => (
    <li key={project._id} className='flex py-4 transition-all ease-out duration-400 gap-y-2'>
      <Link href={project.url} className='font-bold text-md text-grayscale-800 uppercase'>
        {project.title}
      </Link>
    </li>
  ))

  return (
    <ul role='list' className='w-full divide-y divide-blackA4 dark:divide-whiteA3 '>
      {listItems}
    </ul>
  )
}

export const UIProjectList = () => {
  return (
    <>
      <ComponentSection>
        <h3 className='mb-2 font-uncut text-[18px] font-semibold text-cdsbx-600'>Projects.</h3>

        <div className='w-full mx-auto overflow-hidden rounded-lg'>
          <ListComponent />
        </div>
      </ComponentSection>
    </>
  )
}

/*
Improvement is subjective and depends on the specific use case and requirements. However, here are some suggestions:

1. Use a more descriptive name for the `ListComponent` since it's not clear what it's rendering.
2. Consider using a `Card` component to display each project with a consistent layout and structure.
3. Use a `useEffect` hook to fetch the projects data instead of hardcoding it in the component.
4. Use a library like `react-query` to handle data fetching and caching.
5. Consider adding pagination or infinite scrolling for better performance and user experience if there are many projects.
6. Add error handling and loading states for better user experience.
7. Use a CSS-in-JS library like `styled-components` or `emotion` for more maintainable and reusable styling.
8. Use `import type` for importing types to improve build performance.
9. Use `React.memo` or `useMemo` to optimize performance for components that don't need to rerender on every state change.
*/
