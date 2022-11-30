import Image from 'next/image';

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
  pImage: string;
};

export const ProjectEntry = ({ pTitle, pRepository, pSummary, pImage }: PProps) => {
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
          src={pImage}
          width={400}
          height={500}
          alt={'Vector Pkg one'}
          // placeholder={'blur'}
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
  );
};

/**
 *         <ProjectButton target="_blank" rel="norefferer" as="a" href={pRepository}>
          see more
        </ProjectButton>
 */
