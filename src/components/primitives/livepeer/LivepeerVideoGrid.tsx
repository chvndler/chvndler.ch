import 'keen-slider/keen-slider.min.css'

import {useKeenSlider} from 'keen-slider/react'
import Image from 'next/image'
import * as React from 'react'

import {Flex} from '@/components/ds'
import imageOne from '@/public/images/cover.jpg'

import {LivepeerPlayer} from './LivepeerPlayer'
import {LivepeerProvider} from './LivepeerProvider'
const exampleVideo = '7a42uovuwzhqt315'
const ironVideo = 'be3cu4t1kp39n0md'
const armedVideo = '151eblq0uaslyo5l'

const PosterOne = () => <Image src={imageOne} alt={'PosterOne'} style={{objectFit: 'cover'}} />

export const LivepeerVideoGrid = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    slides: {
      perView: 1.6,
      spacing: 14
    },
    breakpoints: {
      '(max-width: 1024px)': {slides: {perView: 2, spacing: 14}},
      '(max-width: 768px)': {slides: {perView: 2, spacing: 14}},
      '(max-width: 640px)': {slides: {perView: 1.5, spacing: 12}},
      '(max-width: 480px)': {slides: {perView: 1.2, spacing: 12}}
    }
  })

  return (
    <>
      <LivepeerProvider>
        <Flex
          direction={'row'}
          justify={'start'}
          align={'start'}
          gap={'8'}
          css={{paddingRight: 0, paddingLeft: 0, overflow: 'hidden'}}>
          <div ref={ref} className='keen-slider'>
            <div className='keen-slider__slide number-slide1'>
              <LivepeerPlayer title={'VideoExample'} id={ironVideo} posterElement={<PosterOne />} />
            </div>

            <div className='keen-slider__slide number-slide2'>
              <LivepeerPlayer title={'VideoExample'} id={armedVideo} posterElement={''} />
            </div>

            <div className='keen-slider__slide number-slide3'>
              <LivepeerPlayer title={'VideoExample'} id={exampleVideo} posterElement={''} />
            </div>

            <div className='keen-slider__slide number-slide4'>
              <LivepeerPlayer title={'VideoExample'} id={exampleVideo} posterElement={''} />
            </div>

            <div className='keen-slider__slide number-slide5'>
              <LivepeerPlayer title={'VideoExample'} id={exampleVideo} posterElement={''} />
            </div>

            <div className='keen-slider__slide number-slide6'></div>
          </div>
        </Flex>
      </LivepeerProvider>
    </>
  )
}
