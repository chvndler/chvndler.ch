/** @format */

import MuxPlayer from '@mux/mux-player-react'
import React from 'react'

import {CaptionBox, CaptionOther, CaptionTitle, MuxVideoStyles, VideoWrapper} from './video.styles'

type MuxProps = {
  title?: string
  caption?: string
  note?: string
  id?: string
  poster?: string
}

const DubVideoComponent = React.forwardRef<React.ElementRef<typeof MuxPlayer>, MuxProps>(({...props}, ref) => {
  return (
    <>
      <VideoWrapper>
        <MuxPlayer
          {...props}
          ref={ref}
          className={MuxVideoStyles()}
          streamType='on-demand'
          muted
          playbackId={props.id}
          poster={props.poster}
          primaryColor={'#D9E3F2'}
          secondaryColor={'transparent'}
          metadata={{}}
        />
        <CaptionBox>
          <CaptionTitle>{props.title}</CaptionTitle>
          <CaptionOther>{props.caption}</CaptionOther>
          <span>{props.note}</span>
        </CaptionBox>
      </VideoWrapper>
    </>
  )
})

export const DupVideoPlayer = DubVideoComponent
