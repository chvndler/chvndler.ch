import { Container, Text } from '@/components/ds';
import { AppFooter } from '@/components/layout/app-footer';
import { PageLayout } from '@/components/layout/page';
import { AboutMe } from '@/components/sections/about-me';
import { ProjectScroller } from '@/components/sections/project-scroller';

const Index = () => {
  return (
    <>
      <PageLayout>
        <Container size="1" css={{ paddingTop: 40 }}>
          <Text
            css={{
              color: '$lime10',
              fontFamily: '$druk',
              fontSize: 24,
              fontWeight: 'bold',
              letterSpacing: 'normal',
              textAlign: 'center'
            }}
          >
            I'M CHAN.
          </Text>
          <Text
            css={{
              color: '$sage9',
              lineHeight: '1',
              fontFamily: '$subtle',
              textTransform: 'uppercase',
              fontSize: 12,
              fontWeight: 'normal',
              textAlign: 'center',
              letterSpacing: '0.03em'
            }}
          >
            Front-end Developer & Designer.
          </Text>
        </Container>

        <AboutMe />

        <ProjectScroller />
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default Index;
