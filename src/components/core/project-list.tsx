import {PageSection} from './page'
import {useColorGenerator, matchColors} from '../hooks/use-color-gen'
import {formatDateTime} from '../hooks/use-date-time'
import Link from 'next/link'

const projects = [
  {
    _id: 'projects/atelierkit.mdx',
    title: 'Atelier® Kit©',
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
        <ul
          role='list'
          className='w-full divide-y divide-blackA8 dark:divide-whiteA8'
        >
          {projects.map((source) => (
            <>
              <Link href={source.url} target='_self'>
                <li
                  key={source._id}
                  className='flex justify-between py-3 gap-x-4 bg-blackA hover:bg-blackA3'
                >
                  <div className='flex items-center gap-x-2'>
                    {/* Image 
                <img
                  src={source.imageUrl}
                  alt={source.name}
                  width={38}
                  height={38}
                  className='flex-none rounded-md'
                />
                */}

                    {/* Name and Excerpt?Description */}
                    <div className='flex-auto min-w-0'>
                      <p className='font-extrabold leading-4 tracking-wide uppercase font-tstar text-md text-grayscale-800'>
                        {source.name}
                      </p>

                      {/*
                  {source.excerpt ? (
                    <p className='mt-1 text-[11px] font-semibold leading-4 uppercase text-zinc9 font-sfmono'>
                      <span>{source.description}</span>
                    </p>
                  ) : (
                    <p className='text-xs leading-4 text-gray-500'>
                      When would I see this text?
                    </p>
                  )}
                */}
                    </div>
                  </div>

                  <div className='flex flex-row items-end sm:hidden gap-x-3'>
                    <p className='mt-1 text-[11px] font-semibold leading-4 uppercase text-zinc9 font-sfmono'>
                      <span>View project</span>
                    </p>
                  </div>

                  {/* Published Date & Tags */}
                  <div className='hidden gap-x-3 sm:flex sm:flex-row sm:items-end'>
                    <p className='mt-1 text-[11px] font-semibold leading-4 uppercase text-zinc9 font-sfmono'>
                      <ProjectTags key={source.title} {...source} />
                    </p>
                    <p className='text-[11px] font-semibold leading-4 uppercase text-gray11 font-sfmono'>
                      <FormattedDate key={source.date} {...source} />
                    </p>
                  </div>
                </li>
              </Link>
            </>
          ))}
        </ul>
      </PageSection>
    </>
  )
}

/**
 *
 * FormattedDate.
 *
 * 1. The `FormattedDate` component accepts a `post` prop.
 * 2. The `post` prop is a `Projects` object.
 * 3. The `post` object is destructured to access the `date` property.
 * 4. The `date` property is passed to the `formatDateTime` function.
 * 5. The `formatDateTime` function returns an object with a relative time string.
 */

type Projects = {
  date: string
  title: string
  tags: string[]
  _id: string
}

function FormattedDate(projects: Projects) {
  const publishedDate = formatDateTime(projects.date)

  return <>{publishedDate.asRelativeTimeString}</>
}

/**
 *
 * ProjectTags.
 *
 * (comma separated list of tags)
 */
function ProjectTags(projects: Projects) {
  return (
    <>
      <span>
        {projects.tags.map((tag, index) => (
          <span key={projects.title}>
            {projects.tags.length - 1 === index ? tag : `${tag}, `}
          </span>
        ))}
      </span>
    </>
  )
}
