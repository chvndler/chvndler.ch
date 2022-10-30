import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

import { Box, Container, Section } from '@/components/ds';

import { NextButton, PrevButton } from './CarouselButtons';

const ScrollCarousel = () => {
  const [emblaRef] = useEmblaCarousel();

  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps'
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <>
      <Box css={{ height: 'auto' }}>
        <Section size="3">
          <div className="embla__viewport" ref={viewportRef}>
            <Container size="3" css={{ display: 'flex', userSelect: 'none', marginLeft: '-10px' }}>
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">Slide 1</div>
                  <div className="embla__slide">Slide 2</div>
                  <div className="embla__slide">Slide 3</div>
                </div>
              </div>
            </Container>
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </Section>
      </Box>
    </>
  );
};

export const EmblaSlide = () => (
  <>
    <ScrollCarousel />
  </>
);
