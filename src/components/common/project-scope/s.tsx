import Link from 'next/link';
import { styled } from 'stitches.config';

import { Box } from '@/components/ds';

type ProjectType = {
  projectTitle: string;
  projectSummary: string;
  projectUrl: string;
};

const StyledProjectTitle = styled(Link, {
  fontSize: 20,
  fontFamily: '$neueMontreal',
  fontWeight: '500',
  lineHeight: '2',
  color: '$sage9',
  letterSpacing: '-0.01em',

  '&:hover': {
    color: '$chxn6',
    cursor: 'pointer',
    textDecoration: 'underline'
  }
});

const StyledProjectSummary = styled('p', {
  fontSize: 15,
  fontFamily: '$neueMontreal',
  lineHeight: '1.4',
  color: '$sage9',
  letterSpacing: '0.02em'
});

const StyledProjectContainer = styled(Box, {});

export const ProjectContainer = StyledProjectContainer;

export const ProjectScope = ({ projectTitle, projectSummary, projectUrl, ...props }: ProjectType) => {
  return (
    <>
      <ProjectContainer>
        <StyledProjectTitle {...props} href={projectUrl}>
          {projectTitle}
        </StyledProjectTitle>
        <StyledProjectSummary>{projectSummary}</StyledProjectSummary>
      </ProjectContainer>
    </>
  );
};
