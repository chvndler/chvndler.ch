import Link from 'next/link'
import {allProjects} from 'contentlayer/generated'
import {PageSection} from './page'
import {BadgeDefault} from '../ui/badge'
import {compareDesc} from 'date-fns'
import {formatDateTime} from '../hooks/use-date-time'
// ..
import {siteURL} from '../../lib/const'
import type {Projects} from 'contentlayer/generated'
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

function getImageUrl(featured: Projects) {
  return `${siteURL}/` + featured.image
}
/*
export default function List() {
  const featured = allProjects
  const listItems = featured.map((src) => (
    <li
      key={src._id}
      className='flex flex-row items-center justify-between w-full h-auto py-3 mx-auto transition-all ease-out duration-400 gap-y-2 bg-blackA1 hover:bg-blackA2 hover:ease-in dark:bg-whiteA1 dark:hover:bg-whiteA3'
    >
      <>
        <div className='flex flex-row items-center justify-between w-full'>
          <div key={src._id} className='flex items-center justify-start'>
            <p className='text-md font-fraktion font-[620] uppercase leading-5 tracking-normal text-grayscale-700'>
              <Link href={src.url} target='_self' className=''>
                {src.title}
              </Link>
            </p>
          </div>

          <div
            key={src._id}
            className='items-center justify-end hidden w-auto mx-auto sm:flex sm:flex-row sm:items-center'
          >
            <p className='text-right font-fraktion text-[11px] font-[580] uppercase leading-4 text-grayscale-700 dark:text-grayscale-800'>
              <FormattedDate key={src._id} source={src} />
            </p>
          </div>
        </div>
      </>
    </li>
  ))
  return (
    <ul role='list' className='w-full divide-y divide-blackA5 dark:divide-whiteA5'>
      {listItems}
    </ul>
  )
}
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
        <PList />
      </PageSection>
    </>
  )
}

function PList() {
  const featured = allProjects
  featured.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  featured.splice(4)

  const items = featured.map((src) => (
    <li key={src._id}>
      <>
        {src.title} · <FormattedDate key={src._id} source={src} /> → {src._id}
      </>
    </li>
  ))

  return <ul role='list'>{items}</ul>
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

/*
        <ul role='list' className='w-full divide-y divide-blackA5 dark:divide-whiteA5'>
          {featured.map((source) => (
            <>
              <article key={source._id}>
                <li
                  key={source._id}
                  className='flex flex-row items-baseline justify-between h-auto py-3 transition-all ease-out duration-400 gap-y-2 bg-blackA1 hover:bg-blackA2 hover:ease-in dark:bg-whiteA1 dark:hover:bg-whiteA3'
                >
                  <div key={source._id} className='flex items-center'>
                    <p className='text-md font-fraktion font-[620] uppercase leading-5 tracking-normal text-grayscale-700'>
                      <Link href={source.url} target='_self' className='w-full'>
                        {source.title}
                      </Link>
                    </p>
                  </div>

                  <div key={source._id} className='hidden gap-x-1 sm:flex sm:flex-row sm:items-end'>
                    {source.tags.map((tag, index) => (
                      <span key={source._id} className='leading-4 uppercase'>
                        <BadgeDefault key={source._id}>
                          {source.tags.length - 1 === index ? tag : `${tag}`}
                        </BadgeDefault>
                      </span>
                    ))}

                    <p className='font-fraktion text-[11px] font-[580] uppercase leading-4 text-grayscale-700 dark:text-grayscale-800'>
                      <FormattedDate key={source._id} source={source} />
                    </p>
                  </div>
                </li>
              </article>
            </>
          ))}
        </ul>
*/
