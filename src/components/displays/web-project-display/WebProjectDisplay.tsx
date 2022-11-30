import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';

import { Flex } from '@/components/ds';

import { ProjectEntry } from './project.entry';
//import { SectionCrop } from './project-card.css';

/**
 *
 * @render - project grid component.
 *
 */

export const WebProjectDisplay = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    slides: {
      perView: 4,
      spacing: 18
    },
    breakpoints: {}
  });

  return (
    <Flex
      direction={'row'}
      justify={'start'}
      align={'start'}
      gap={'8'}
      css={{ paddingRight: 0, paddingLeft: 0, overflow: 'hidden' }}
    >
      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <ProjectEntry
            pImage={'/images/posters/DS_Card.png'}
            pRepository="https://github.com/atlrdsgn/atlr.typesxript"
            pTitle="Atlr® Typesxript"
            pSummary="Opinionated and essential starting code for next.js, React, Atelier®, and Typescript."
          />
        </div>

        <div className="keen-slider__slide number-slide2">
          <ProjectEntry
            pImage={'/images/posters/Icxn_Card.png'}
            pRepository="https://github.com/chvndler/chvndler.ch"
            pTitle="CDC®"
            pSummary="This is the repository for the current site you are viewing, my pesonal muse."
          />
        </div>

        <div className="keen-slider__slide number-slide3">
          <ProjectEntry
            pImage={'/images/posters/Icxn_Card.png'}
            pRepository="https://github.com/atlrdsgn/atlr.react"
            pTitle="Atelier® DS"
            pSummary="An open-source UI Component Library built using Stitches x Radix-UI™."
          />
        </div>

        <div className="keen-slider__slide number-slide4">
          <ProjectEntry
            pImage={'/images/posters/Icxn_Card.png'}
            pRepository="https://github.com/atlrdsgn/atlr.icxns"
            pTitle="@atlr/icxns"
            pSummary="Not your basic icon set. An open-souce React Icon library, use them in your projects– or don't"
          />
        </div>

        <div className="keen-slider__slide number-slide5"></div>
      </div>
    </Flex>
  );
};

WebProjectDisplay.displayName = 'WebProjectDisplay';
