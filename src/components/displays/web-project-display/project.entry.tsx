// import Image from 'next/image';

import { Space } from '@/components/ds';

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
  // pImage: string;
};

export const ProjectEntry = ({ pTitle, pRepository, pSummary }: PProps) => {
  return (
    <ProjectCard css={{ userSelect: 'none' }}>
      <PlacementBox css={{}}>
        <ProjectTitle as={'a'} href={pRepository}>
          {pTitle}
        </ProjectTitle>
        <Space size={'1'} />
        <ProjectSummary>{pSummary}</ProjectSummary>
        <Space size={'2'} />
        <ProjectButton target={'_blank'} rel={'norefferer'} href={pRepository}>
          VIEW ON GITHUB
        </ProjectButton>
      </PlacementBox>

      <ImageOverlay></ImageOverlay>
    </ProjectCard>
  );
};
