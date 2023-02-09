import 'keen-slider/keen-slider.min.css'

import {useKeenSlider} from 'keen-slider/react'
import * as React from 'react'

import {Flex} from '@/components/ds'

import {VimeoPlayer} from './VimeoPlayer'
const exampleVideo = '482886650'

export const VimeoGrid = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    slides: {
      perView: 3,
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
      <Flex
        direction={'row'}
        justify={'start'}
        align={'start'}
        gap={'8'}
        css={{paddingRight: 0, paddingLeft: 0, overflow: 'hidden'}}>
        <div ref={ref} className='keen-slider'>
          <div className='keen-slider__slide number-slide1'>
            <VimeoPlayer id={exampleVideo} />
          </div>

          <div className='keen-slider__slide number-slide2'>
            <VimeoPlayer id={exampleVideo} />
          </div>

          <div className='keen-slider__slide number-slide3'>
            <VimeoPlayer id={exampleVideo} />
          </div>

          <div className='keen-slider__slide number-slide4'>
            <VimeoPlayer id={exampleVideo} />
          </div>

          <div className='keen-slider__slide number-slide5'></div>
        </div>
      </Flex>
    </>
  )
}
