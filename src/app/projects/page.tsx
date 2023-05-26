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

      <div className='mx-auto -mb-4 flex w-full flex-wrap justify-center'>
        {projectOrder.map((post) => (
          <div key={post._id} className='mb-4 w-full px-2 sm:w-1/2 md:w-1/2'>
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
                <div className='f-row tween baseline flex'>
                  <h4 className='font-mono link dim fw6 f6 mid-gray pb1 ttu'>{post.title}</h4>
                  <small className='f8 fw5 mid-gray'>
                    <FormattedDate post={post} />
                  </small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </PageSection>
  )
}

function FormattedDate({post}: ProjectListProps) {
  const publishedDate = formatDateTime(post.date)

  return <>{publishedDate.asString}</>
}

/*
<div class="-mx-2 -mb-4 flex flex-wrap">
  <div class="mb-4 w-full px-2 sm:w-1/2 md:w-1/2">
    <div class="bg-indigo-400 h-12"></div>
  </div>
  <div class="mb-4 w-full px-2 sm:w-1/2 md:w-1/2">
    <div class="bg-indigo-500 h-12"></div>
  </div>
  <div class="mb-4 w-full px-2 sm:w-1/2 md:w-1/2">
    <div class="bg-indigo-400 h-12"></div>
  </div>
  <div class="mb-4 w-full px-2 sm:w-1/2 md:w-1/2">
    <div class="bg-indigo-500 h-12"></div>
  </div>
</div>
*/
