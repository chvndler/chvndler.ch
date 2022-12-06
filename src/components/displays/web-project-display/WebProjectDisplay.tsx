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

const typesxript = 'https://github.com/chvndler/typesxript';
const kit = 'https://github.com/chvndler/atelier.kit';
const personal = 'https://github.com/chvndler/chvndler.ch';
const isi = 'https://www.isielitetraining.com/';

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
            pRepository={typesxript}
            pTitle="typesxript"
            pSummary="Starter code for building performant web apps. – (Typescript React.)"
          />
        </div>

        <div className="keen-slider__slide number-slide2">
          <ProjectEntry
            pRepository={kit}
            pTitle="Atelier.Kit"
            pSummary="A component toolkit for high performing React apps and sites. – v0.41.3.beta"
          />
        </div>

        <div className="keen-slider__slide number-slide3">
          <ProjectEntry
            pRepository={personal}
            pTitle="chvndler.ch"
            pSummary="This is the repository for the current site you are viewing, my personal."
          />
        </div>

        <div className="keen-slider__slide number-slide5">
          <ProjectEntry
            pRepository={isi}
            pTitle="ISI® Elite Training"
            pSummary="The most valuable 50 minute workout, for all fitness levels."
          />
        </div>

        <div className="keen-slider__slide number-slide6"></div>
      </div>
    </Flex>
  );
};

WebProjectDisplay.displayName = 'WebProjectDisplay';
