import React from 'react';

import { LogoLink } from '@/components/ds';

import { SliderCard } from '../off-canvas/slider-card';
import { Description, ProjectDetails, Svg, Title } from './styled';

type ProjectProps = {
  projectUrl: string;
  children: React.ReactNode;
  title: string;
  description: string;
};

export const ProjectDisplay = ({ projectUrl, children, title, description }: ProjectProps) => {
  return (
    <LogoLink variant="box" href={projectUrl} target="_blank" rel="norefferer noopener">
      <SliderCard>
        <ProjectDetails>
          <Svg>{children}</Svg>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </ProjectDetails>
      </SliderCard>
    </LogoLink>
  );
};

/* ------------------------------------ */

/*
 * EXAMPLE RENDER
 * <ProjectDisplay
 *      href="https://"
 *      title="Project Title"
 *      description="Project Description"
 * > <Logo />
 * </ProjectDisplay>
 *
 */
