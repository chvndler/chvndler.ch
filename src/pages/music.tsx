import { Container, Text } from '@/components/ds';
import { AppFooter } from '@/components/layout/app-footer';
import { PageLayout } from '@/components/layout/page';

const Music = () => {
  return (
    <>
      <PageLayout>
        <Container size="2">
          <Text
            css={{
              color: '$sage10',
              fontFamily: '$druk',
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: '-0.05rem',
              textAlign: 'center'
            }}
          >
            MUSIC
          </Text>
        </Container>
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default Music;