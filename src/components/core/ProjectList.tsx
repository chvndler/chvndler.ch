import Link from 'next/link'
import {PageSection} from './page'

import {useColorGenerator, matchColors} from '../hooks/use-color-gen'
import {formatDateTime} from '../hooks/use-date-time'
import {BadgeDefault} from '../ui/badge'

import {projects} from '../../lib/projects'

type Projects = {
  date: string
  title: string
  tags: string[]
  _id: string
}

/**
 *
 * ProjectTags() + FormattedDate() are below..
 */
export const ProjectList = () => {
  return (
    <>
      <PageSection>
        <div className='py-4'>
          <h3 className='mb-2 text-2xl font-[560] tracking-tight font-fraktion text-grayscale-800 dark:text-grayscale-400'>
            projects.
          </h3>
        </div>
        <ul
          role='list'
          className='w-full divide-y divide-blackA5 dark:divide-whiteA5'
        >
          {projects.map((source) => (
            <>
              <li
                key={source._id}
                className='flex flex-row items-baseline justify-between h-auto py-3 transition-all ease-out duration-400 hover:ease-in gap-y-2 bg-blackA1 hover:bg-blackA2 dark:bg-whiteA1 dark:hover:bg-whiteA3'
              >
                <div className='flex items-center'>
                  <p className='font-[620] leading-5 tracking-normal uppercase font-fraktion text-md text-grayscale-700'>
                    <Link href={source.url} target='_self' className='w-full'>
                      {source.name}
                    </Link>
                  </p>
                </div>

                {/* Published Date & Tags */}
                <div className='hidden gap-x-3 sm:flex sm:flex-row sm:items-end'>
                  <p className='mt-1 leading-4 uppercase'>
                    <ProjectTags key={source.title} {...source} />
                  </p>
                  <p className='font-fraktion leading-4 text-[11px] uppercase text-grayscale-700 dark:text-grayscale-800 font-[580]'>
                    <FormattedDate key={source.date} {...source} />
                  </p>
                </div>
              </li>
            </>
          ))}
        </ul>
      </PageSection>
    </>
  )
}

function FormattedDate(projects: Projects) {
  const publishedDate = formatDateTime(projects.date)

  return <>{publishedDate.asRelativeTimeString}</>
}

/*
  <span className='whitespace-nowrap rounded-full font-fraktion leading-4 bg-blackA4 px-2.5 py-0.5 text-[11px] text-grayscale-700 dark:text-grayscale-800 dark:bg-whiteA4 font-[580]'>
*/
/**
 *
 * ProjectTags.
 *
 * (comma separated list of tags)
 */
function ProjectTags(projects: Projects) {
  return (
    <>
      {projects.tags.map((tag, index) => (
        <span key={projects.title} className='mr-1'>
          <Link href={`/tags/${tag}`}>
            <BadgeDefault>
              {projects.tags.length - 1 === index ? tag : `${tag}`}
            </BadgeDefault>
          </Link>
        </span>
      ))}
    </>
  )
}
