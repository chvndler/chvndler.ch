import { Container, Text, Box } from '@/components/ds';
import { css } from 'stitches.config';
import { CardHero } from '../../card-hero';

const ProjectOneDrop = css({
  width: '100%',
  height: '100%',
  background: 'linear-gradient(#e66465, #9198e5)',
  backgroundColor: ''
});

export const ProjectOne = () => {
  return (
    <>
      <CardHero>
        <Box className={ProjectOneDrop()}>
          <Container size="3">
            <Text css={{ textAlign: 'center' }}>PROJECT ONE</Text>
          </Container>
        </Box>
      </CardHero>
    </>
  );
};
