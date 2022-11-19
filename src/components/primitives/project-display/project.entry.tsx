import Image from 'next/image';

import { Space } from '@/components/ds';
import projectImage from '@/public/images/posters/p1.png';

import {
  ImageOverlay,
  PlacementBox,
  ProjectButton,
  ProjectCard,
  ProjectSummary,
  ProjectTitle
} from './project-card.css';

type PProps = {
  pTitle: string;
  pRepository: string;
  pSummary: string;
};

export const ProjectEntry = ({ pTitle, pRepository, pSummary }: PProps) => {
  return (
    <ProjectCard css={{ userSelect: 'none' }}>
      <PlacementBox css={{}}>
        <ProjectTitle>{pTitle}</ProjectTitle>
        <Space size={'1'} />
        <ProjectSummary>{pSummary}</ProjectSummary>
        <Space size={'2'} />
        <ProjectButton target="_blank" rel="norefferer" as="a" href={pRepository}>
          see more
        </ProjectButton>
      </PlacementBox>

      <ImageOverlay>
        <Image
          src={projectImage}
          alt={'Vector Pkg one'}
          placeholder={'blur'}
          style={{
            zIndex: 3,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            borderRadius: 22
          }}
        />
      </ImageOverlay>
    </ProjectCard>
  );
};
