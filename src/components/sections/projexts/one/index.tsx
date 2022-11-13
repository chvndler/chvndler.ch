import { Box, Container, Text } from '@/components/ds';

import { CardHero } from '../../card-hero';

export const ProjectOne = () => {
  return (
    <>
      <CardHero>
        <Box>
          <Container size="3">
            <Text css={{ textAlign: 'center' }}>PROJECT ONE</Text>
          </Container>
        </Box>
      </CardHero>
    </>
  );
};
