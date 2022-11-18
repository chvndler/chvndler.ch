import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';

import { Section } from '@/components/ds';
import { ProjectEntry } from '@/components/primitives/project-display/ProjectEntry';

export const ProjectGridIndex = () => {
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
    <Section size={'4'}>
      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="atlr.typesxript"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>

        <div className="keen-slider__slide number-slide2">
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="atlr.typesxript"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>

        <div className="keen-slider__slide number-slide3">
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="atlr.typesxript"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>

        <div className="keen-slider__slide number-slide4">
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="atlr.typesxript"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>

        <div className="keen-slider__slide number-slide5">
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="atlr.typesxript"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>
      </div>
    </Section>
  );
};
