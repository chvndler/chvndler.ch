import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';

import { Flex } from '@/components/ds';

import { ProjectEntry } from './project.entry';

/**
 *
 * @render - project grid component.
 *
 */

export const WebProjectDisplay = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    slides: {
      perView: 3,
      spacing: 14
    },
    breakpoints: {
      '(max-width: 1024px)': { slides: { perView: 2, spacing: 14 } },
      '(max-width: 768px)': { slides: { perView: 2, spacing: 14 } },
      '(max-width: 640px)': { slides: { perView: 1.5, spacing: 12 } },
      '(max-width: 480px)': { slides: { perView: 1.2, spacing: 12 } }
    }
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
            // pImage={'/images/posters/DS_Card.png'}
            pRepository="https://github.com/chvndler/typesxript"
            pTitle="typesxript"
            pSummary="Starter code for building performant web apps. – (Typescript React.)"
          />
        </div>

        <div className="keen-slider__slide number-slide2">
          <ProjectEntry
            pRepository="https://github.com/atlrdsgn/atlr.icxns"
            pTitle="@atlr.icxns"
            pSummary="Not your basic icon set. An open-souce React Icon library, use them in your projects– or don't"
          />
        </div>

        <div className="keen-slider__slide number-slide3">
          <ProjectEntry
            // pImage={'/images/posters/Icxn_Card.png'}
            pRepository="https://github.com/chvndler/chvndler.ch"
            pTitle="chvndler.ch/"
            pSummary="This is the repository for the current site you are viewing, my pesonal muse."
          />
        </div>

        <div className="keen-slider__slide number-slide4">
          <ProjectEntry
            // pImage={'/images/posters/Icxn_Card.png'}
            pRepository="https://github.com/atlrdsgn/atlr.react"
            pTitle="atlr® ds"
            pSummary="An open-source UI Component Library built using Stitches x Radix-UI™."
          />
        </div>

        <div className="keen-slider__slide number-slide5">
          <ProjectEntry
            pRepository="https://github.com/atlrdsgn/atlr.icxns"
            pTitle="@atlr.icxns"
            pSummary="Not your basic icon set. An open-souce React Icon library, use them in your projects– or don't"
          />
        </div>

        <div className="keen-slider__slide number-slidec"></div>
      </div>
    </Flex>
  );
};

WebProjectDisplay.displayName = 'WebProjectDisplay';
