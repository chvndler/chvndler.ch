/** @format */

import {VideoPlayer} from './video.player'
import {VideoPlayerGrid} from './video.player.grid'

// constantes...
const accountHash = 'yKMcWkV75FeiDVgx1hbCXg'
const domain = 'imagedelivery.net'
const variant = 'public'

// poster id's...
const reelPoster = '09c5e2d4-5b33-48ad-e5b6-691443dc9800'
const rodeoPoster = 'a34bb37f-b3fd-4e40-f54a-ff5964ad6800'
// const placeholderPoster = '2360e161-3ab6-4b3c-5a82-f4b684cc3c00'
const aquamanPoster = 'f86d39ba-47ab-49e6-1bf3-a86b377aa000'
const viiPoster = 'dd873f54-f9ed-420f-ae65-f3948f228900'
const foreverIndebtedPoster = '96fb77a1-fed9-46cc-3d68-3797da41c200'

// video id's...
const reelVideo = 'QIknhH4mVuQiVYZdaObY4gFZOGSxJOCKTSwu02JemdAs'
const rodeoVideo = 't5RoUqJSc9cPYpHj3GBttq5EVok5J02yuOYhw00MUsvn00'
const aquamanVideo = 'Lr2BtEpVee015QBnDGPJzGuXfxBlujKXp9Q3mkkRYnEo'
const vii = 'DLIx3q00lvWHvER8pO00wJQCxdk7xyzJ43aAVPqJe3BZ00'
const foreverIndebtedVideo = 'v3dRmogDKN1R4Oq00OlCRvSvY019MvaNmCiyPdgbTq800s'

export const DuplicateFilmProjects = () => {
  return (
    <>
      <VideoPlayerGrid columns={1} css={{gap: '20px'}}>
        <VideoPlayer
          videoId={reelVideo}
          posterId={`https://${domain}/${accountHash}/${reelPoster}/${variant}`}
          captionTitle={'©2019 FILM REEL'}
          captionOther={'A collection of my work from 2019.'}
        />
        <VideoPlayer
          videoId={rodeoVideo}
          posterId={`https://${domain}/${accountHash}/${rodeoPoster}/${variant}`}
          captionTitle={'Beaux Isaac - Rodeo© [Official Music Video]'}
          captionOther={'"Rodeo©" by Beaux Isaac'}
        />
        <VideoPlayer
          videoId={aquamanVideo}
          posterId={`https://${domain}/${accountHash}/${aquamanPoster}/${variant}`}
          captionTitle={'Young Pharro - AQUAMAN© ft. Chris Buxton'}
          captionOther={'Aquaman by Young Pharro Ft. Chris Buxton / In Honor of Juice Wrld.'}
        />
        <VideoPlayer
          videoId={foreverIndebtedVideo}
          posterId={`https://${domain}/${accountHash}/${foreverIndebtedPoster}/${variant}`}
          captionTitle={'FOREVER INDEBTED© w/ Justin Wilson'}
          captionOther={''}
        />
        <VideoPlayer
          videoId={vii}
          posterId={`https://${domain}/${accountHash}/${viiPoster}/${variant}`}
          captionTitle={'vii Capsule: "Alone with the Gods"'}
          captionOther={'3rd Collection'}
        />
      </VideoPlayerGrid>
    </>
  )
}
