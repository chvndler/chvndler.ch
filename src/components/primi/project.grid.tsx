import Image from 'next/image'
import Link from 'next/link'

import {allProjects} from 'contentlayer/generated'
import type {Projects} from 'contentlayer/generated'
import {formatDateTime} from '../../components/hooks/use-date-time'
import {compareDesc} from 'date-fns'

type ProjectListProps = {
  post: Projects
}

function ProjectList() {
  const projectOrder = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  const sourceGrid = projectOrder.map((post) => (
    <div
      key={post._id}
      className='w-full px-2 border border-cdsbx-H500 bg-blackA1 hover:bg-blackA3 dark:border-whiteA3 dark:bg-whiteA1 dark:hover:bg-whiteA3 sm:w-1/2 md:w-1/2'
    >
      <div key={post._id} className='flex items-center justify-start'>
        <p className='text-blackA5 dark:text-whiteA5'>{post.title}</p>
      </div>

      <div className='flex flex-col'>
        <Link key={post.url} href={post.url}>
          {/* <!-- Centrered logo --> */}
        </Link>

        <div key={post._id} className='flex items-baseline justify-between w-full py-3 mx-auto'>
          <h2 className='font-medium text-left font-inter'>{post.title}</h2>
          <FormattedDate post={post} />
        </div>
      </div>
    </div>
  ))

  return <>{sourceGrid}</>
}

export default function ProjectGrid() {
  return (
    <>
      <div className='flex flex-wrap justify-start w-full mx-auto -mb-4'>
        <ProjectList />
      </div>
    </>
  )
}

function FormattedDate({post}: ProjectListProps) {
  const publishedDate = formatDateTime(post.date)

  return (
    <p className='text-right font-fraktion text-[11px] font-[460] uppercase text-blackA7 dark:text-whiteA7'>
      {publishedDate.asString}
    </p>
  )
}
