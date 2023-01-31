/** @format */

import {videos} from '@/lib/videos'

import {DupVideoPlayer} from './duplicate.player'
import {VideoPlayerGrid} from './video.player.grid'

export const DuplicateFilmProjects = () => {
  return (
    <>
      <VideoPlayerGrid columns={1} css={{gap: '20px'}}>
        {videos.map((video) => {
          return (
            <DupVideoPlayer
              key={video.note}
              title={video.title}
              poster={video.poster}
              caption={video.caption}
              note={video.note}
            />
          )
        })}
      </VideoPlayerGrid>
    </>
  )
}

DuplicateFilmProjects.displayName = 'DuplicateFilmProjects'
