/** @format */

import {VideoPlayer} from './video.player'
import {VideoPlayerGrid} from './video.player.grid'

// constantes...
const accountHash = 'yKMcWkV75FeiDVgx1hbCXg'
const domain = 'imagedelivery.net'
const variant = 'public'

const rodeo = 'a34bb37f-b3fd-4e40-f54a-ff5964ad6800'
const aquaman = 'f86d39ba-47ab-49e6-1bf3-a86b377aa000'

export const FilmProjects = () => {
 return (
  <VideoPlayerGrid>
   <VideoPlayer
    videoId={'t5RoUqJSc9cPYpHj3GBttq5EVok5J02yuOYhw00MUsvn00'}
    posterId={`https://${domain}/${accountHash}/${rodeo}/${variant}`}
    captionTitle={'Beaux Isaac - Rodeo© [Official Music Video]'}
    captionOther={'"Rodeo©" by Beaux Isaac'}
   />
   <VideoPlayer
    videoId={'Lr2BtEpVee015QBnDGPJzGuXfxBlujKXp9Q3mkkRYnEo'}
    posterId={`https://${domain}/${accountHash}/${aquaman}/${variant}`}
    captionTitle={'Young Pharro - AQUAMAN© [Official Music Video]'}
    captionOther={
     'Official Music Video for Aquaman by Young Pharro Ft. Chris Buxton / In Honor of Juice Wrld.'
    }
   />
  </VideoPlayerGrid>
 )
}

FilmProjects.displayName = 'FilmProjectDisplay'
