import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';

import { OffCanvas } from '../off-canvas';
import { ProjectEntry } from './project.entry';

/**
 *
 * @render - project grid component.
 *
 */

export const ProjectDisplay = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    breakpoints: {
      '(min-width: 520px)': {
        slides: { perView: 2, spacing: 8 }
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 8 }
      }
    },
    slides: { perView: 1, spacing: 8 }
  });

  return (
    <OffCanvas>
      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="Atlr® Typesxript"
            pSummary="Opinionated and essential starting code for next.js, React, Atelier®, and Typescript."
          />
        </div>

        <div className="keen-slider__slide number-slide2">
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="CDC®"
            pSummary="This is the repository for the current site you are viewing, my pesonal muse."
          />
        </div>

        <div className="keen-slider__slide number-slide3">
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="Atelier® DS"
            pSummary="An open-source UI Component Library built using Stitches x Radix-UI™."
          />
        </div>

        <div className="keen-slider__slide number-slide4">
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="@atlr/icxns"
            pSummary="Not your basic icon set. An open-souce React Icon library, use them in your projects– or don't"
          />
        </div>

        <div className="keen-slider__slide number-slide5">
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="atlr.colr"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>
      </div>
    </OffCanvas>
  );
};

ProjectDisplay.displayName = 'CH.ProjectDisplay';
