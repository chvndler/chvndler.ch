import {Player} from '@livepeer/react'
import * as React from 'react'

import {LPVideoCard} from './lp.styles'

type LPFilmProps = {
  title?: string
  id?: string
  posterElement?: React.ReactNode
}

export const LivepeerPlayer = ({title, id, posterElement, ...rest}: LPFilmProps) => {
  return (
    <LPVideoCard>
      <Player
        {...rest}
        title={title}
        playbackId={id}
        showPipButton
        showTitle={false}
        aspectRatio='16to9'
        // poster={<PosterImage />}
        poster={posterElement}
        controls={{
          autohide: 3000
        }}
        theme={{
          borderStyles: {containerBorderStyle: 'solid'},
          radii: {containerBorderRadius: '16px'}
        }}
      />
    </LPVideoCard>
  )
}

/**
 *
 * <LivepeerPlayer title={'VideoExample'} id={'5f9b9b0b-1b1c-4b1c-8c1c-3b1c3b1c3b1c'} posterElement={<VideoPosterOne />} />
 */
