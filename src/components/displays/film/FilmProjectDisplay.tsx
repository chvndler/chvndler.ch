/** @format */

import {VideoPlayer} from './video.player'
import {VideoPlayerGrid} from './video.player.grid'

// constantes...
const accountHash = 'yKMcWkV75FeiDVgx1hbCXg'
const domain = 'imagedelivery.net'
const variant = 'public'

// poster id's...
const reelPoster = 'd9e98e85-c371-424b-7c9e-3d6726541300'
const rodeoPoster = 'a34bb37f-b3fd-4e40-f54a-ff5964ad6800'
const aquamanPoster = 'f86d39ba-47ab-49e6-1bf3-a86b377aa000'
const viiPoster = 'dd873f54-f9ed-420f-ae65-f3948f228900'
const truthPoster = '263fb61a-dd36-459a-6725-6b8a47e21500'
const wolvesPoster = '025e65fa-e554-449e-5279-af57b98d9400'
const trufestPoster = '745c2349-60db-44b9-b39d-7da08e20b100'
const weddingPoster = '24355311-faa6-45ed-fef3-5b294cb72400'
const foreverIndebtedPoster = '96fb77a1-fed9-46cc-3d68-3797da41c200'

// video id's...
const reelVideo = 'QIknhH4mVuQiVYZdaObY4gFZOGSxJOCKTSwu02JemdAs'
const rodeoVideo = 't5RoUqJSc9cPYpHj3GBttq5EVok5J02yuOYhw00MUsvn00'
const aquamanVideo = 'Lr2BtEpVee015QBnDGPJzGuXfxBlujKXp9Q3mkkRYnEo'
const vii = 'DLIx3q00lvWHvER8pO00wJQCxdk7xyzJ43aAVPqJe3BZ00'
const truthVideo = 'AgJIkK2RpFPQ183up02vQjizlfTcQeV2Tv8RXFvNpWQo.m3u8'
const wolvesVideo = 'hoT6g1iK4ypoiCEvCyvi5tDq201J2Ff8OHkp4lndz25Q'
const trufestVideo = '5K4lstrMpMRFVwCCGltis9yCcbzOURmWesVW02n3j4dE'
const weddingVideo = '5LJXqmhDhExmOHFrwTa1lDQv0125boZxbCxLMMMhv8ac'
const foreverIndebtedVideo = 'v3dRmogDKN1R4Oq00OlCRvSvY019MvaNmCiyPdgbTq800s'

export const FilmProjects = () => {
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
     captionOther={'Official Music Video for Aquaman by Young Pharro Ft. Chris Buxton / In Honor of Juice Wrld.'}
    />
    <VideoPlayer
     videoId={vii}
     posterId={`https://${domain}/${accountHash}/${viiPoster}/${variant}`}
     captionTitle={'vii Capsule: "Alone with the Gods"'}
     captionOther={'3rd Collection'}
    />
   </VideoPlayerGrid>

   {/* <!-- 2nd row --> */}

   <VideoPlayerGrid columns={2} css={{gap: '20px'}}>
    <VideoPlayer
     videoId={wolvesVideo}
     posterId={`https://${domain}/${accountHash}/${wolvesPoster}/${variant}`}
     captionTitle={'WOLVES© - Whistler Canada'}
     captionOther={'Social content built for Adam Horowitz & WOLVES© YouTube channel.'}
    />
    <VideoPlayer
     videoId={trufestVideo}
     posterId={`https://${domain}/${accountHash}/${trufestPoster}/${variant}`}
     captionTitle={'We present: TRUFEST©'}
     captionOther={'A Music Event my team and I created in 2020.'}
    />
   </VideoPlayerGrid>

   <VideoPlayerGrid columns={1}>
    <VideoPlayer
     videoId={foreverIndebtedVideo}
     posterId={`https://${domain}/${accountHash}/${foreverIndebtedPoster}/${variant}`}
     captionTitle={'FOREVER INDEBTED© w/ Justin Wilson'}
     captionOther={''}
    />
    <VideoPlayer
     videoId={truthVideo}
     posterId={`https://${domain}/${accountHash}/${truthPoster}/${variant}`}
     captionTitle={'At Least I Told the Truth©.'}
     captionOther={'A short film about hldtru®, directed by me.'}
    />
    <VideoPlayer
     videoId={weddingVideo}
     posterId={`https://${domain}/${accountHash}/${weddingPoster}/${variant}`}
     captionTitle={'Justin & Lauren Morris Wedding Film'}
     captionOther={''}
    />
   </VideoPlayerGrid>
  </>
 )
}

FilmProjects.displayName = 'FilmProjectDisplay'
