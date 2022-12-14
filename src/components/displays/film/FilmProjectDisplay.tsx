import {VideoPlayer} from './video.player'
import {VideoPlayerGrid} from './video.player.grid'

/**
 *
 * @render - project grid component.
 *
 */

export const FilmProjects = () => {
  return (
    <VideoPlayerGrid>
      <VideoPlayer
        videoId={'1RLeJdsCMunRRJ81yLED8PEacwYsaxH01MtGYZQWTR6g'}
        posterId={'https://s3.amazonaws.com/truth.cloud/assets/social.jpg'}
        captionTitle={'©2019 FILM REEL'}
        captionOther={'Small Legacy Description of film'}
      />
      <VideoPlayer
        videoId={'Lr2BtEpVee015QBnDGPJzGuXfxBlujKXp9Q3mkkRYnEo'}
        posterId={'https://s3.amazonaws.com/truth.cloud/assets/social.jpg'}
        captionTitle={'AQUAMAN©'}
        captionOther={'Small Legacy Description of film'}
      />
      <VideoPlayer
        videoId={'2niI9Q2xVH3hebtWjdVHBUFqlo4iy2iP6fU7i2MIS6o'}
        posterId={'https://s3.amazonaws.com/truth.cloud/assets/social.jpg'}
        captionTitle={'ARMED©'}
        captionOther={'Small Legacy Description of film'}
      />
      <VideoPlayer
        videoId={'AgJIkK2RpFPQ183up02vQjizlfTcQeV2Tv8RXFvNpWQo'}
        posterId={'https://s3.amazonaws.com/truth.cloud/assets/social.jpg'}
        captionTitle={'ARMED©'}
        captionOther={'Small Legacy Description of film'}
      />
    </VideoPlayerGrid>
  )
}

FilmProjects.displayName = 'FilmProjectDisplay'
