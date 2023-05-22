import Link from 'next/link'
import {compareDesc} from 'date-fns'

// generated
import {allProjects} from 'contentlayer/generated'
import type {Projects} from 'contentlayer/generated'

// components
import {formatDateTime} from '../components/hooks/use-date-time'
import {Connect, Introduction} from '../components/slices'

export default function Index() {
  const featured = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice(0, 3)

  return (
    <>
      <main id='main' className='main'>
        <section className='mv5 ph3'>
          <Introduction />
          <Connect />
          <h3 className='f5 fw4 mb1 zorba track-n-02'>Projects</h3>
          <div className='pv2'>
            <ul className='list pl0 mt0 center'>
              {featured.map((post) => (
                <article key={post._id}>
                  <Link href={post.url}>
                    <li className='lh-copy pv2 ba bl-0 bt-0 br-0 b--solid b--light-gray bg-animate hover-bg-light-gray'>
                      <div className='f-row tween baseline flex'>
                        <h4 className='link dim fw6 f6 mid-gray pb1 ttu font-mono'>{post.title}</h4>
                        <p className='f8 fw5 ttu gray dim font-mono'>
                          <ProjectTags post={post} /> · <FormattedDate post={post} />
                        </p>
                      </div>
                    </li>
                  </Link>
                </article>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

function FormattedDate({post}: {post: Projects}) {
  const publishedDate = formatDateTime(post.date)

  return <>{publishedDate.asRelativeTimeString}</>
}

function ProjectTags({post}: {post: Projects}) {
  return (
    <>
      <span>
        {post.tags.map((tag, index) => (
          <span key={post._id}>{post.tags.length - 1 === index ? tag : `${tag}, `}</span>
        ))}
      </span>
    </>
  )
}
