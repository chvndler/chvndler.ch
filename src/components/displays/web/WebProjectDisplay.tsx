/** @format */

import 'keen-slider/keen-slider.min.css'

import {useKeenSlider} from 'keen-slider/react'
import * as React from 'react'

import {Flex} from '@/components/ds'

import {ProjectEntry} from './project.entry'

/**
 *
 * @render - project grid component.
 *
 */

const typesxript = 'https://github.com/chvndler/typesxript'
const kit = 'https://github.com/atlrdsgn/atlr.kit'
const personal = 'https://github.com/chvndler/chvndler.ch'
const isi = 'https://www.isielitetraining.com/'
const icxns = 'https://github.com/chvndler/icxns'
const tfl = 'https://convention.isielitetraining.com/'
const arie = 'https://arie.chvndler.ch'

export const WebProjectDisplay = () => {
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
    <Flex
      direction={'row'}
      justify={'start'}
      align={'start'}
      gap={'8'}
      css={{paddingRight: 0, paddingLeft: 0, overflow: 'hidden'}}>
      <div ref={ref} className='keen-slider'>
        <div className='keen-slider__slide number-slide1'>
          <ProjectEntry
            pRepository={arie}
            pTitle='ARIE©'
            pSummary='A tiny component for displaying information based on users cursor and scroll positions, in a more aesthetic way.'
          />
        </div>

        <div className='keen-slider__slide number-slide2'>
          <ProjectEntry
            pRepository={kit}
            pTitle='Atelier® Kit'
            pSummary='An ever– expanding library of React components and primitives.'
          />
        </div>

        <div className='keen-slider__slide number-slide3'>
          <ProjectEntry
            pRepository={typesxript}
            pTitle={'typescxript.'}
            pSummary='Starter code for building performant web apps. I start with this code for every project I start.'
          />
        </div>

        <div className='keen-slider__slide number-slide4'>
          <ProjectEntry
            pRepository={personal}
            pTitle='Personal.'
            pSummary='This is the repository for my personal site, the site you are viewing right now. My corner of the web where I take notes, write, experiment, and document.'
          />
        </div>

        <div className='keen-slider__slide number-slide5'>
          <ProjectEntry
            pRepository={isi}
            pTitle='ISI® Elite Training'
            pSummary='My previous roles official website. Check it out and find a location near you.'
          />
        </div>

        <div className='keen-slider__slide number-slide6'>
          <ProjectEntry
            pRepository={icxns}
            pTitle='icxns'
            pSummary="A crisp set of interface icons. Use theme however you'd like."
          />
        </div>

        <div className='keen-slider__slide number-slide7'>
          <ProjectEntry
            pRepository={tfl}
            pTitle='TFL© Convention'
            pSummary="A single page app built for ISI® Elite Training's Train for Life Convention."
          />
        </div>

        <div className='keen-slider__slide number-slide8'></div>
      </div>
    </Flex>
  )
}

WebProjectDisplay.displayName = 'WebProjectDisplay'
