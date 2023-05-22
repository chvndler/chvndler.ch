import React from 'react'
import Link from 'next/link'
import {is} from 'date-fns/locale'

// server

const isCommit = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
const isOwner = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER
const isSlug = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG

export const GitSha = () => {
  const sha = isCommit
  const owner = isOwner
  const slug = isSlug

  const color = 'gray'

  if (sha && owner && slug) {
    const shortSha = sha.substring(0, 6)
    const href = 'https://github.com/' + owner + '/' + slug + '/tree/' + sha

    return (
      <div>
        <div className='gitsha_flex baseline'>
          <p className='ttu f7 font-mono gravel'>GIT_SHA</p>
          <span>⥂</span>
          <Link href={href}>
            <p style={{color: `#${shortSha}`}} className='ttu f7 font-mono'>
              {shortSha}
            </p>
          </Link>
        </div>
      </div>
    )
  } else {
    // fallback
    return <p style={{color: `${color}`}}>ERROR</p>
  }
}
