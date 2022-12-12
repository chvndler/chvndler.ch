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
    videoId={'1RLeJdsCMunRRJ81yLED8PEacwYsaxH01MtGYZQWTR6g'}
    posterId={'https://s3.amazonaws.com/truth.cloud/assets/social.jpg'}
    captionTitle={'ARMED©'}
    captionOther={'Small Legacy Description of film'}
   />
  </VideoPlayerGrid>
 )
}

FilmProjects.displayName = 'FilmProjectDisplay'
