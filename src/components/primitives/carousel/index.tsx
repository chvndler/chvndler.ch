import { Carousel } from '@trendyol-js/react-carousel';

import { Card, Container, Section } from '@/components/ds';
import { ProjectEntry } from '@/components/primitives/ProjectEntry';

export const ProjectCarousel = () => {
  return (
    <>
      <Section size={'3'}>
        <Container size={'3'}>
          <Carousel show={3} slide={3} swiping={true}>
            <Card css={{ width: 340, height: 'auto' }}>
              <ProjectEntry pRepository="/" pTitle={'Atelier®'} pSummary={'Lorem Ipsum'} />
            </Card>

            <Card css={{ width: 340, height: 'auto' }}>
              <ProjectEntry pRepository="/" pTitle={'Atelier®'} pSummary={'Lorem Ipsum'} />
            </Card>

            <Card css={{ width: 340, height: 'auto' }}>
              <ProjectEntry pRepository="/" pTitle={'Atelier®'} pSummary={'Lorem Ipsum'} />
            </Card>

            <Card css={{ width: 340, height: 'auto' }}>
              <ProjectEntry pRepository="/" pTitle={'Atelier®'} pSummary={'Lorem Ipsum'} />
            </Card>
          </Carousel>
        </Container>
      </Section>
      ,
    </>
  );
};
