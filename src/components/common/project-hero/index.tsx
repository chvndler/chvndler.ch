import { Container, Heading } from '@/components/ds';
import { HeroSection } from '@/components/sections/hero';

export const ProjectHero = () => {
  return (
    <HeroSection size="1" color="default" alignment="center" css={{ padding: 0, paddingTop: '100px' }}>
      <Container size="1" css={{ padding: 20 }}>
        <Heading
          css={{
            fontSize: '2.2rem',
            fontFamily: '$telegraf',
            color: '$chxn4',
            fontWeight: '600',
            lineHeight: '60px',
            letterSpacing: '-0.01rem',
            padding: 0,
            margin: 0,
            width: 'auto',
            '@md': {
              fontSize: '1.8rem',
              lineHeight: '40px'
            }
          }}
        >
          PROJECTS
        </Heading>
      </Container>
    </HeroSection>
  );
};
