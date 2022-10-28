import { Canvas, Container, Section, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { TimeDisplay } from '@/components/primitives/time-display';
import { AboutMe } from '@/components/sections/about-me';

const DevelopingPage = () => {
  return (
    <>
      <PageLayout>
        <Canvas>
          <Section size="1" css={{}}>
            <Text
              css={{
                color: '$blue9',
                lineHeight: '2',
                fontFamily: '$neueMontreal',
                textTransform: 'uppercase',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                letterSpacing: '-0.02em'
              }}
            >
              Chandler Ch®
            </Text>
            <Text
              css={{
                color: '$sage9',
                lineHeight: '1',
                fontFamily: '$subtle',
                textTransform: 'uppercase',
                fontSize: 11.5,
                fontWeight: 'normal',
                textAlign: 'center',
                letterSpacing: '0.03em'
              }}
            >
              FRONT-END DEV / DESIGNER
            </Text>
          </Section>
          <AboutMe />
        </Canvas>

        <Container size="1" css={{ position: 'fixed', bottom: 40, left: 0, right: 0 }}>
          <TimeDisplay />
          <Text
            css={{
              color: '$chxn3',
              lineHeight: '1',
              fontFamily: '$subtle',
              // textTransform: 'uppercase',
              fontSize: 12,
              fontWeight: 'normal',
              textAlign: 'center',
              letterSpacing: '0'
            }}
          >
            webite will re-open soon.
          </Text>
        </Container>
      </PageLayout>
    </>
  );
};

export default DevelopingPage;
