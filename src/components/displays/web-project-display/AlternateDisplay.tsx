import Image from 'next/image';

import { Grid, Space } from '@/components/ds';
import projectOne from '@/public/images/posters/DS_Card.png';
import projectTwo from '@/public/images/posters/Icxn_Card.png';

import { ImageOverlay, PlacementBox, ProjectCard, ProjectSummary, ProjectTitle } from './project-card.css';

export const AltWebProjectDisplay = () => {
  return (
    <>
      <Grid columns={'3'} gap={'2'}>
        <ProjectCard css={{ userSelect: 'none' }}>
          <PlacementBox css={{}}>
            <ProjectTitle>Atelier® DS</ProjectTitle>
            <Space size={'1'} />
            <ProjectSummary>An open-source UI Component Library built with React.</ProjectSummary>
            <Space size={'2'} />
          </PlacementBox>

          <ImageOverlay>
            <Image
              src={projectOne}
              alt={'Vector Pkg one'}
              placeholder={'blur'}
              style={{
                zIndex: 3,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: 32
              }}
            />
          </ImageOverlay>
        </ProjectCard>

        <ProjectCard css={{ userSelect: 'none' }}>
          <PlacementBox css={{}}>
            <ProjectTitle>Atelier® DS</ProjectTitle>
            <Space size={'1'} />
            <ProjectSummary>An open-source UI Component Library built with React.</ProjectSummary>
            <Space size={'2'} />
          </PlacementBox>

          <ImageOverlay>
            <Image
              src={projectTwo}
              alt={'Vector Pkg one'}
              placeholder={'blur'}
              style={{
                zIndex: 3,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: 32
              }}
            />
          </ImageOverlay>
        </ProjectCard>
      </Grid>
    </>
  );
};
