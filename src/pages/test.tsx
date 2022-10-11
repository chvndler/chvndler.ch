import { Container, Section, Space, Text } from '@/components/ds';
import { AppFooter } from '~/components/layout/app-footer';
import { PageLayout } from '~/components/layout/page';

const TestPage = () => {
  return (
    <>
      <PageLayout>
        <Section>
          <Container size="2">
            <Text
              css={{
                color: '$tartOrange',
                fontFamily: '$druk',
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              DEVELOPING PAGE
            </Text>
          </Container>
        </Section>
        <Space size="3" />
        <Section>
          <Container size="2">
            <Text
              css={{
                color: '$sage10',
                fontFamily: '$neueMontreal',
                fontSize: 40,
                fontWeight: 500,
                // letterSpacing: '-0.02rem',
                textAlign: 'left',
                lineHeight: '45px'
              }}
            >
              Projects
            </Text>

            <Text
              css={{
                color: '$sage10',
                fontFamily: '$neueMontreal',
                fontSize: 40,
                fontWeight: 500,
                // letterSpacing: '-0.02rem',
                textAlign: 'left',
                lineHeight: '45px'
              }}
            >
              Archive®
            </Text>

            <Text
              css={{
                color: '$sage10',
                fontFamily: '$neueMontreal',
                fontSize: 40,
                fontWeight: 500,
                // letterSpacing: '-0.02rem',
                textAlign: 'left',
                lineHeight: '45px'
              }}
            >
              Notes
            </Text>
            <Space size="3" />
            <Text
              css={{
                color: '$sage8',
                fontFamily: '$druk',
                fontSize: 18,
                fontWeight: 500,
                textAlign: 'left',
                lineHeight: '30px'
              }}
            >
              CONNECT
            </Text>

            <Text
              css={{
                color: '$sage9',
                fontFamily: '$aero',
                fontSize: 18,
                fontWeight: 600,
                textAlign: 'left',
                lineHeight: '30px',
                letterSpacing: '-0.05rem',

                '&:hover': {
                  color: '$twitter'
                }
              }}
            >
              twitter
            </Text>

            <Text
              css={{
                color: '$sage9',
                fontFamily: '$aero',
                fontSize: 18,
                fontWeight: 600,
                textAlign: 'left',
                lineHeight: '30px',
                letterSpacing: '-0.05rem',
                '&:hover': {
                  color: '$github'
                }
              }}
            >
              github
            </Text>
          </Container>
        </Section>
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default TestPage;
