import React from 'react'
import Link from 'next/link'
import {GitShaIcon} from '../svg/git'

// server

const isCommit = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
const isOwner = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER
const isSlug = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG

export const CommitSha = () => {
  const sha = isCommit
  const owner = isOwner
  const slug = isSlug

  const color = 'currentColor'

  if (sha && owner && slug) {
    const shortSha = sha.substring(0, 6)
    const commit_link = 'https://github.com/' + owner + '/' + slug + '/tree/' + sha

    return (
      <>
        <div className='flex flex-row items-center justify-center gap-x-2'>
          <span className='text-blackA9 dark:text-whiteA7'>SHA</span>
          <span className='text-blackA9 dark:text-whiteA7 w-[13px] h-[13px]'>
            <GitShaIcon />
          </span>
          <Link href={commit_link} target='_blank' rel='noreferrer noopener'>
            <span style={{color: `#${shortSha} !important`}}>{shortSha}</span>
          </Link>
        </div>
      </>
    )
  } else {
    // fallback
    return <span style={{color: `${color}`}}>ERROR</span>
  }
}
