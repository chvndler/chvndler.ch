import React from 'react'
import Link from 'next/link'

// server

const NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA = `5dd284fa77c34328ce76ffeebe0022bd7a96ff08`
const NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER = `chvndler`
const NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG = `chvndler.ch`

export const GitSha = () => {
  const sha = NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
  const owner = NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER
  const slug = NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG

  const color = 'gray'

  if (sha && owner && slug) {
    const shortSha = sha.substring(0, 6)
    const href = 'https://github.com/' + owner + '/' + slug + '/tree/' + sha

    return (
      <div>
        <div className='gitsha_flex baseline'>
          <p className='ttu f7 font-mono'>GIT_SHA</p>
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
