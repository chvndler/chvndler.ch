/** @format */

import {VideoPlayer} from './video.player'
import {VideoPlayerGrid} from './video.player.grid'

const ipfsUrl = 'https://ipfs.io/ipfs/'
const aws = 'https://s3.amazonaws.com/truth.cloud/assets/'

/**
 *
 * @render - project grid component.
 *
 */

export const FilmProjects = () => {
 return (
  <VideoPlayerGrid>
   <VideoPlayer
    videoId={'t5RoUqJSc9cPYpHj3GBttq5EVok5J02yuOYhw00MUsvn00'}
    posterId={`${ipfsUrl}QmWeDR3ZKTffqehrmyLWyXaiXrcbdMZyH1C4xS2baT9aSh?filename=Screenshot%202022-12-16%20at%2012.21.57%20AM.png`}
    captionTitle={'Beaux Isaac - Rodeo© [Official Music Video]'}
    captionOther={'"Rodeo©" by Beaux Isaac'}
   />
   <VideoPlayer
    videoId={'1RLeJdsCMunRRJ81yLED8PEacwYsaxH01MtGYZQWTR6g'}
    posterId={`${aws}social.jpg`}
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
