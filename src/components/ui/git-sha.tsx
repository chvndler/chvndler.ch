'use client'

import {cn} from '../../lib/utils'
import React from 'react'
import Link from 'next/link'
import {GitShaIcon} from '../svg/git'

// client

function useGitSha() {
  const isCommit = '5dd284fa77c34328ce76ffeebe0022bd7a96ff08'
  const isOwner = 'chvndler'
  const isSlug = 'chvndler.ch'

  const [sha, setSha] = React.useState('')
  const [owner, setOwner] = React.useState('')
  const [slug, setSlug] = React.useState('')

  React.useEffect(() => {
    setSha(isCommit)
    setOwner(isOwner)
    setSlug(isSlug)
  }, [])

  console.log('sha', sha, 'owner', owner, 'slug', slug)
  return {sha, owner, slug}
}

export const CommitSha = () => {
  const {sha, owner, slug} = useGitSha()
  const SHA = sha
  const OWNER = owner
  const GIT_SLUG = slug

  const color = 'currentColor'

  if (SHA && OWNER && GIT_SLUG) {
    const shortSha = SHA.substring(0, 6)
    const commit_link = 'https://github.com/' + OWNER + '/' + GIT_SLUG + '/tree/' + SHA

    return (
      <>
        <div className='flex flex-row items-center justify-center gap-x-2'>
          <span className='text-blackA9 dark:text-whiteA7'>SHA</span>
          <span className='h-[13px] w-[13px] text-blackA9 dark:text-whiteA7'>
            <GitShaIcon />
          </span>
          <Link href={commit_link} target='_blank' rel='noreferrer noopener'>
            <span className={cn(`text-[#${shortSha}]`)} style={{color: `#${shortSha} !important`}}>
              {shortSha}
            </span>
            {/* <!-- <span className={cn('text-blackA9 dark:text-whiteA7', 'hover:underline')}>@{GIT_SLUG}</span> --> */}
          </Link>
        </div>
      </>
    )
  } else {
    // fallback
    return <span style={{color: `${color}`}}>ERROR</span>
  }
}
