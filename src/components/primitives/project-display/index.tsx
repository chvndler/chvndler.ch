import { Carousel } from '@trendyol-js/react-carousel';
import React from 'react';

import { Box, Container, Section } from '@/components/ds';

import { ProjectEntry } from './ProjectEntry';

export const ProjectCarousel = () => {
  return (
    <>
      <Box css={{ '@initial': { display: 'block' }, '@lg': { display: 'none' } }}>
        <Section size={'3'} css={{ '@initial': { display: 'block' }, '@lg': { display: 'none' } }}>
          <Container size={'4'}>
            <Carousel show={3} slide={2} swipeOn={0.3} swiping={true} responsive>
              <ProjectEntry
                pRepository="https://github.com/chvndler"
                pTitle="atlr.typesxript"
                pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
              <ProjectEntry
                pRepository="https://github.com/chvndler"
                pTitle="atlr.icxns"
                pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
              <ProjectEntry
                pRepository="https://github.com/chvndler"
                pTitle="@atlr/react"
                pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
              <ProjectEntry
                pRepository="https://github.com/chvndler"
                pTitle="A4"
                pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
              <ProjectEntry
                pRepository="https://github.com/chvndler"
                pTitle="A5"
                pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
            </Carousel>
          </Container>
        </Section>
      </Box>

      <Box
        css={{
          display: 'none',
          '@md': { display: 'block' },
          '@sm': { display: 'block' }
        }}
      >
        <Section size={'3'} css={{ overflow: 'hidden' }}>
          <Container size={'4'} css={{ overflowX: 'hidden', paddingRight: 0 }}>
            <Carousel show={1.2} slide={1} swipeOn={0.3} swiping={true} responsive>
              <ProjectEntry
                pRepository="https://github.com/chvndler"
                pTitle="atlr.typesxript"
                pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
              <ProjectEntry
                pRepository="https://github.com/chvndler"
                pTitle="atlr.typesxript"
                pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
            </Carousel>
          </Container>
        </Section>
      </Box>
    </>
  );
};
