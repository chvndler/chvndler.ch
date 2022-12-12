import NextHead from 'next/head'
import * as React from 'react'

import {useMedia} from '@/hooks/use-media'
import {defaultMeta, isClient} from '@/lib/constants'

type BasicMeta = {
 title?: string
 description?: string
 cannonical?: string
 ogImage?: string
 noIndex?: boolean
 noFollow?: boolean
 themeColor?: string
 preload?: {href: string; as: string; type: string; crossOrigin?: string}[]
 prefetch?: {href: string; as: string; type: string; crossOrigin?: string}[]
}

export type MetaProps = BasicMeta

export const Meta = (props: MetaProps) => {
 const isDark = useMedia('(prefers-color-scheme: dark-theme)')

 const resolvedMetadata = React.useMemo(() => {
  const data = {
   title: props.title ?? defaultMeta.title,
   description: props.description ?? defaultMeta.description,
   canonical: props.cannonical ?? (isClient ? window.location.href : ''),
   ogImage: {
    url: props.ogImage ?? defaultMeta.ogImage,
    alt: props.title ?? defaultMeta.title,
    width: 1200,
    height: 630,
   },
   twitter: {
    cardType: 'summary_large_image',
    handle: defaultMeta.twitter.handle,
    site: defaultMeta.twitter.site,
   },
   noIndex: props.noIndex,
   noFollow: props.noFollow,
  }

  if (!data.ogImage.url.startsWith('http')) {
   throw new Error('ogImage must be an absolute URL.')
  }

  if (isClient && !data.canonical.startsWith('http')) {
   throw new Error('canonical must be an absolute URL.')
  }

  return data
 }, [
  props.cannonical,
  props.description,
  props.noFollow,
  props.noIndex,
  props.ogImage,
  props.title,
 ])

 return (
  <>
   <NextHead>
    <meta charSet="utf-8" />
    <meta
     name="viewport"
     key="viewport"
     content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no"
    />

    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href={isDark ? '/favicon-dark.svg' : '/favicon.svg'} type="image/svg+xml" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.webmanifest" />

    <meta name="msapplication-config" content="/browserconfig.xml" />
    <meta name="msapplication-TileColor" content="#F9F0F0" />
    <meta name="theme-color" content={props.themeColor ?? '#F9F0F0'} />

    {props.noIndex && <meta name="robots" content="noindex" />}
    {props.noFollow && <meta name="robots" content="nofollow" />}

    <title>{resolvedMetadata.title}</title>
    <meta name="description" content={resolvedMetadata.description} />
    <meta name="twitter:card" content={resolvedMetadata.twitter.cardType} />
    <meta name="twitter:site" content={resolvedMetadata.twitter.site} />
    <meta name="twitter:creator" content={resolvedMetadata.twitter.site} />
    <meta name="twitter:title" content={resolvedMetadata.title} />
    <meta name="twitter:description" content={resolvedMetadata.description} />
    <meta name="twitter:image" content={resolvedMetadata.ogImage.url} />
    <meta property="og:title" content={resolvedMetadata.title} />
    <meta property="og:description" content={resolvedMetadata.description} />
    <meta property="og:url" content={resolvedMetadata.canonical} />
    <meta property="og:image" content={resolvedMetadata.ogImage.url} />
    <meta property="og:image:alt" content={resolvedMetadata.ogImage.alt} />
    <meta property="og:image:width" content={resolvedMetadata.ogImage.width + ''} />
    <meta property="og:image:height" content={resolvedMetadata.ogImage.height + ''} />
    <link rel="canonical" href={resolvedMetadata.canonical} />

    {props.preload?.map(({href, as}) => (
     <link key={href} rel="preload" href={href} as={as} />
    ))}
    {props.prefetch?.map(({href, as}) => (
     <link key={href} rel="prefetch" href={href} as={as} />
    ))}
   </NextHead>
  </>
 )
}
