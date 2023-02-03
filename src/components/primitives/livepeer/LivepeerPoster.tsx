import Image from 'next/image'
import * as React from 'react'

export interface LivepeerPosterProps {
  alt?: string
  posterSrc?: string
}

export const LivepeerPoster = ({...props}: LivepeerPosterProps) => {
  return <Image {...props} src={props.posterSrc} alt={props.alt} priority placeholder='blur' />
}

/**
 *
 * const posterOne = 'https://cdn.livepeer.com/studio/5f9b9b0b-1b1c-4b1c-8c1c-3b1c3b1c3b1c/poster.png'
 *
 * <LivepeerPoster posterSrc={posterOne} alt={'VideoExample'} />
 */
