import { Container, Text } from '@/components/ds';
import { AppFooter } from '@/components/layout/app-footer';
import { PageLayout } from '@/components/layout/page';
import { TimePlusCursorData } from '@/components/primitives/time-x-cursor-data';
import { AboutMe } from '@/components/sections/about-me';

const Home = () => {
  return (
    <>
      <PageLayout>
        <Container size="2">
          <Text
            css={{
              color: '$lime10',
              fontFamily: '$druk',
              fontSize: 18,
              fontWeight: 'bold',
              letterSpacing: 'normal',
              textAlign: 'center'
            }}
          >
            HI, I'M CHAN.
          </Text>
          <Text
            css={{
              color: '$sage9',
              lineHeight: '1',
              fontFamily: 'inter',
              fontSize: 14,
              fontWeight: 'normal',
              textAlign: 'center'
            }}
          >
            Front-end Developer & Designer.
          </Text>
        </Container>
        <AboutMe />
      </PageLayout>
      <TimePlusCursorData />
      <AppFooter />
    </>
  );
};

export default Home;
