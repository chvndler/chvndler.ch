import { Container, Section, Text } from '@/components/ds';
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
              About
            </Text>
          </Container>
        </Section>
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default TestPage;
