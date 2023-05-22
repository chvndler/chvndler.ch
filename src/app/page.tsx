import Link from 'next/link'
import {compareDesc} from 'date-fns'

import {allProjects} from 'contentlayer/generated'
import type {Projects} from 'contentlayer/generated'

import {formatDateTime} from '../components/hooks/use-date-time'
import {
  PageSection,
  HLevelThree,
  ComponentSection,
  LargeSpacer,
  Canvas,
} from '../components/core'
import {Introduction} from '../components/slices'

/**
 *
 *
 * displaying featured projects.
 * 1. The `allProjects` array is sorted by date in descending order.
 * 2. The first four projects in the array are then stored in the `featured` variable.
 * 3. The component renders an `Introduction`, `Connect`, and `Projects` section.
 * 4. The `Projects` section displays a list of the featured projects.
 * 5. For each project, a `Link` component is rendered with a `li` element containing the project title, tags, and date.
 * 6. The `ProjectTags` and `FormattedDate` components are used to render the tags and date for each project.
 */

export default function Index() {
  return (
    <>
      <Canvas>
        <p>will be back shortly.</p>
        <p>sorry for the inconvenience.</p>
      </Canvas>

      {/* 
      <PageSection>
        <Introduction />
        <FeaturedProjects />
      </PageSection>
    */}
    </>
  )
}

const FeaturedProjects = () => {
  const featured = allProjects
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 4)

  return (
    <>
      <LargeSpacer />
      <ComponentSection>
        <HLevelThree>Projects</HLevelThree>
        <div className='pv2'>
          <ul className='list pl0 mt0 center'>
            {featured.map((post) => (
              <article key={post._id}>
                <Link href={post.url}>
                  <li className='lh-copy pv2 ba bl-0 bt-0 br-0 b--solid b--light-gray bg-animate hover-bg-light-gray'>
                    <div className='f-row tween baseline flex'>
                      <h4 className='link dim fw6 f6 mid-gray pb1 ttu aspekta'>
                        {post.title}
                      </h4>
                      <p className='f8 fw5 ttu gray dim aspekta'>
                        <ProjectTags post={post} /> ·{' '}
                        <FormattedDate post={post} />
                      </p>
                    </div>
                  </li>
                </Link>
              </article>
            ))}
          </ul>
        </div>
      </ComponentSection>
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
function FormattedDate({post}: {post: Projects}) {
  const publishedDate = formatDateTime(post.date)

  return <>{publishedDate.asRelativeTimeString}</>
}

/**
 *
 * ProjectTags.
 *
 * (comma separated list of tags)
 */
function ProjectTags({post}: {post: Projects}) {
  return (
    <>
      <span>
        {post.tags.map((tag, index) => (
          <span key={post.slug}>
            {post.tags.length - 1 === index ? tag : `${tag}, `}
          </span>
        ))}
      </span>
    </>
  )
}
