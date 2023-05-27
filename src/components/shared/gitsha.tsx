'use client';

import { cn } from '../../lib/utils';
import React from 'react';
import Link from 'next/link';
import { GitShaIcon } from './svg/git';
import { useTheme } from 'next-themes';

// client

export const CommitSha = () => {
  const { sha, owner, slug } = useGitSha();

  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const color = isDark ? 'currentColor' : 'currentColor';

  if (sha && owner && slug) {
    const shortSha = sha.substring(0, 6);
    const commitLink = `https://github.com/${owner}/${slug}/tree/${sha}`;

    return (
      <div className='flex flex-row items-center justify-center gap-x-2'>
        <span className='text-blackA9 dark:text-whiteA7'>SHA</span>
        <span className='h-[13px] w-[13px] text-blackA9 dark:text-whiteA7'>
          <GitShaIcon />
        </span>
        <Link href={commitLink} target='_blank' rel='noreferrer noopener'>
          <span className={cn(`text-[#${shortSha}]`)} style={{ color: `#${shortSha} !important` }}>
            {shortSha}
          </span>
        </Link>
      </div>
    );
  } else {
    // fallback
    return <span style={{ color: `${color}` }}>ERROR</span>;
  }
};

function useGitSha() {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;
  const owner = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER;
  const slug = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG;

  return { sha, owner, slug };
}
