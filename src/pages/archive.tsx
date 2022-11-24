import { Container, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';

const Archive = () => {
  return (
    <>
      <PageLayout page_type={'CoverPage'}>
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
    </>
  );
};

export default Archive;
