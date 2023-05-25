import Link from 'next/link'
import {allProjects} from 'contentlayer/generated'
import {PageSection} from './page'
import {BadgeDefault} from '../ui/badge'
import {compareDesc} from 'date-fns'
import {formatDateTime} from '../hooks/use-date-time'
// ..
import type {Projects} from 'contentlayer/generated'
import {features} from 'process'
type FeaturedProjectsProps = Projects

/**
 *
 * © FeaturedProjects.
 *
 * this components renders a `ul` list element displaying
 * the most recent 4 featured projects.
 *
 * – the `allProjects` array is sorted by date in descending order.
 * – the first (4) projects in the array are then stored in the `featured` variable.
 * – the `featured` variable with a `source` map-array joining the components back togethher.
 * – for each project, a `li` element containing the project title, tags, and date are rendered.
 * – the `ProjectTags` and `FormattedDate` components are used to render the tags and date for each project.
 *
 * note: we extracted the type `FeaturedProjectsProps` from the `Projects` type to enable type-checking
 *       and to prevent us having to pass every `Projects` property.
 */

export const FeaturedProjects = () => {
  const featured = allProjects
  featured.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  featured.splice(4)

  return (
    <>
      <PageSection>
        <div className='py-4'>
          <h3 className='mb-2 font-inter text-xl font-[500] text-grayscale-800 dark:text-grayscale-800'>
            Projects
          </h3>
        </div>

        <ul role='list' className='w-full divide-y divide-blackA5 dark:divide-whiteA5'>
          {featured.map((source) => (
            <li
              key={source._id}
              className='duration-400 flex h-auto flex-row items-baseline justify-between gap-y-2 bg-blackA1 py-3 transition-all ease-out hover:bg-blackA2 hover:ease-in dark:bg-whiteA1 dark:hover:bg-whiteA3'
            >
              <div className='flex items-center'>
                <p className='text-md font-fraktion font-[620] uppercase leading-5 tracking-normal text-grayscale-700'>
                  <Link href={source.url} target='_self' className='w-full'>
                    {source.title}
                  </Link>
                </p>
              </div>

              <div className='hidden gap-x-3 sm:flex sm:flex-row sm:items-end'>
                <span className='mt-1 uppercase leading-4'>
                  {source.tags.map((tag, index) => (
                    <>
                      <BadgeDefault>
                        {source.tags.length - 1 === index ? tag : `${tag}`}
                      </BadgeDefault>
                    </>
                  ))}
                </span>
                <p className='font-fraktion text-[11px] font-[580] uppercase leading-4 text-grayscale-700 dark:text-grayscale-800'>
                  <FormattedDate key={source._id} source={source} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  )
}

/**
 *
 * © FormattedDate.
 * (date formatted as relative time string)
 *
 * Ex: `3 days ago`
 */
function FormattedDate({source}: {source: FeaturedProjectsProps}) {
  const publishedDate = formatDateTime(source.date)

  return <>{publishedDate.asRelativeTimeString}</>
}
