/** @format */

import {useKeenSlider} from 'keen-slider/react'
import * as React from 'react'

import {OffCanvas} from '@/components/primitives/off-canvas'

import {ResolvedTrackEntry} from './tracks.entry'

/**
 *
 * @render - project grid component.
 *
 */

export const TopTen = () => {
 const [ref] = useKeenSlider<HTMLDivElement>({
  loop: true,
  mode: 'free-snap',
  breakpoints: {
   '(min-width: 520px)': {
    slides: {perView: 2, spacing: 8}
   },
   '(min-width: 1000px)': {
    slides: {perView: 3, spacing: 8}
   }
  },
  slides: {perView: 1, spacing: 8}
 })

 return (
  <OffCanvas>
   <div ref={ref} className='keen-slider'>
    <div className='keen-slider__slide number-slide1'>
     <ResolvedTrackEntry />
    </div>
   </div>
  </OffCanvas>
 )
}

TopTen.displayName = 'SpotifyTopTen'
