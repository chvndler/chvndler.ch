import { Container, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { AppFooter } from '~/components/layout/app-footer';

const Archive = () => {
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
            ARCHIVE
          </Text>
        </Container>
      </PageLayout>
      <AppFooter />
    </>
  );
};

export default Archive;
