/** @format */

import NextHead from 'next/head'
import {useRouter} from 'next/router'
import * as React from 'react'

import type {ArchiveMetaProps} from '@/components/common/archiveMeta'
import {useMedia} from '@/hooks/use-media'

export const WEBSITE_HOST_URL = 'https://chvndler.ch'

// type ArchiveProps = BasicMeta & ArchiveMetaProps

const ArchiveHead = ({customMeta}: {customMeta?: ArchiveMetaProps}): JSX.Element => {
  const router = useRouter()
  const isDark = useMedia('(prefers-color-scheme: dark-theme)')

  const meta: ArchiveMetaProps = {
    title: 'Chandler Chappell - Website',
    description: 'Personal Site.',
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'website',
    ...customMeta
  }

  return (
    <NextHead>
      <meta charSet='UTF-8' />
      <title>{meta.title}</title>
      <link rel='icon' href={isDark ? '/favicon-dark.svg' : '/favicon.svg'} type='image/svg+xml' />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel='canonical' href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Chandler.Ch' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@chvndlerch' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />

      {meta.date && <meta property='article:published_time' content={meta.date} />}
    </NextHead>
  )
}

export default ArchiveHead
