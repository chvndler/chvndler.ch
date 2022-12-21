/** @format */

import {FullscreenVideoPlayer} from '@/components/displays/film/fullscreen/FullscreenFilmDisplay'

// constantes...
const accountHash = 'yKMcWkV75FeiDVgx1hbCXg'
const domain = 'imagedelivery.net'
const variant = 'public'

// poster id's...
const rodeoPoster = 'a34bb37f-b3fd-4e40-f54a-ff5964ad6800'

// video id's...
const rodeoVideo = 't5RoUqJSc9cPYpHj3GBttq5EVok5J02yuOYhw00MUsvn00'

const TestPage = () => {
  return (
    <>
      <FullscreenVideoPlayer
        videoId={rodeoVideo}
        posterId={`https://${domain}/${accountHash}/${rodeoPoster}/${variant}`}
      />
    </>
  )
}

export default TestPage
