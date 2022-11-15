type PProps = {
  pTitle: string;
  pRepository: string;
  pSummary: string;
};

import { styled } from 'stitches.config';

import { Box, Button, Card, Space } from '@/components/ds';

const ProjectCard = styled(Card, {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: 'auto',
  minHeight: 320,
  maxWidth: '100vw',
  borderRadius: 22,
  margin: 5,
  alignItems: 'left',
  backgroundColor: '$sage1',

  '&:hover': {
    cursor: 'grab',
    boxShadow: `inset 0 0 0 1px $colors$sage8`
  },
  '&::before': {
    borderRadius: 22,
    boxSizing: 'border-box',
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: `inset 0 0 0 1px $colors$sage8`,
    pointerEvents: 'none'
  }
});

const ProjectSummary = styled('p', {
  fontFamily: '$lateralStandard',
  fontWeight: 'normal',
  fontSize: 14,
  color: '$sage9',
  lineHeight: '1.3'
});

const ProjectTitle = styled('h3', {
  fontSize: 24,
  fontFamily: '"Lateral Extended Bold", sans-serif',
  fontWeight: 'bold',
  color: '$chxn4'
});

export const ProjectEntry = ({ pTitle, pRepository, pSummary }: PProps) => {
  return (
    <ProjectCard css={{ userSelect: 'none' }}>
      <Box css={{ position: 'absolute', bottom: 6, padding: 28 }}>
        <ProjectTitle>{pTitle}</ProjectTitle>
        <Space size={'1'} />
        <ProjectSummary>{pSummary}</ProjectSummary>
        <Space size={'2'} />
        <Button
          target="_blank"
          rel="norefferer"
          as="a"
          href={pRepository}
          css={{
            padding: 10,
            fontFamily: `"Lateral Extended Medium", sans-serif`,
            fontSize: 12,
            '&:hover': {
              cursor: 'pointer'
            }
          }}
        >
          view more
        </Button>
      </Box>
    </ProjectCard>
  );
};
