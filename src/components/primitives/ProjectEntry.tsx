type PProps = {
  pTitle: string;
  pRepository: string;
  pSummary: string;
};

import { styled } from 'stitches.config';

import { Button, Flex, Paragraph, Text } from '@/components/ds';

const ProjectCard = styled('a', {
  padding: 20,
  width: 'auto',

  '&:hover': {
    cursor: 'grab'
  }
});

const ProjectSummary = styled(Paragraph, {
  fontFamily: '$lateralStandard',
  fontWeight: 'normal',
  fontSize: 13,
  color: '$sage9'
});

const ProjectTitle = styled(Text, {
  fontSize: 22,
  fontFamily: '"Lateral Extended Bold", sans-serif',
  fontWeight: 'bold',
  color: '$chxn4'
});

export const ProjectEntry = ({ pTitle, pRepository, pSummary }: PProps) => {
  return (
    <Flex css={{ flexDirection: 'column' }}>
      <ProjectCard as="a" href={pRepository} target="_blank" rel="norefferer">
        <ProjectTitle>{pTitle}</ProjectTitle>
        <ProjectSummary>{pSummary}</ProjectSummary>
        <Button as="a" href={pRepository}>
          view more
        </Button>
      </ProjectCard>
    </Flex>
  );
};
