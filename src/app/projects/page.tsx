import Image from 'next/image'
import Link from 'next/link'

import {allProjects} from 'contentlayer/generated'
import type {Projects} from 'contentlayer/generated'
import type {Metadata} from 'next/types'

import {PageSection} from '../../components/core'
import {formatDateTime} from '../../components/hooks/use-date-time'
import {compareDesc} from 'date-fns'
import {ProjectsHeader} from '../../components/slices/projects-header'

export const metadata: Metadata = {
  title: 'Chandler Ch - Projects',
  description: 'Projects I have worked on, and am currently working on.',
}

interface ProjectListProps {
  post: Projects
}

const projectOrder = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

export default function ProjectsIndex() {
  return (
    <PageSection>
      <ProjectsHeader />
      <div className='grid items-center w-full grid-cols-1 gap-4 mx-auto md:grid-cols-2'>
        {projectOrder.map((post) => (
          <article key={post._id} className='flex items-center w-full h-auto mx-auto'>
            <div
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
                    <h4 className='font-mono link dim fw6 f6 mid-gray pb1 ttu'>{post.title}</h4>
                    <small className='f8 fw5 mid-gray'>
                      <FormattedDate post={post} />
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  )
}

function FormattedDate({post}: ProjectListProps) {
  const publishedDate = formatDateTime(post.date)

  return <>{publishedDate.asString}</>
}
