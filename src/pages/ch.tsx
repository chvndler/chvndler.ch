import { Container, InlineLink, Paragraph, Section, Text } from '@/components/ds';
import { AppFooter } from '@/components/layout/app-footer';
import { PageLayout } from '@/components/layout/page';
import { TimePlusCursorData } from '~/components/primitives/time-x-cursor-data';

const Home = () => {
  return (
    <>
      <PageLayout>
        <TimePlusCursorData />
        <Container size="2">
          <Text
            css={{
              color: '$chxn6',
              fontFamily: '$druk',
              fontSize: 16,
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
              fontSize: 13,
              fontWeight: 'normal',
              textAlign: 'center'
            }}
          >
            Front-end Developer & Designer.
          </Text>
        </Container>

        <Section size="2" css={{ paddingTop: 40 }}>
          <Container size="1" css={{}}>
            <Paragraph
              css={{
                color: '$sage10',
                fontFamily: '$rightGroteskText',
                fontSize: 20,
                fontWeight: '600',
                lineHeight: 1.4,
                textAlign: 'center'
              }}
            >
              The focus in the moment is building <InlineLink href="/">Atelier® Design</InlineLink>, to silence the
              noise within the design culture. I enjoy building simple, beautiful and performant web interfaces and
              experiences.
            </Paragraph>
          </Container>
        </Section>
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default Home;
