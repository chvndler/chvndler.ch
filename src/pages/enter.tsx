import { Container, Heading } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { HeroSection } from '@/components/sections/hero';
import { PopoverComponent } from '~/components/primitives/popover';

const EnterPage = () => {
  return (
    <PageLayout>
      <HeroSection size="1" color="default" alignment="responsiveLeft" css={{ padding: 0 }}>
        <Container size="1" css={{ padding: 20, paddingTop: '100px' }}>
          <Heading
            css={{
              fontSize: 62,
              fontFamily: '$rightGroteskTextWide',
              color: '$chxn4',
              fontWeight: 'bold',
              letterSpacing: '-0.53rem',
              lineHeight: '53px',
              padding: 0,
              margin: 0,
              width: 'auto',
              '@md': {
                letterSpacing: '-0.3rem',
                fontSize: 38,
                lineHeight: '30px'
              }
            }}
          >
            DEVELOPING
          </Heading>
          <PopoverComponent />
        </Container>
      </HeroSection>
    </PageLayout>
  );
};

export default EnterPage;
