import * as React from 'react'
import ReactPlayer from 'react-player/vimeo'

import {Vimeo, VimeoWrapper} from './VimeoPlayerWrapper.styles'

type vimeoProps = {
  id?: string
  url?: string
  loop?: boolean
  playing?: boolean
  controls?: boolean
  style?: React.CSSProperties
  volume?: number
  muted?: boolean
  width?: string | number
  height?: string | number
  pip?: boolean
}

type PlayerProps = vimeoProps & React.ComponentProps<typeof ReactPlayer>

export const VimeoPlayer: React.FC<PlayerProps> = ({
  id,
  url,
  loop = false,
  playing = false,
  controls = true,
  volume = 0,
  muted = true,
  style,
  // width = '100%',
  // height = '100%',
  pip = true,
  ...props
}) => {
  return (
    <VimeoWrapper>
      <Vimeo>
        <ReactPlayer
          {...props}
          url={url || `https://vimeo.com/${id}`}
          loop={loop}
          playing={playing}
          controls={controls}
          volume={volume}
          style={{border: '1px solid #000', padding: 0, margin: 0, ...style}}
          muted={muted}
          // width={width}
          // height={height}
          pip={pip}
        />
      </Vimeo>
    </VimeoWrapper>
  )
}
