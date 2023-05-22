import Image from 'next/image'
import Link from 'next/link'

import {allProjects} from 'contentlayer/generated'
import type {Projects} from 'contentlayer/generated'
import type {Metadata} from 'next/types'

import {PageSection} from '../../components/core'
import {formatDateTime} from '../../components/hooks/use-date-time'
import {compareDesc} from 'date-fns'

export const metadata: Metadata = {
  title: 'Chandler Ch - Projects',
  description: 'Projects I have worked on, and am currently working on.',
}

interface ProjectListProps {
  post: Projects
}

const projectOrder = allProjects.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
)

export default function ProjectsIndex() {
  return (
    <PageSection>
      <h3 className='f3 fw4 track-n-02 gray pb4 aspekta'>
        Some of my <span className='fw6 gravel'>work</span>.
      </h3>

      <ul className='list cf'>
        {projectOrder.map((post) => (
          <>
            <article key={post._id} className='fl w-100 w-50-ns'>
              <li
                key={post._id}
                className='lh-copy pv1 ph1 mb2 mr2 bg-animate hover-bg-light-gray br14'
              >
                <Link href={post.url}>
                  {post.image && (
                    <div className='aspect-ratio aspect-ratio--16x9 mb2'>
                      <Image
                        className={'aspect-ratio--object cover br12'}
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
                      />
                    </div>
                  )}
                  <div style={{paddingLeft: 4, paddingRight: 4}}>
                    <div className='flex f-row tween baseline'>
                      <h4 className='link dim fw6 f6 mid-gray pb1 ttu font-mono'>
                        {post.title}
                      </h4>
                      <small className='f8 fw5 mid-gray'>
                        <FormattedDate post={post} />
                      </small>
                    </div>
                  </div>
                </Link>
              </li>
            </article>
          </>
        ))}
      </ul>
    </PageSection>
  )
}

function FormattedDate({post}: ProjectListProps) {
  const publishedDate = formatDateTime(post.date)

  return <>{publishedDate.asString}</>
}
