import Image from 'next/image'
import Link from 'next/link'

import {allProjects} from 'contentlayer/generated'
import type {Projects} from 'contentlayer/generated'
import type {Metadata} from 'next/types'

import {formatDateTime} from '../../components/hooks/use-date-time'
import {compareDesc} from 'date-fns'

export const metadata: Metadata = {
  title: 'Chandler Ch - Projects',
  description: 'Projects I have worked on, and am currently working on.',
}

const FormattedDate = ({post}: {post: Projects}) => {
  const publishedDate = formatDateTime(post.date)

  return <>{publishedDate.asString}</>
}

export default function ProjectsIndex() {
  const posts = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main id='main' className='main'>
      <section className='mv5 ph3'>
        <h3 className={'f3 fw4 track-n-02 gray pb4'}>
          Some of my <span className='fw6 gravel'>work</span>.
        </h3>
        {/*
         * <!--
         *
         * (Projects) All
         *
         * -->
         */}
        <ul className='list cf'>
          {posts.map((post) => (
            <article key={post._id} className='fl w-100 w-50-ns'>
              <li key={post._id} className='lh-copy pv1 ph1 mb2 mr2 bg-animate hover-bg-light-gray br14'>
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
                      <h4 className='link dim fw6 f6 mid-gray pb1 ttu font-mono'>{post.title}</h4>
                      <small className='f8 fw5 mid-gray'>
                        <FormattedDate post={post} />
                      </small>
                    </div>
                  </div>
                </Link>
              </li>
            </article>
          ))}
        </ul>
        {/*
         * <!--
         *
         * END Projects
         *
         * -->
         */}
      </section>
    </main>
  )
}
